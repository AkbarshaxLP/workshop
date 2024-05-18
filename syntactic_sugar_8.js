// Синтаксис использования async/await для работы с асинхронным кодом
// 8. Async/Await:

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
