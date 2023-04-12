// 1. use strict
// added in ES 5
// use this for vanila JS
// VanilaJS로 개발할 땐, 정의해두는게 좋음(typescript일 땐 그럴 필요없음)
// JS는 유연한 언어이기 때문에 strict하게 지켜줘야 함
'use strict'; 

// 2. Variable, rw(read/write)
// variable : 변수
// let (added in ES6) - JS에서 변수 선언키워드
// {} : block scope

let globalName = 'global name'; // 전역변수 - {}밖에서도 사용가능 - 어플리케이션 시작부터 끝까지 메모리에 생성되어 있기에 최소한만 쓰기, 웬만하면 지역변수로 사용하는게 좋음
{
    let name = 'ellie';
    console.log(name);
    name = 'Hello';
    console.log(name);
    console.log(globalName); 

}
console.log(name); // block{}밖에서는 {} 안에 있는 내용을 볼 수 없음
console.log(globalName); 

// var는 더이상 사용하지 않음 - let사용하기
// var hoisting(호이스팅) - 어디에 선언했는지 상관없이 선언을 항상 제일 위로 끌어 올려주는 것
// var는 block이 먹히지 않음

// 3. Constant, r(read only) - 할당한 뒤로 바꾸지 않을 떄 사용
// 웬만하면 constant로 사용
// 선호이유: 보안, 스레드 안전성, 휴먼에러 감소
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : primitive types, frozen objects(ex] object.freeze())
// - 데이터 자체를 바꾸는 것은 불가능

// Mutable data types: all objects by default are mutable in JS
// - 모든 objects는 데이터 변경 가능


// 4. Variable types : 데이터 타입 종류
// 4-1. primitive (더이상 나눠지지 않는 single item): number, string, boolean, null, undefined, symbol
// 4-2. object(primitive타입을 여러 개로 묶어서 관리), box container
// 4-3. function, first-class function -> function을 데이터 타입으로 사용 가능(인자, 매개변수, 리턴값 모두 가능)
// primitive(메모리에 value 저장), object(메모리에 reference 저장)인지에 따라 메모리에 다른 방식으로 저장됨

const count = 17 // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// type은 둘 다 number로 나옴, 따로 number라고 선언하지 않아도 타입이 다이나믹하게 결정됨

// <특별한 값이 적용된 타입들>
// 1. number - special numeric values : infinity, -infinity, Nan => 항상 number가 valid한 값인지 확인하고 사용하기
const infinity = 1 / 0; // 양수를 0으로 나눌 때 infinity
const negativeInfinity = -1 / 0; // 음수를 0으로 나눌 때, -infinity
const nAn = 'not a number' / 2;  // 숫자가 아닌 값을 숫자로 나눌 때, nan
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bingInt (새롭게 추가, 많이 쓰이진 않을거지만 알아두기)
// 끝에 n만 적어주면 bigInt로 인식, 하지만 크롭, 파이어폭스에서만 인식 가능
const bingInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2**53)
console.log(`value: ${bingInt}, type: ${typeof bingInt}`)

// 2. string
// 하나의 글자던 여러 개의 글자던 string으로 할당 됨
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan; // string끼리 붙이기
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) - 일시적으로 출력
console.log(`value: ${helloBob}, type: ${typeof helloBob}`)

// 3. boolean
// false : 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 명시적으로 텅텅빈 값이라고 지정하기
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

// undefined
// 선언은 되었지만 값이 할당되지 않음
let a;
console.log(`value: ${a}, type:${typeof a}`);

// 4. symbol, create unique identifiers for objects
// 고유 식별자가 필요하거나 동시다발적으로 일어나는 코드에서 우선순위 주고자 할 때, 사용
// 다른 곳에서 string을 이용해 식별자를 사용했으면 같은 string일 때, 같은 식별자로 인식
// 하지만 symbol은 동일한 'id'에 대해서 동일한 식별자를 만들었지만 다른 식별자인 셈
// 즉, 동일한 string으로 만들었어도 다른 식별자가 됨
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

// 같은 식별자인지 판단하기 위해 ===사용
 console.log(symbol1 === symbol2); // false

// 만약, 같은 id값에 대해 동일한 식별자로 만들기 위해선 for사용
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id'); 
 console.log(gSymbol1 === gSymbol2); //true
// symbol은 그냥 출력하려고 하면 에러떠서 .description을 써서 string으로 변환해서 출력해줘야 함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing: dynamically typed language 
// 어떤 타입인지 선언하지 않고 프로그램이 동작할 때(runtime시) 할당된 값에 따라 타입이 변경될 수 있음
// - 빠르게 작성할 때 좋지만 큰 플젝에선 strict하지 않아서 단점이 될 수도 있음
// 그래서 JS에 type을 추가한 TS가 나옴 => 하지만, JS는 브라우저가 이해할 수 있기 때문에 실시간으로 볼 수 있지만, TS는 브라우저가 이해할 수 있는 JS로 trans compiler인 BABEL을 이용해야 볼 수 있음

let text = 'hello'; // string할당
console.log(text.charAt(0)); // h, 여기선 string이지만 아래 예제들 따라하면 number로 바뀌게 됨, 그 상태에서 다시 text.charAt(0)하게되면 에러
console.log(`value: ${text}, type : ${typeof text}`); // 이때의 타입은 string

text = 1; // number할당
console.log(`value: ${text}, type : ${typeof text}`); // 이때의 타입은 number

text = '7' + 5; // string과 number를 합치면 number를 string 으로 변환
console.log(`value: ${text}, type : ${typeof text}`); // 이때의 타입은 string

text = '8' / '2';
console.log(`value: ${text}, type : ${typeof text}`); // 이때의 타입은 number(알아서 number로 인식해서 나눠줌)
console.log(text.charAt(0)); // 에러(현재 number형임)

// 만약, string으로 선언 후, number로 할당한 후에 charAt사용하려면 에러 뜸

// object, real-life object, data structure
const ellie = {name : 'ellie', age:20}; // ellie라는 객체의 name은 'ellie', age는 20
// ellie라는 객체는 const로 지정되어 한 번 할당된 후, 해당 메모리로 접근 할 수 있는 주소가 잠겨져 있어 다른 객체로 바꿀 수 없지만, 객체 안에 있는 name, age에 대한 변수는 또 다른 메모리에 할당되어 있기 때문에 바꿀 수 있음
ellie.name = 21;