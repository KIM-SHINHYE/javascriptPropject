// JSON

// 1. Objcect to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"] 쌍따옴표

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(), // json으로 변환하게 되면 시간 값이 string으로 변함
    // symbol: Symbol("id"), // js에만 있는  특별한 데이터도 json에 포함되지 않음
    jump: () => { // rabbit의 jump라는 함수는 json에 포함되지 않음 => 함수는 오브젝트에 있는 데이터가 아니라서 제외됨
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2023-04-08T05:20:00.890Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']); // 두 번째 인자: replacer => 배열 또는 오브젝트 => 즉, 내가 원하는 값만 넣으면 그 값만 json으로 변환해줌
console.log(json); // {"name":"tori","color":"white","size":null}

// 세밀하게 통제할 경우 콜백함수 이용
json = JSON.stringify(rabbit, (key, value) => {// 콜백함수 호출해서 바로 사용해도 됨
    console.log(`key: ${key}, value: ${value}`); // 특이한 점: 제일 처음에 호출되는 콜백함수는 key엔 아무것도 없고, value엔 object가 들어감
    return key === 'name' ? 'ellie' : value; // key에 name이라는 key가 들어올 경우 ellie로 변경하고 아닌 경우 원래 value리턴
});
console.log(json); // {"name":"ellie","color":"white","size":null,"birthDate":"2023-04-08T05:45:18.727Z"}


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj1 = JSON.parse(json);
console.log(obj1); // {name: 'tori', color: 'white', size: null, birthDate: '2023-04-08T05:58:04.652Z'}

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === `birthDate` ? new Date(value) : value;
});

// console.log(obj);
// rabbit.jump();
// obj.jump(); => 에러, 함수는 json으로 변환할 때 애초에 포함되지 않았기 때문에 obj로 다시 변환할 때도 없음

console.log(rabbit.birthDate.getDate()); // 현재 날짜 나옴, 8
// console.log(obj1.birthDate.getDate()); // error, 기존에 obj to json으로 serialize할 때 날짜값이 string형태로 변환됐고, 다시 parse를 통해 deserialize할 때는 이미 string되어 있는 걸 넣어줬기 때문에 string타입으로 getDate하면 에러뜨는 거 => 그래서 이걸 콜백함수를 이용해 date타입을 적절하게 변환한 뒤 리턴할 거
console.log(obj.birthDate.getDate()); // 현재 날짜 나옴, 8

// web site
// JSON Diff : 어떤 부분이 변경됐는지 알려줌
// JSON Beautifier : 포맷 예쁘게 만들기
// JSON Parser : json형태를 obj형태로 보여줌
// JSON Validator : 유효한 json인지 판별해줌