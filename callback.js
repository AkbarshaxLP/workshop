// Callback функция в JavaScript - это функция, которая передается в качестве аргумента в другую функцию
// и вызывается после завершения определенной операции.Callback функции широко используются в JavaScript
// для асинхронного программирования, обработки событий и выполнения кода после завершения определенных
// операций.

// 1.Асинхронные операции:
function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
}

fetchData('https://jsonplaceholder.org/posts', function(data) {
  console.log(data);
});


// 2.Обработка событий:
document.getElementById('myButton').addEventListener('click', function() {
  console.log('Button clicked');
});


// 3.Асинхронный код с setTimeout:
setTimeout(function() {
  console.log('Inside callback');
}, 2000);

// Позволяет определять поведение после завершения определенных операций