//! callback - ajax (js 기본 비동기 처리 방식)

function getData(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback('Error Occured!');
    }
  };
  xhr.send();
}

getData(function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

//! promise - ajax (Promise 활용 비동기 처리 방식)

function getData() {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject('Error Occured!');
      }
    };
    xhr.send();
  });
}

getData()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });

//! async await - ajax (async, await 활용 비동기 처리 방식)

function getData() {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject('Error Occured!');
      }
    };
    xhr.send();
  });
}

async function fetchData() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

//! fetch - promise가 아닌 response 반환하므로 에러 (두 번) // (Fetch 활용 비동기 처리 방식)

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

//! axios - promise를 반환하므로 try, catch로 에러 간단히 처리. // (Axios 활용 비동기 처리 방식)

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
