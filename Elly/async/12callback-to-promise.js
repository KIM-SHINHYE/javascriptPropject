'use strict';

// 11강에서 했던 callback을 promise형태로 변경
class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000)
        })
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user ==='ellie'){
                    resolve({name: 'ellie', role: 'admin'});
                } else{
                    reject(new Error('no access'));
                }
            }, 1000)
        })

    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');


userStorage
.loginUser(id, password) // 로그인 시도를 하는데 그게 성공하면 다음 then의 역할 가져옴
// .then((user) => userStorage.getRoles(user)) 여기서 인자가 user로 똑같으니까 아래처럼 생략가능
.then(userStorage.getRoles) // 여기서 사용자의 역할을 잘 받아온다면 사용자의 역할 출력할 거
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log)
