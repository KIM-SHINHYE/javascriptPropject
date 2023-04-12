// 1. String concatenantion
// +를 이용해서 문자열과 문자열을 합해서 새로운 문자열 만들 수 있음
console.log('my' + 'cat');
console.log('1' + 2); // 숫자를 문자열로 만듦
console.log(`string literals: 1 + 2 = ${1 + 2}`); // 백틱 이용하면 줄바꿈, 기호 등 전부 표시 됨
console.log("ellie's \n\tbook");

// 2. Numeric operators
console.log(1+1); // add
console.log(1-1); // substract
console.log(1/1); // divide - 몫
console.log(1*1); // multiply
console.log(5%2); // remainder - 나머지
console.log(2**3); // exponentation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++;
// porstIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`);

// 4. Assignment operators(할당 연산자)
let x = 3; // variable.js에 let x로 선언되어 있다면, 여기서 다시 선언할 수 없음
let y = 6;
x += y; // x = x + y;
x -= y;
x *- y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)
// const value1 = false; // 이모티콘 출력
const value1 = true;// 이모티콘 출력X
const value2 = 4 < 2;

// ||(or), finds the first truthy value
// 하나라도 true면 true 반환
// 이때, 만약 value1값에 true가 들어오면 뒤의 연산들을 따지지도 않고 true리턴
// 따라서 check()와 같이 연산을 많이 하는 식을 뒤쪽에 두는 게 좋음
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first false value
// 하나라도 fales면 false 반환
// 이때, 만약 value1값에 false가 들어오면 뒤의 연산들을 따지지도 않고 false리턴
// 따라서 check()와 같이 연산을 많이 하는 식을 뒤쪽에 두는 게 좋음
console.log(`and; ${value1 && value2 && check()}`);

// &&는 null체크시에도 사용
// often used to compress long if-statemnet
// nullableObject && nullableObject.something
//      - 즉, 앞쪽이 nullaleObject가 null이면 뒤쪽은 실행하지도 않고 false, nullableObject이 null이 아닐때만, somethig을 받아오는 것

function check() {
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('😥');
    }
    return true;
}

// !(not)
console.log(!value1); // 값을 반대로 출력
// true는 false로 false는 true로

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 즉, 타입이 달라도 들어있는 값이 같으면 같은 값
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 즉, 타입이 다르면 같은 값이 들어있어도 다른 데이터
// 웬만하면 이걸로 검사
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive)

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
// ellie1, ellie2에는 같은 값이 들어있지만 다른 reference가 들어있음
const ellie3 = ellie1;
// ellie3은  ellie1값을 넣어뒀기 때문에 같은 reference를 가짐

console.log(ellie1 == ellie2); // false - 각각 다른 reference가짐
console.log(ellie1 === ellie2); // false - 같은 타입이든 아니든 reference가 다름
console.log(ellie1 === ellie3); // true - reference를 가진 애를 할당했기 때문에 같은 레퍼런스참조


// equality - puzzler
// === 에선 값이 같아도 타입이 다르면 false가 뜸
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true 
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
// const name = 'ellie';
const name = 'coder';
if(name ==='ellie'){
    console.log('welcome, Ellie!');
} else if(name ===  'coder'){
    console.log('Yor are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// 조건이 ture일 때, value1, false일 때, value2실행
// 이걸 계속 묶어서 사용하면 가독성이 떨어지기 때문에 if, else나 switch문을 사용하는게 좋음
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS(정해져 있는 타입 검사시)
const broswer = 'IE';
switch(broswer) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome': // 같은 값을 출력할 땐, 묶어서 하면 됨
    case 'Firefox':
        console.log('love U!');
        break;
    default:
        console.log('same all!');
        break;
    }

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed/
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
// do문 먼저 실행 후, while문의 조건식 검사
// 위의 while문에 의해 이미 i는 0으로 바뀐 상태
do{
    // i가 0으로 바뀌었음에도 불구하고 do문 먼저 실행해 아래 로그가 먼저 찍히고, while문으로 가게 되어 멈추게 됨
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

// 아예 지역변수 i를 선언
for(let i = 3; i > 0; i = i-2){
    // inline variable devlaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
// 시간복잡도가 O(n^2) => CPU에 좋지 않음
// 웬만하면 추천하지 않음
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// break는 loop를 완전히 끝내는 것
// continue는 지금 것만 스킵하고 다음으로 넘어가는 것

// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i < 11; i++){
    if(i % 2 == 1){
        continue;
    }
    console.log(`i : ${i}`);
}
// Q1.정답
for(let i = 0; i < 11; i++){
    if(i%2 !== 0){ // 홀수 일때만 continue
        continue;
    }
    console.log(`q1. ${i}`);
}
// 이렇게 하는 것도 좋지만 내가 원하는 값일 때만 출력하게 하는게 더 좋음
for(let i = 0; i < 11; i++){
    if(i%2 == 0) {
        console.log(`q1. ${i}`);
    }
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for(let i = 0; i < 10; i++){
    if(i>8){ // 8까지 나와야지,, 8에서 break하면 8출력안되잖아,,
        break;
    }
    console.log(`i : ${i}`);
}

console.log('while');
while(true){
    console.log(`i : ${i}`);
    i++;
    if(i>8){ // 8까지 나와야지,,
        break;
    }
}
// Q2.정답
for(let i = 0; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}