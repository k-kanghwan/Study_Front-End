console.log("Hello World");

const runCode = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = 10;
    if (num > 11) {
      resolve(num);
    } else {
      reject("Failure");
    }
  }, 1000);
});

runCode
  .then(
    (item) => {
      console.log("Success", item);
    },
    (err) => {
      console.log("Error: ", err);
    }
  )
  .then(
    () => {
      console.log("This will always run");
    },
    () => {
      console.log("This will also always run");
    }
  );
