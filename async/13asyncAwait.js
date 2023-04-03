'use strict';

// async-await => 깔끔하게 Promise를 사용할 수 있는 방법(그렇다고 무작정 대체해서 쓰면 안됨, 적절한 상황에 맞게 적절한 거 쓰기)
// promise를 좀 더 간결하고 동기적으로 실행되게 되는 것처럼 만들어줌
// promise chaining을 하게되면 코드가 난잡해질 수 있는데 그것을 해결해줌

// 1. async
// 사용자에게 데이터를 받아오는 코드라고 가정
// function fetchUser() {
//     // do network request in 10 secs..
//     // return 'ellie'; 이렇게만 적으면 10초 뒤에 동기적으로 해당 값을 반환해줌
//     return new Promise((resolve, reject) => {
//         // return 'ellie'; // 이런 식으로 하면 resolve나, reject를 호출하지 않았기 때문에 계속 pending상태가 됨
//         // 꼭 resolve, reject를 이용해 완료해줘야 함
//         resolve('ellie'); // fullfiled
//     })
// }

// async 키워드를 함수 앞에 붙이게 되면 코드블럭이 알아서 Promise객체로 반환해줌
async function fetchUser() {
    return 'ellie'; // async만 놔도 promise객체로 반환해줌
}

const user = fetchUser(); // promise든 async든 promise객체로 반환
user.then(console.log);
console.log(user); // ellie

// 2. await
// async가 붙은 함수 안에서만 사용 가능
function delay(ms){
    // 정해진 ms가 지나면 resolve호출하는 promise return
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000); // await를 쓰게 되면 delay()가 끝날 때까지 기다렸다가(1초) 사과 return
    return '🍎';
}

async function getBanana() {
    // await delay(1000);
    await delay(2000);
    // throw 'error'; // 에러를 던지게 되면 해당 함수를 부르는 async 함수에서 try, catch를 통해 잡을 수 있음
    return '🍌';
}
// function getBananaPromise(){
//     return delay(1000)
//     .then(() => '🍌')
// }

// 이런 식으로 중첩해서 사용하다보면 콜백지옥을 경험할 수 있음
function pickFruitsPromise() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}

pickFruitsPromise().then(console.log) // 🍎 + 🍌

async function pickFruitsAsync() {
    // 호출하는 곳에서 error가 발생할 경우 error handling을 try, catch로 할 수 있음
    try{
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`;
    } catch (error){
        console.log(error);
    }
}

pickFruitsAsync().then(console.log);

// await 병렬처리
// apple를 가져오는 것과 banana를 가져오는 것은 연관이 없어서 서로 기다릴 필요가 없음 => 근데 기존 코드는 1초 기다려서 apple가져오고, 또 1초 기다려서 banana가져오는 형태. 그럼 2초 기다려야되는거
async function pickFruitsParallel(){
    // promise를 만드는 순간 바로 promise 안에 들어있는 코드블럭이 실행됨
    const applePromise = getApple(); 
    const bananaPromise = getBanana();
    // 만든 promise를 가지고 동기화를 시켜줌
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`; // 병렬적으로 실행되어 1초만에 호출됨
}

// 3. 유용한 Promise
// Promise.all: 서로 연관이 없어 병렬적으로 promise를 처리할 수 있는 경우, promise배열을 전달하게 되면 모든 promise들을 병렬적으로 다 받을 때까지 모아줌
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]) // 다 받아지면 
    .then(fruits => fruits.join(' + ')); // 그 받아진 애들이 배열로 전달됨
}
pickAllFruits().then(console.log); // 🍎 + 🍌

// Promise.race: 배열에 전달된 promise들 중 가장 먼저 값을 return 하는 걸 먼저 돌려줌
function pickOnlyOne() {
    // apple은 1초, banana는 2초 걸리기 때문에 apple이 return됨
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log)

// 12callback-to-promise.js에 있는 걸 async/await로 변경해보기