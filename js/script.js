// callback
function add(x, y) {
  console.log(x + y);
}

function calculate(a, b, myCallback) {
  console.log(a, b, myCallback);
  myCallback(a, b); //calling add function
}

calculate(5, 6, add); //add is a callback function

// 1000 ms = 1 s
// Timing Events
setTimeout(function () {
  console.log("hello");
}, 2000); //execute function after 4s

console.log("world");

// setInterval(function () {
//   // console.log('hello world');
//   var d = new Date();
//   console.log(d);
// }, 1000);

//Pyramid of DOOM or Callback Hell
fun1(function () {
  console.log("fun1");
  fun2(function () {
    console.log("fun2");
    fun3(function () {
      console.log("fun3");
    });
  });
});

function fun1(data) {
  data();
}

function fun2(data) {
  data();
}

function fun3(data) {
  data();
}

//it will lead to callback hell
// createOrder(cart, function (orderId) {
//   payment(orderId, function (paymentInfo) {
//     orderHistory(paymentInfo, function () {
//       updateDetails();
//     });
//   });
// });

// function createOrder() {}
// function payment() {}
// function orderHistory() {}
// function updateDetails() {}

// Promises
var myPromise = new Promise(function (resolve, reject) {
  //producing code
  var x = 0;

  if (x == 0) {
    resolve("ok");
  } else {
    reject("error");
  }
});

console.log(myPromise);

// consuming code
myPromise.then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.log(err);
  }
);

// with Promises
// const p = createOrder(cart);
// promise
//   .then(function (orderId) {
//     return payment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return orderHistory(paymentInfo);
//   })
//   .then(function () {
//     return updateDetails();
//   });

// API: Application program interface
// https://rapidapi.com/

// free apis:
// https://rapidapi.com/collection/list-of-free-apis

// HTTP Methods: get, post, delete, update(post/id)

// HTTP status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// fetch, axios, AJAX

// fetch or axios: http promise based library

//API call using axios
function getData() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

// async & await
async function division() {
  return "async";
}

var r = division();
console.log(r);

// consuming
r.then(
  function (val) {
    console.log(val);
  },
  function (err) {
    console.log(err);
  }
);

// another example
async function getPost() {
  // var y = await "get post data";
  // console.log(y);

  var r = await axios
    .get("https://jsonplaceholder.typicode.com/posts/")
    .then(function (res) {
      console.log(res);
      return res.data;
    })
    .catch(function (err) {
      console.log(err);
    });

  console.log(r);
}

console.log("Hello");
getPost();
console.log("World");

//xml: this is used to transport data, earlier

//json: this is used to transport data, now days

//task
//look for api and display few data records in UI (movie data api)
//create a function to get data from user and display that in callback function
//practice async programming/ promises, async/await and read it.
//practice JSON

// JSON: JavaScript Object Notation
//to send in JSON format
var person = {
  name: "alina",
  age: 20,
};
var t = JSON.stringify(person);
console.log(t);

var color = ["pink", "red", "blue"];
console.log(JSON.stringify(color));

// Parse (converting JSON to object or array)
console.log(JSON.parse('["testing", "developer", "manager" ]'));
console.log(JSON.parse('{"name" : "JOHN", "age" : "20"}'));
