const student = {
  name: "윤학생",
  greet() {
    console.log(`안녕하세요, ${this.name}입니다.`);
  },
};

const greetFunc = student.greet;

// TODO: greetFunc() 를 this가 유지되도록 고쳐보세요
// 출력: 안녕하세요, 윤학생입니다.
let a = greetFunc.bind(student); // Binds 'this' to 'student'
a();
//자바스크립트는 함수를 객체의 "소속"으로 기억하지 않습니다.
