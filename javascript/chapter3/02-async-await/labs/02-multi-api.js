/*
[문제] 두 개의 외부 API를 fetch로 병렬 처리한 뒤, 둘의 결과를 모두 출력하세요.

1) https://jsonplaceholder.typicode.com/posts/2
2) https://jsonplaceholder.typicode.com/users/1

- async/await와 Promise.all을 활용
- 두 API 모두의 데이터를 받아서 각각 출력
*/

async function print() {
  try {
    const [posts, users] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/2"),
      fetch("https://jsonplaceholder.typicode.com/users/1"),
    ]);

    const postdata = await posts.json();
    const userdata = await users.json();
    console.log(postdata);
    console.log(userdata);
  } catch (err) {
    console.error("에러 : " + err);
  }
}
print();
