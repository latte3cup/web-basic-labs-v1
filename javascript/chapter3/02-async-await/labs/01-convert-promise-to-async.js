/*
[문제] then/catch 기반 코드를 async/await로 리팩토링하세요.

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => {
      console.log("데이터:", data);
    })
    .catch(err => {
      console.error("에러:", err);
    });
}
fetchData();
*/
async function asyncData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log("데이터:", data);
  } catch (err) {
    console.error("에러:", err);
  }
}
asyncData();
