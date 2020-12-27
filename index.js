const MyPromise = require("./MyPromise");

const promise = new MyPromise((resolve, reject) => {
  // resolve("success");
  // reject("error");
  // throw new Error("Exception: Error");
  setTimeout(() => {
    resolve("success");
  }, 0);
});

promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log("1234567890");
    console.log(reason);
  }
);
