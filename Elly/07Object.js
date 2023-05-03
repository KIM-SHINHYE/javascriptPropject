'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionally.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}

// 1. Literals and properties
// object를 만들 수 있는 방법 2가지
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

// primitive type은 변수 하나당 값을 하나만 담을 수 있음
const name = 'ellie';
const age = 4;
print(name, age);

/* 
아래의 print 함수를 둘 다 주석없이 사용하게 되면 print(name, age)로 전달된 값은 undefined가 뜨고 print(ellie)로 전달된 값은 name, age가 뜨고, 만약 print(person)을 주석처리하게 되면 print(name, age)값이  name, age가 뜨게 되고, print(ellie)로 전달된 값은 name 부분에 ellie 객체 자체가 들어가고, age는 값이 안뜸
-> 호이스팅으로 같은 이름의 함수가 끌어올려지는데 스크립트다 보니 아래에 있는 함수가 적용돼서 나타나는 현상인 듯
-> 그리고, 오버라이딩 개념이 없는 것 같다.(class 안에서는 가능)
-> 이유가 파라미터가 한 개인 print(ellie)를 호출하게 되면 print(person)이 주석처리 된 경우 print(name, age)를 호출하게 됨
*/

// function print(name, age){
//     console.log('name: ', name);
//     console.log('age: ', age);
// }

function print(person){
    console.log('persone.name', person.name);
    console.log('person.age', person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
// 자바스크립트는 타입이 runtime(프로그램이 동작하고 있을 때)때 결정됨
// 따라서 뒤늦게 프로퍼티 추가/삭제 가능(다른 언어에서는 이렇게 안함, js에서도 안하는게 좋음)
ellie.hasJob = true;
console.log(ellie.hasJob); // true

// can delete properites later 
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined

// 2. Computed properties
// key should be always string
// 객체안의 값을 호출하는 방법 2가지
console.log(ellie.name); // 2-1. 이건 코딩하는 순간 그 key에 해당하는 그 값을 받아오고 싶을 때 사용
console.log(ellie['name']); // 2-2. key는 항상 string타입으로(Computed properties)
// 정확하게 어떤 key가 필요한지 모를때 사용, 즉 runtime에서 결정될 때 사용
// => 즉, 대부분의 경우 .을 이용해 호출하면 되고, 실시간으로 원하는 key의 값을 받아오고 싶을 때 ['key']사용 => 나중에 동적으로 key의 value값을 받아와야할 때 사용

ellie['hasJob'] = true;
console.log(ellie.hasJob); // true

// 2-2에 대한 예제
// 사용자한테 key를 받아서 해당 key에 상응하는 value값 출력
// 따라서 코딩하는 시점에서는 언제 어떤 값을 출력할지 모름
function printValue(obj, key){
    console.log(obj.key); // undefined, undefined
    console.log(obj[key]); // ellie, 4
}

printValue(ellie, 'name');  
printValue(ellie, 'age'); 

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('ellie', 30);
console.log(person4); // {name: 'ellie', age: 30}

// 아래함수는 순수하게 object를 만들어서 return 해서 Class와 같은 역할함
// class 나오기 전엔 아래처럼 많이 사용 => 순수하게 Obejct를 만드는 함수들은 함수명 앞글자를 대문자로 하고, return이 아닌 Class의 constructor와 같이 this.name = name 이런 식으로 작성
function makePerson(name, age){
    // 함수 안에서 object를 만들어 return 
    return {
        // 아래처럼 key, value값이 동일하다면 생략 가능
        // name: name,
        // age: age,
        name,
        age,
    };
}

// 4. Constructor Function
// 최종적으로 순수 Object를 만드는 함수
function Person(name, age){
    // this = {}; 생략됨
    this.name = name;
    this.age = age;
    // return this; // 생략됨
}
// 호출할 때도 Class 호출했던것 처럼 new키워드 이용
const person5 = new Person('ellie', 30);
console.log(person5); // Person {name: 'ellie', age: 30}

// 5. in operator: property existence check(key in obj)
// 해당하는 오브젝트 안에 key가 있는지 없는지 확인
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false - 정의하지 않은 key에 대한 출력
console.log(ellie.random); // 정의하지 않은 키를 가져다 쓰면 undefined 

// 6. for..in vs for of
// for (key in obj)
// object에 사용
console.clear();
for(key in ellie){
    // ellie가 가지고 있는 key값들을 보여줌
    console.log(key);
}

// for(value of iterable)
// iterable에 사용(배열, 리스트 등 순차적으로 iterable한 애들한테 사용)

const array = [1,2,4,5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', 'age'};
const user2 = user; 
// 메모리에는 user가 참조하고 있는 ref가 있고, 그 ref는 name: ellie, age: 20을 가리키고 있음, 근데 user2가 user를 가리키고 있기 때문에 같은 ref값을 가지게 됨(즉, 같은 ref를 가리키고 있게 됨)
user2.name = 'coder'; 
console.log(user); // user2의 name을 변경했지만, user의 이름이 변경됨(같은 ref를 가리키고 있기 때문)

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3); // 기존에 user2.name에서 바뀐 coder값이 user에 들어가 있기 때문에 user3의 nemedms coder로 뜨게 됨

// new way - Object.assign사용
// 1.
const user4 = {};
Object.assign(user4, user); // (복사될 object, 복사하고자 하는 object)
console.log(user4);

// 2. - 바로 할당해서 사용 가능
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = {color: 'red'}
const fruit2 = {color: 'blue', size: 'big'}
// 공통: color
const mixed = Object.assign({}, fruit1, fruit2);
// 나열된 값들에 공통된 프로퍼티가 있다면 뒤에 있는 값으로 값이 덮어씌워지게 됨, 만약 fruit3의 color가 black이라면 mixed.color은 black이 나오게 됨
console.log(mixed.color); // blue
console.log(mixed.size); // big