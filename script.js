//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.onclick = function () {
  const number = Number(input.value);

  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num * 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num - 3;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num / 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num + 10;
          output.innerText = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
};