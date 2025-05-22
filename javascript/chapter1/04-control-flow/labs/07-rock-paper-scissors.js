/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

🎉 게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/
const choices = ["가위", "바위", "보"];
let userWin = 0;
let computerWin = 0;
let round = 1;

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function getWinner(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "가위" && computer === "보") ||
    (user === "바위" && computer === "가위") ||
    (user === "보" && computer === "바위")
  ) {
    return "user";
  }
  return "computer";
}

while (userWin < 2 && computerWin < 2) {
  const userChoice = prompt(
    `[${round}라운드] 가위, 바위, 보 중 하나를 입력하세요:`
  ).trim();

  if (!choices.includes(userChoice)) {
    alert("잘못된 입력입니다. '가위', '바위', '보' 중 하나만 입력하세요.");
    continue;
  }

  const computerChoice = getComputerChoice();
  const winner = getWinner(userChoice, computerChoice);

  let resultMsg = `[${round}라운드]\n당신의 선택: ${userChoice}\n컴퓨터의 선택: ${computerChoice}\n`;

  if (winner === "user") {
    userWin++;
    resultMsg += `당신이 이겼습니다! (${userWin}승 ${computerWin}패)`;
  } else if (winner === "computer") {
    computerWin++;
    resultMsg += `컴퓨터가 이겼습니다! (${userWin}승 ${computerWin}패)`;
  } else {
    resultMsg += `비겼습니다! (${userWin}승 ${computerWin}패)`;
  }

  alert(resultMsg);
  round++;
}

if (userWin === 2) {
  alert("🎉 게임 종료: 당신의 승리입니다!");
} else {
  alert("😢 게임 종료: 컴퓨터의 승리입니다!");
}
