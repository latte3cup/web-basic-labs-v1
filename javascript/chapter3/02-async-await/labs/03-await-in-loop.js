/*
[문제] 아래 배열의 userId로 하나씩 fetch 요청을 보내 user 정보를 순서대로 출력하세요.

const userIds = [1, 2, 3];

- https://jsonplaceholder.typicode.com/users/{userId}
- async/await와 for...of 문 사용
- (순서대로 출력되어야 함)
*/

async function print() {
  //const userIds = [1, 2, 3];
  const userIds = [3, 2, 1];
  try {
    for (const userId of userIds) {
      userRes = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      userData = await userRes.json();
      console.log(`User ${userId} 정보:`, userData);
    }
  } catch (error) {
    console.error(`User ${userId} 정보를 가져오는 중 에러 발생:`, error);
  }
}
print();
