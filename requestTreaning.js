let d;

fetch('https://jsonplaceholder.typicode.com/posts/1')  // отправляем GET-запрос
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');  // проверяем успешность ответа
    }
    return response.json();  // преобразуем ответ в формат JSON
  })
  .then(data => {
      d = data;
      console.log(data)
    })  // обрабатываем данные
  .catch(error => console.error('There has been a problem with your fetch operation:', error));  // обработка ошибок


  setTimeout(() =>{
    console.log("after 5 sec\n",d);
  }, 5000)
