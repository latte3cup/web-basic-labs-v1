// 1~10 사이의 랜덤 정답 숫자 생성
const answer = Math.floor(Math.random() * 10) + 1;

let guess; // 사용자의 추측값

while (true) {
  // 사용자 입력 받기
  guess = Number(prompt("1부터 10 사이의 숫자를 맞혀보세요:"));

  // 숫자인지 확인
  if (isNaN(guess)) {
    alert("숫자를 입력해주세요!");
    continue;
  }

  // 정답 확인
  if (guess === answer) {
    alert("정답입니다! 축하합니다 🎉");
    break;
  } else {
    alert("틀렸습니다. 다시 시도하세요.");
  }
}
