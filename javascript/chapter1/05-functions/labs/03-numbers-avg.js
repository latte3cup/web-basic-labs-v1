// 문제 : 세 개의 숫자를 입력받아 평균을 반환하는 함수를 작성하세요.
function calculateAverage(num1, num2, num3) {
  // 입력된 세 숫자를 더합니다.
  const sum = num1 + num2 + num3;
  // 합계를 3으로 나누어 평균을 계산합니다.
  const average = sum / 3;
  // 계산된 평균을 반환합니다.
  return average;
}

console.log("평균:", calculateAverage(10, 20, 30)); // 출력: 평균: 20
