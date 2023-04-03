'use strict';

/**
 * Promise: JS에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트, 자바스크립트 내장 api => 콜백함수 대신 유용하게 쓸 수 있는 오브젝트
 * promise는 class이기 때문에 new를 통해 생성가능
 * 2개의 콜백함수(resolve, reject) 전달
 * 크게 이해할 것 2가지
 * 1. state: pending -> fulfilled or rejected
 * => resolve: 정해진 장시간에 기능을 수행하고 나서 정상적으로 이 기능이 수행되어졌다면 성공의 메시지와 함께 처리된 결과값 전달
 * => reject: 기능을 수행하다가 예상치 못한 문제가 발생했다면 에러를 전달
 * 2. producer(정보제공), consumer(정보소비)
 **/ 


// 1. Producer
// when new Promise is created, the executor runs automatically. => promise를 만드는 순간 콜백함수 호출(사용자가 버튼을 눌렀을 때 네트워크 요청을 하는 경우라면 이런 식으로 작성하면 불필요해짐)
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network')) // Error는 JS에서 제공하는 오브젝트 중 하나 => 어떤 에러가 발생했는지 이유를 잘 명시해야함
    }, 2000);
});

// 2. Consumers(Producer에서 만든걸 사용): then, catch, finally
promise
    // 여기서 들어온 value는 위에서 resolve를 통해 통과된 값인 ellie가 됨 
    // then: promise가 정상적으로 잘 수행되어서 마지막에 resolve라는 콜백함수를 통해서 전달된 값이 파라미터로 전달됨
    .then((value) => { 
        console.log(value);
    })
    // reject: 무언갈 하다 실패했을 때 reject를 통해 전달된 error를 잡는 catch호출
    // then을 통해 반환된 값이 promise객체이기 때문에 여기에 .catch 등록이 가능한 것
    .catch((error) => {
        console.log(error);
    })
    // finally: 성공, 실패에 상관없이 마지막에 무조건 수행
    .finally(() => {
        console.log('finally');
    })

// 3, Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); // 1초있다가 숫자 1전달
});

fetchNumber
    // then은 값을 바로 전달할 수도, promise객체를 전달할 수도 있음 
    .then(num => num * 2) // 2
    .then(num => num * 3) // 6
    .then(num => {
        // 그 숫자를 다른 서버에 보내서 다른 숫자로 변환된 값을 받을 거
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000); // 5, 1초 있다가 값을 전달
        });
    })
    .then(num => console.log(num)); // 5 , 최종적으로 2초 있다가 값이 출력되게 됨


// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);

    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    })

// 1. process가 닭에서 달걀을 받아오고, 그 달걍을 받아서 요리를 하는 형태
// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal))

// 2. 위에처럼 한가지만 받아서 바로 전달하는 경우는 아래처럼 생략가능
// getHen()
//     .then(getEgg)
//     .then(cook)
//     .then(console.log)

// 3. 에러가 발생한 경우(reject) catch를 통해 에러 처리가능
// getHen()
//     .then(getEgg)
//     .then(cook)
//     .then(console.log)
//     .catch(console.log) // 이걸 안쓰면 uncaught error 뜸

// 4. then에서 에러가 발생한 경우 바로 다음의 catch를 통해 다른 처리를 해서 전달할 수 있음
// egg에 reject를 해놓은 상태 => egg에 에러가 뜨는데, catch문을 통해 빵으로 바꾼 상태
getHen()
    .then(getEgg)
    .catch(error => {
        return '🥐'; // 여기서 egg를 못받아 와서 bread로 바꿔서 return해줌
    })
    .then(cook)
    .then(console.log)
    .catch(console.log)
