// 문제 : 숫자 n을 입력받아 1부터 n까지의 합을 반환하는 함수를 작성하세요.
function sum(n) {
  if (n < 1 || !Number.isInteger(n)) {
    console.warn("경고: 1 이상의 정수를 입력해야 합니다.");
    return 0;
  }
  return (n * (n + 1)) / 2;
}

console.log(sum(23));
