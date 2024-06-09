const fs = require("node:fs");

function file(content) {
    const exists = fs.existsSync("log.txt");

    if (exists) {
        fs.appendFileSync("log.txt", content, "utf-8");
    } else {
        fs.writeFileSync("log.txt", content, "utf-8");
    }
}

module.exports = file;
