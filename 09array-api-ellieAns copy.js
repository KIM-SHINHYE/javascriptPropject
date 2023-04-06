// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // 2, join 이용
    const fruitsStr2 = fruits.join();
    const fruitsStr3 = fruits.join(" ");
    // console.log(fruitsStr2);
    // console.log(fruitsStr3);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const fruitArr = fruits.split(', '); // 구분자를 전달하지 않으면 배열 안에 하나의 문자열로 들어가짐
    const fruitArr2 = fruits.split(', ', 2); // 두 번째 인자는 limit(optional) 이 limit은 배열 0번째부터 몇 개 보여줄건지 나타냄

    // console.log(fruitArr);


}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    // console.log(array);
    // console.log(result); 
    // 원본도 바뀌고 반환값에도 바뀐 배열이 들어감

}


// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const spliceArr = array.splice(2); // [3, 4, 5] - 인덱스 2부터 자름
    // const spliceArr2 = array.splice(0,2); // [1, 2] - 0부터 2개

    const sliceArr = array.slice(2)
    const sliceArr2 = array.slice(2,5)

    // console.log(array); // spliceArr: [1, 2], spliceArr2: [3, 4, 5]
    // console.log(spliceArr); // [3, 4, 5]
    // console.log(spliceArr2); // [1, 2]

    // console.log(sliceArr); // [3, 4, 5]
    // console.log(sliceArr2); // [3, 4, 5]
    // slice랑 splice를 쓰는 느낌은 비슷하지만 원본이 변경되는지 안되는지 차이 있음
    // 즉, splice는 잘린 값이 들어감

}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // .find 찾아서 들어가면 value is s가 있는데, 그게 boolean타입으로 정의된 걸 전달해주면 된다는데?, 첫 번째로 찾은 값 return(단, (predicate) 전달된 콜백함수가 ture일 때), predicate는 모든 배열의 요소마다 콜백함수 호출
    // const result = students.find(function(student, index) {
    //     console.log(student, index); // students안에 있는 값들 가져옴
    //     return student.score === 90; // 이 조건을 만나면 반복문 그만 돔 => 배열 안의 요소들을 돌면서 return 에 적혀있는 조건문과 같은 요소를 만나면 return
    // })
    // console.log(result);

    const result = students.find((student)=>student.score === 90);
    // console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    // console.log(result)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // map은 배열 안에 있는 요소 하나하나를 바꾸는 콜백함수 실행해 값을 변경해 새로운 값으로 배열을 리턴
    // 여기서도 score를 씀으로써 배열 요소 안에 있는 값들 중 score의 값만 뽑아 새배열로 만듦
    const result = students.map((student) => student.score);
    // console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // some은 배열 안의 요소들 중 조건에 맞는 값이 있는지 없는지 리턴
    const resultSome = students.some((student) => student.score < 50);
    // console.log(resultSome); // true - 하나라도 조건에 해당이 되면 true 리턴

    // 반대개념 : every
    // 배열 안에 있는 모든 요소들이 조건을 충족해야지 true리턴
    const resultEvery = !students.every((student) => student.score >= 50);
    // console.log(resultEvery);
}

// Q9. compute students' average score
{
    // reduce : 원하는 시작점(initialValue)부터 모든 배열을 돌면서 어떤 값을 누적하는 것
    // return하는 값이 다음 콜백함수를 호출할 때 prev로 가게됨 => 즉, prev엔 이전에 콜백함수에서 리턴된 값이 전달돼서 오고, curr은 배열의 요소를 순차적으로 전달받는 것
    // const result = students.reduce((prev, curr) => {
    //     console.log('====');
    //     console.log(prev);
    //     console.log(curr);
    //     return curr; // 이 값이 prev로 가게 됨
    // })

    // const result = students.reduce((prev, curr) => {
    //     console.log('====');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score; // 이 값이 prev로 가게 됨
    // }, 0) // 여기선 0이 initialValue인데, 초기값 세팅을 하게 되는 거 
    // 0을 세팅함으로써 A,B부터 시작한 걸 0,A부터 시작하게 됨 => 0을 누적 값으로 가져가는 거, 그래서 이전 값에 학생의 점수를 더해서 계속 누적되는 형태

    // 위의 코드를 간단하게 
    const result = students.reduce((prev, curr) => prev + curr.score, 0) 
    console.log(result/students.length);

    // reduceRight를 쓰게되면 배열의 마지막 요소부터 호출
    // const resultRight = students.reduceRight((prev, curr) => {
    //     console.log('====');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score; 
    // }, 0)
    // console.log(resultRight);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // map은 배열 자체를 리턴 -> score만 모아둔 후 join으로 묶으면 string으로 변경
    const result = students
        .map((student) => student.score)
        .join();
    // console.log(result);

    // map, join 이런 것들을 연속해서 사용가능 -> 이런 걸 함수형 프로그래밍이라고 함
    const addResult = students
        .map((student) => student.score)
        .filter((score) => score >= 50) // map을 통해 나온 배열은 score들이니까
        .join();
    // console.log(addResult);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student => student.score))
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}