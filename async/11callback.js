'use strict';

// js는 동기적
// 호이스팅이 된 이후부터는 코드가 우리가 작성한 순서에 맞춰서 하나하나 동기적으로 실행됨
// *호이스팅: var 변수, 함수 선언들이 자동적으로 제일 위로 올라가는 것

// 아래를 실행하면 순서대로 1,2,3 뜸
console.log('1');
console.log('2');
console.log('3');
console.log('');

// 비동기적: 언제 코드가 실행될지 예측할 수 없는 것
// 아래를 실행하면 예측할 수 없음
// 콜백함수: 우리가 전달해준 함수를 나중에 너가 불러줘
console.log('4');
// setTimeout(function() { // 1초가 지난다음 함수 실행해줘 => 나중에 다시 불러줘 : Callback
//     console.log('5');
// }, 1000)
setTimeout(() => console.log('5'), 1000)
console.log('6');

// Synchronous callback
function printImmediately(print){ // print하는 콜백함수를 받아서 바로 실행가능
    print();
}
printImmediately(()=> console.log('hello'));


// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);

/*
// 위에 설명한 거는 아래와 같은 말

// 호이스팅으로 함수선언이 가장 위에 배치되게 됨
function printImmediately(print){ 
    print();
}

function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

console.log('4'); // 동기
setTimeout(() => console.log('5'), 1000) // 비동기
console.log('6'); // 동기


printImmediately(()=> console.log('hello')); // 동기 => 여기까지 출력되고 나서 1초 뒤의 비동기 함수 호출
printWithDelay(()=> console.log('async callback'), 2000); // 비동기 => 1초 뒤 비동기 함수 호출된 뒤, 2초뒤 비동기 함수 호출
*/

// 콜백지옥: 콜백함수 안에서 다른 콜백함수를 부르고 불러서 발생
// Callback Hell example
// backend 서버에서 데이터 받아오는 클래스
class UserStorage {
    // id, password를 입력하면 성공했는지 실패했는지에 대한 api라고 가정
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    // user의 정보를 받아서 해당 유저의 role을 가져오는 api라고 가정
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user ==='ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            } else{
                onError(new Error('no access'));
            }
        }, 1000)

    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage.loginUser(id, password, user => {
    // login에 성공하면 여기 로직을 탐 => 성공하고나서 getRoles가져와야 하니 여기서 success, error로 나뉘는거
    userStorage.getRoles(user, userWithRole => {
        // 로그인 성공 후, 역할을 가져오기에 성공하면 탐
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
    }, error => {
        // 로그인 성공 후, 역할을 가져오지 못하면 탐
        console.log(error);
    })

}, error => {
    // login에 실패하면 여기 로직을 탐
    console.log(error);
})

// 콜백 체인의 문제점
/*
 * 가독성이 떨어짐
 * 에러가 발생해서 디버깅하는 경우 어려움
 * 유지보수 어렵
 */