// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // 1. toStrin 이용 - ,를 구분자로 연결
    const fruitsStr1 = fruits.toString();
    // console.log(fruitsStr1);

    // 2, join 이용
    const fruitsStr2 = fruits.join();
    const fruitsStr3 = fruits.join(" ");
    // console.log(fruitsStr2);
    // console.log(fruitsStr3);

    // 3. 반복문 이용
    let fruitsStr4 = '';
    fruits.forEach(fruit => {
        const separator = ' ';
        if(fruitsStr4.length == 0){
            fruitsStr4 += fruit
        } else{
            fruitsStr4 = fruitsStr4 + separator + fruit
        }
    })
    // console.log(fruitsStr4);

}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';

    const fruitArr = fruits.split(', ');
    // console.log(fruitArr);


}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    // console.log(array);
}


// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const spliceArr = array.splice(2);
    const sliceArr = array.slice(2)
    console.log(array); // [1, 2]
    // console.log(spliceArr); // [3, 4, 5]
    console.log(sliceArr); // [3, 4, 5]
    // slice랑 splice를 쓰는 느낌은 비슷하지만 원본이 변경되는지 안되는지 차이 있음

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
    let eqlNinety = [];
    
    students.forEach(student => {
        if(student.score == 90){
            eqlNinety.push(student.name);
        }
    })
    // console.log(eqlNinety);
}

// Q6. make an array of enrolled students
{
    let enrolledStudents = [];
    students.forEach(student => {
        if(student.enrolled == true){
            enrolledStudents.push(student.name)
        }
    })
    // console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    let scores = [];
    students.forEach(student => {
        scores.push(student.score);
    })
    console.log(scores);

}

// Q8. check if there is a student with the score lower than 50
{
    let lowerScore = []
    for(let student of students){
        if(student.score < 50){
            lowerScore.push(student.name);
        }
    }
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}