/*
[문제] Promise.all()을 사용하여 사용자 정보 3개를 동시에 불러오세요.

API:
https://jsonplaceholder.typicode.com/users/1
https://jsonplaceholder.typicode.com/users/2
https://jsonplaceholder.typicode.com/users/3

요구사항:
- fetch 또는 axios 중 하나 선택 (async/await 사용)
- Promise.all()로 동시에 요청 보낼 것
- 3명의 이름(name)만 배열로 출력할 것 (예: ["Leanne", "Ervin", "Clementine"])
- 에러가 발생하면 "요청 실패" 메시지를 출력하세요.
*/

async function fetchNames() {
  try {
    const urls = [
      "https://jsonplaceholder.typicode.com/users/1",
      "https://jsonplaceholder.typicode.com/users/2",
      "https://jsonplaceholder.typicode.com/users/3",
    ];

    // 세 fetch 요청을 동시에 실행
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    // 응답을 JSON으로 변환
    const users = await Promise.all(responses.map((res) => res.json()));

    // 사용자 이름만 추출
    const names = users.map((user) => user);
    console.log(names); // 예: ["Leanne Graham", "Ervin Howell", "Clementine Bauch"]
  } catch (error) {
    console.error("요청 실패");
  }
}
fetchNames();
