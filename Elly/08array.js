'use strict';

// 1. Declaration
const arr1 = new Array();
const art2 = [1,2];

// 2. Index position
const fruits =['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined(없는 값에 접근해도 에러뜨지 않음)
console.log(fruits[fruits.length -1]);
// console.clear();

// 3. Looping over an array
// print all fruits
// a.
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach => 콜백함수를 받아옴, 여기서는 인자로 array를 받을 수 있지만  잘 받아오지 않음
// fruits.forEach(function(fruit, index, array) {
//     console.log(fruit, index, array);
// })
fruits.forEach((fruit, index, array) => 
    console.log(fruit, index, array)
) // arrow function에 한 줄만 있는 경우 {} 생략가능

fruits.forEach((fruit)=> console.log(fruit));

// 4. Addition deletion, copy
// push: add an item to the end(뒤에서 넣는거)
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end(뒤에서 빼는거)
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning(앞에서 넣는거)
fruits.unshift('🍓','🍋');
console.log(fruits);

// shift: remove an item from the beginning(앞에서 빼는거)
fruits.shift();
fruits.shift();
console.log(fruits);

// unshift, shift는 pop, push, index를 이용해 요소에 접근하는 것보다 상당히 느림 => unshift, shift는 앞에서 부터 조작하는 것이기 때문에 앞에 있는 요소들을 뒤로 미뤄줘야하기 때문에 느림. 배열이 길면 길수록 뒤로 보내야 할 것들이 더 많기 때문에 더 오래걸리게 됨

// splice: remove an item by index position(만약 인자값을 한 개만 쓰면 해당 index로 부터 그 뒤의 요소들을 다 지움, 따라서 한 개만 지우고 싶다 그러면 (2,1) 이런 식으로 써줘야함), 원본 배열에 영향 줌
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
// fruits.splice(1); // 인자값을 한 개만 쓰면 해당 index로 부터 그 뒤의 요소들을 다 지움
fruits.splice(2,1); // 한 개만 지우고 싶으면, 인자값을 두 개 쓰고 1써야 함(시작 인덱스, 그 인덱스로부터 지우고자 하는 갯수)
console.log(fruits);
fruits.splice(1,1,'🍏', '🍉') // 1번째 있는 값부터 1개지우고 사과와 수박넣기

// combine two arrays => concat
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index: 같은 값이라면 가장 첫 번째 나타나는 인덱스 리턴
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥')); // 해당값 없으면 -1출력

// includes - true, false return(해당 값이 존재하는지 안하는지에 대한 true, false)
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf: 같은 값이라면 가장 마지막에 나타나는 인덱스 리턴
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

