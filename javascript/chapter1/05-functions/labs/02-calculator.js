// TODO: add, subtract, multiply, divide 함수 만들고 결과 출력
// 더하기 함수
function add(a, b) {
  return a + b;
}

// 빼기 함수
function subtract(a, b) {
  return a - b;
}

// 곱하기 함수
function multiply(a, b) {
  return a * b;
}

// 나누기 함수
function divide(a, b) {
  if (b === 0) {
    return "0으로 나눌 수 없습니다.";
  }
  return a / b;
}

// 결과 출력
console.log("덧셈:", add(10, 5));
console.log("뺄셈:", subtract(10, 5));
console.log("곱셈:", multiply(10, 5));
console.log("나눗셈:", divide(10, 5));
console.log("나눗셈 (0으로 나누기):", divide(10, 0));
