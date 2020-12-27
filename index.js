const MyPromise = require("./MyPromise");

const promise1 = new MyPromise((resolve, reject) => {
  resolve("promise1");
  // reject("Error");
  // throw new Error("Exception: Error");
  // setTimeout(() => {
  //   resolve("success");
  // }, 2000);
});

let promise2 = promise1.then(
  () => {
    // return () => {
    //   console.log("success");
    // };
    return Promise.resolve("success");
  },
  (reason) => {
    console.log(reason);
  }
);

promise2
  .then()
  .then(
    (value) => {
      // throw new Error("Error");
      console.log(value);
    },
    (reason) => {
      console.log(reason);
    }
  )
  .catch((e) => {
    console.log(e);
  });

// let promise2 = promise1
//   .then((value) => {
//     return value + " -> then -> promise2";
//   })
//   .then((value) => {
//     console.log(value);
//   });

// promise.then(
//   (value) => {
//     console.log("FulFilled2:" + " " + value);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );
