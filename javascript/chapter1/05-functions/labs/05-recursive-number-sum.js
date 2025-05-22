// 문제 : 재귀 함수로 1부터 n까지의 합을 구하세요
// 예: sumTo(5) → 15
let sum = 0;
function sumTo(n) {
  if (n === 0) return 0;
  sum += n;
  return n + sumTo(n - 1);
}

console.log(sumTo(10));
