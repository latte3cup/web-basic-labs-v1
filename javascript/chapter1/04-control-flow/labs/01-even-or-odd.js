let input = prompt("숫자를 입력하세요:");

// 입력값을 숫자로 변환
let number = Number(input);

// 결과를 출력할 요소 생성
const resultElement = document.createElement("p");

if (isNaN(number)) {
  resultElement.textContent = "유효한 숫자를 입력해주세요.";
} else {
  if (number % 2 === 0) {
    resultElement.textContent = number + "는(은) 짝수입니다.";
  } else {
    resultElement.textContent = number + "는(은) 홀수입니다.";
  }
}

// 결과를 body에 추가
document.body.appendChild(resultElement);
