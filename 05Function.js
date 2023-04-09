'use strict';

// Function
// - fundamental building block in the program
// - 프로그램을 구성하는 기본적 빌딩블럭
// - subprogram can be used multiple items
// - 서브프로그램이라고도 불리며, 여러 번 재사용 가능
// - performs a task or calculates a value
// - 한 가지의 일이나 어떤 값을 계산하기 위해 사용

// === [1. Function declaration] ===
// function name(param1, param2) {body ... return;}

// 함수는 한가지의 일만 담당해야 함
// one function == one thing
// naming : doSomething, command, verb(행위, 명령, 동사형태)
// ex) createCardAndPoint -> createCard, createPoint(세분화 필요)
// function is object in JS
// 즉, JS에서 함수는 객체의 일종이기 때문에 변수에 할당, 파라미터 지정, 함수 리턴 가능 
function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello~~');
log(1234)
// 이렇게 문자열이랑 숫자를 파라미터로 보내도 명확하지 않음
// 여기선 type을 쓰지 않기 때문에 TS가 필요
// 파라미터, 리턴타입에 타입을 명시해야 함
// TS를 사용하는 게 좀 더 명확, 협업할 때 중요
// typescript 페이지에 오면 playground가 있는데 여기서 어떤 식으로 호환가능한지 직접 적어볼 수 있음(타입스크립트 쓸 때 자바스크립트는 어떤지)

// 2. Parameters
// premitive parameters: passed by value - 메모리에 value가 그대로 저장
// object parameters: passed by reference - 메모리에 reference가 저장
function changeName(obj){
    obj.name = 'coder'; // 전달된 obj(object)의 name을 coder로 변환
}

const ellie = {name : 'ellie'}; // ellie 객체를 만들어 할당하면 메모리에 오브젝트가 만들어진 ref가 저장, ref는 오브젝트를 메모리 어딘가 지정
// 즉, 오브젝트는 ref로 전달되기 때문에 함수 안에서 오브젝트의 값을 변경하게 되면 그 변경사항이 그대로 메모리에 적용
changeName(ellie); // ellie 객체의 name이 coder로 변환
console.log(ellie);

// 3. Default parameters(added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('HI!'); // HI! by unknown
// 현재 파라미터로 'HI!' 1개만 보냈기에, 안보낸 것은  default인 unknown로 세팅
// 그 default는 = '' 형태로 사용 가능

// 4. Rest parameters (added is ES6)
// ...은 배열 형태로 전달받게 됨
function printAll(...args){ // 파라미터 자체는 args
    // 출력방법 1.
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // 출력방법 2. of사용
    for(const arg of args){
        console.log(arg);
    }
    
    // 출력방법 3. forEach사용, 배열일 때 사용
    args.forEach((arg => console.log(arg)))
}

printAll('dream', 'coding', 'ellie'); // 3개의 인자를 전달하면 해당 함수에서는 ...args를 통해 이 3개의 문자열을 배열로 받게 됨

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.(변수도, 함수도 마찬가지)
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // 지역변수 - 안에서만 접근 가능
    console.log(message); // local variable
    console.log(globalMessage); // 안에서는 globalMessage(전역변수)볼 수 있음

    // 함수 안에 다른 함수 정의
    function printAnother(){ 
        console.log(message); // 자식은 부모에게서 정의된 message를 확인할 수 있음
        let childMessage = 'hello'; // 하지만, childMessage를 부모에서 확인하려면 볼 수 없음(밖에서는 안을 볼 수 없기 떄문)
        // return undefined 생략됨
    }
    // console.log(childMessage); // 에러뜸 - 자식에게 정의된 childMessage 변수는 밖(부모)에서 볼 수 없기 때문

    // 중첩된 함수에서 자식의 함수가 부모의 함수에 정의된 변수들에 접근가능 한 것이 클로저란 개념
}

printMessage();
// console.log(message); // 에러뜸 - 지역변수를 밖에서 볼 수 없기 때문


// 6.  Return a value
function sum(a, b){
    return a+b; 
    // return undefined // return타입이 없는 것은  return undefined가 쓰여져 있고, 이것은 생략가능
}

const result = sum(1,2); // 3
console.log(`sum: ${sum( 1,2)}`);


// 7. Early return, early exit - 조건이 맞지 않을 때는, 빠르게 종료하는 로직을 먼저쓰기
// bad
function upgraderUser(user) {
    if(user.point > 10) { // {}안에서 코드 작성하면 가독성 떨어짐
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return; // 조건에 맞지 않으면 바로 종료할 수 있게 해야함
    }
    // long upgrade logic...
}

// === [2. Function Expression] ===

/*
First-class function
functions are treated like any other variable 
- can be assigned as a value to variable - 함수는 다른 변수처럼 할당가능
- can be passed as an argument to other functions. - 함수는 매개변수로 전달 가능
- can be returned by another function - 다른 함수로 리턴가능

1. Function expression
- a function declaration can be called earlier than it is defined (hoisted)
- a function expresstion is created when the execution reached it.

=> [1. fucntion declaration]과 [2. function expresstion]의 가장 큰 차이점 : 호이스팅의 여부
fucntion expression은 할당된 다음부터 호출 가능(아래 print변수에 할당한 것처럼), fucntion declaration은 호이스트 가능(자바 엔진이 알아서 올려줌)

*/
// 함수는 변수를 선언함과 동시에 할당 가능, 함수를 변수에 할당했을 때 다른 변수에 다시 할당가능
// anonymous function - function 옆에 이름이 없는 함수
const print = function(){ 
    console.log('print');
};

print(); // 함수를 print변수에 할당했기 때문에 호출하려면 괄호를 써줘야 함

// named function - function 옆에 이름이 있는 함수
// const print = function print(){ 
//     console.log('print');
// };

const printAgain = print; // 이미 print 에 함수가 할당되어 있기 때문에 다른 변수에 할당 한 후, 호출할 때도 아래처럼 괄호를 같이 써줘야 호출 가능
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback fucntion using function expression
// 콜백함수: 미리 함수를 정의해두고, 그 함수를 매개변수로서 전달해서 상황에 맞는 함수 호출
function randomQuiz(answer, printYes, printNo){ // answer는 변수, printYes, printNo는 콜백함수 - 정답일때, 아닐떄 부를 함수
    if(answer === 'i love you'){
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
// 콜백함수 printYes
const printYes = function(){
    console.log('yes!');
};

// named function
// - better debugging in debugger's stack traces - 즉, stack traces에 이름이 나오게 하기 위함
// - recursions - 함수 안에서 함수자신을 호출하기 위함
// 콜백함수  printNo
const printNo = function print(){
    console.log('no!');
    // print(); 자신 스스로 또 다른 함수를 또 호출 => recursions - 웬만하면 쓰지말기
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('i love you', printYes, printNo);

// Arrow function
// always anoymous
// 일반 무명함수
// const simplePrint = function(){
//     console.log('simplePrint!');
// };

// 화살표 함수
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => console.log(a+b); // (a,b)는 매개변수, a+b는 return 값
// 위처럼 한 줄인 경우 {} 없이 return 할 수 있지만, 함수 안에서 좀 더 다양한 일을 해야한다면 {}를 쓰고 return 도 해주면 됨
const simpleMultiply = (a,b) => {
    // do something more
    // 로직이 길 경우
    return a*b;
};


// IIFE : Immediately Invoked Function Expression - 선언함과 동시에 호출하려면 괄호로 묶기 - 최근엔 잘 쓰이진 않지만 바로 호출가능
(function hello(){
    console.log('IIFE');
})();
// 아래의 코드는 위와 같은 말 - 선언해주고, 호출해주는 게 필요
// function hello(){
//     console.log('IIFE');
// }
// hello();

// Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder - 해당 키워드들이 들어오면 a, b를 연산, 다른 command가 들어오면 처리해주기

// myAns
// let command = prompt("command");
// // const calc = (command(), 5, 3);
// const calc = function(command, a, b){
//     if(command === 'add')
//         add(a,b);
//     else if(command === 'substract')
//         substract(a,b);
//     else if(command === 'divide')
//         divide(a,b);
//     else if(command === 'multiply')
//         multiply(a,b);
//     else if(command === 'remainder')
//         remainder(a,b);
//     else 
//         command = prompt("try it agian");
// }
// calc(command, 10, 3);

// function substract(a,b){
//     if(a > b)
//         return console.log(a-b);
//     else
//         return console.log(b-a);
// }

// function divide(a,b){
//     if(a > b)
//         return console.log(a/b);
//     else
//         return console.log(b/a);
// }

// function multiply(a,b){
//     return console.log(a*b);
// }

// function remainder(a,b){
//     if(a > b)
//         return console.log(a%b);
//     else 
//         return console.log(b%a);
// }

// ans
function calculate(command, a, b){
    //  정해진 데이터를 처리하는 건 if문보다 switch문이 더 나음
    switch(command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 2, 3));