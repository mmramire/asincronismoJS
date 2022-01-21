const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey! promesa resuelta UNO");
    } else {
      reject("Whooops! promesa no resuelta UNO");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve("TRUE promesa resuelta DOS");
      }, 2000);
    } else {
      const error = new Error("Whooops! promesa no resuelta DOS");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => cconsole.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log("Array de results: ", response))
  .catch((err) => console.log(err));
