/*
[문제] 아래 비동기 함수를 두 방식으로 호출해, 전체 실행 시간을 비교해보세요.

function asyncJob(ms) {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

- 1) await를 반복문(for of)에서 사용 (순차 실행)
- 2) Promise.all과 await로 병렬 실행

각 방식에서 콘솔로 각 작업의 시작/끝, 전체 소요시간을 출력해보세요.
*/

function asyncJob(ms) {
  console.log(`작업 시작 : [${ms}ms] `);
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`작업 완료 : [${ms}ms]`);
      resolve(ms);
    }, ms)
  );
}

const jobDurations = [1000, 500, 1500]; // 작업 지속 시간 (밀리초)

// 1) await를 반복문(for of)에서 사용 (순차 실행)
async function runSequentially() {
  console.log("\n--- 순차 실행 시작 ---");
  const startTime = Date.now();

  for (const ms of jobDurations) {
    await asyncJob(ms); // 각 작업이 완료될 때까지 대기
  }

  const endTime = Date.now();
  const totalTime = endTime - startTime;
  console.log(`--- 순차 실행 완료. 총 소요 시간: ${totalTime}ms ---`);
}

// 2) Promise.all과 await로 병렬 실행
async function runConcurrently() {
  console.log("\n--- 병렬 실행 시작 ---");
  const startTime = Date.now();

  const promises = jobDurations.map((ms) => asyncJob(ms)); // 모든 작업을 동시에 시작
  await Promise.all(promises); // 모든 Promise가 완료될 때까지 대기

  const endTime = Date.now();
  const totalTime = endTime - startTime;
  console.log(`--- 병렬 실행 완료. 총 소요 시간: ${totalTime}ms ---`);
}

// 두 함수 호출
(async () => {
  await runSequentially();
  console.log("\n=========================================\n");
  await runConcurrently();
})();
