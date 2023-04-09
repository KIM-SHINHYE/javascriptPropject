'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - sysntactical sugar over prototype-based inheritance


// 1. Class declaration
class Person {
    // constructor -> 이걸 이용해 필요한 데이터를 전달받음
    constructor(name, age) {
        //fields -> Person 클래스 안에 존재하는 this.name, this.age 변수 안에 전달받은 데이터 넣음(여기선 따로 변수 선언안해줘도 되는구나)
        this.name = name;
        this.age = age;
    }

    // mehtods
    speak() {
        // this는 생성된 object의 이름을 넣게 됨
        console.log(`${this.name}:  hello!`)
    }
}

// Object 생성 -> 새로운 Object만들 떈 new키워드 이용
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); // ellie: hello!

// 2. Getters and Setters - 사용자가 잘못된 값을 넣어도 그걸 방어적인 자세로 만들 수 있게 해줌
// ex) Coffee Vending Machine
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // get을 이용해 값을 return하고, set을 이용해 값을 설정
    /* 

    - getter함수를 정의하는 순간, constructor에 있는 this.age는 메모리에 있는 값을 읽어오는 것이 아닌 getter를 호출
    - setter를 정의하는 순간 = age 로 값을 할당할 떄, 바로 메모리에 있는 값을 할당하는 것이 아니라 setter를 호출하게 됨 
        => 즉, setter안에서 전달된 value를 결국 this.age에 = value로 할당할 때, 메모리에 있는 값을 업데이트하는게 아닌 또 다시 setter를 호출하게 되는 것 
        => 따라서 계속 setter를 호출하게 되니까 무한대 호출하게 됨
    => 이를 방지하기 위해 getter, setter에서 쓰는 변수를 다르게 가져가야 함

    */
    get age() {
        // return this.age;
        return this._age;
    }

    // 사용자가 잘못된 값을 입력해도 setter를 통해 값 설정 가능
    // 근데 이 설정하는 걸 다른 사람이 하면 안좋으니까 private하게 해서 encapsulation하는 것
    set age(value) {
        // this.age = value; 무한

        // if(value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

// age를 음수로 설정해둘 때, set을 이용해 0으로 만들거나 에러를 뱉어내거나 할 수 있음
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields(public, private)
// 최근 추가(2020년도 당시) -> 그래서 많은 브라우저에서 지원하지 않을수도 있기에 알고만 있기(확인해보고 쓰기)
class Experiment{
    publicField = 2; // 외부 접근 가능
    #privateField = 1; // 클래스 내부에서만 접근 가능
    usePrivateField = this.#privateField + this.publicField + 9;
    
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined
console.log(experiment.usePrivateField); // 12

// 4. Static properies and methods
// 최근 추가(2020년도 당시) -> 그래서 많은 브라우저에서 지원하지 않을수도 있기에 알고만 있기(확인해보고 쓰기)
/* 

Class 안에 있는 fields와 methods들은 새로운 object들이 만들어질 때마다 그대로 복제되어서 값만 우리가 지정된 값으로 변경되는데, 이런 오브젝트에 상관없이(데이터에 상관없이) 클래스가 가지고 있는 고유한 값과 동일하게 반복 사용되어지는 메소드들에 static을 붙이게 되면 object와 상관없이 class 자체에 연결되게 됨
=> 따라서 클래스 자체에서 직접 접근해야 함
=> 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는 거라면 static을 사용하는 편이 메모리를 좀 더 줄일 수 있음

*/
//  
class Aritcle {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Aritcle.publisher);
    }
}

const article1 = new Aritcle(1);
const article2 = new Aritcle(2);
console.log(article1.publisher); // undefined
console.log(Aritcle.publisher); // Dream Coding
Aritcle.printPublisher(); // Dream Coding

// Inheritance 상속 및 다양성? 다형성?
// a way for one class to extend another class
// 사각형, 삼각형, 원 등은 공통적으로 나타낼 수 있는 fields: 너비, 높이, 색상 / methods: 색칠하기, 너비구하기 등등이 공통적
// => 이것들의 공통점: 도형 -> shape => 공통적으로 사용하는 값을 재사용
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    // 필요한 함수만 재정의(overriding)할 수 있음
    // 기존에 shape에서 틀렸던 getArea함수를 다시 재정의
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // super.draw()를 통해 상속받은 경우: drawing red color of 출력 // console.log('🔺')를 통해 overriding한 경우: 🔺 출력
console.log(triangle.getArea()); // 200

// 6. Class checking: instanceOf: class를 이용해 새롭게 만들어진 인스턴스  - 왼쪽에 있는 인스턴스가 오른쪽에 있는 클래스의 인스턴스인지 아닌지 true, false return
console.log(rectangle instanceof Rectangle);  // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t, 우리가 만든 자바스크립트의 모든 오브젝트, 클래스들은 자바스크립트의 object를 상속함, 따라서 Object에 있는 함수를 오버라이딩할 수 있음, 여기서 toString이용해서 좀 더 의미있는 값을 출력해봄
console.log(triangle.toString());


// JavaScript Objects => 자바스크립트 내부에 포함되어진 오브젝트들이 뭐가 있는지 보여줌
// 참고 사이트: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference