function functionA() {
  return new Promise((resolve, reject) => {
    console.log("functionA called");
    setTimeout(function () {
      console.log("functionA timeout called");
      // return 10;
      return resolve(10);
    }, 15000);
  });
}

function functionB(valueA) {
  return new Promise((resolve, reject) => {
    console.log("functionB called");
    setTimeout(function () {
      console.log("functionB timeout called = " + valueA);
      return resolve(20 + valueA);
    }, 10000);
  });
}

function functionC(valueA, valueB) {
  return new Promise((resolve, reject) => {
    console.log("functionC called");
    setTimeout(function () {
      console.log("functionC timeout called = " + valueA);
      return resolve(valueA + valueB);
    }, 10000);
  });
}

async function executeAsyncTask() {
  const valueA = await functionA();
  const valueB = await functionB(valueA);
  return functionC(valueA, valueB);
}
console.log("program started");
executeAsyncTask().then(function (response) {
  console.log("response called = " + response);
});
console.log("program ended");

/// gererators functions
function* HelloGen() {
  yield 100;
  yield 400;
}

var gen = HelloGen();

console.log(gen.next()); // value: 100, done: false
console.log(gen.next()); // value: 400, done: false
console.log(gen.next()); // value: undefined, done: true
