const infoSystem = require("./operation-system");
const file = require("./file-system");

let count = 0;

let interval = setInterval(() => {
    file(infoSystem());
    console.log(count);
    count += 1;

    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);
