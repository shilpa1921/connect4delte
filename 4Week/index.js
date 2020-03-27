const fs = require("fs");
function LogSizes(path) {
    fs.readdir(path, { withFileTypes: true }, (err, items) => {
        if (err) {
            console.log("Error ocured", err);
        } else {
            for (const item of items) {
                if (item.isFile()) {
                    fs.stat(path + "/" + item.name, (err, stat) => {
                        if (err) {
                            console.log("ERORR", err);
                        } else {
                            console.log(
                                path + "/" + item.name + ":" + stat.size
                            );
                        }
                    });
                } else if (item.isDirectory()) {
                    LogSizes(path + "/" + item.name);
                }
            }
        }
    });
}

LogSizes(__dirname + "/handlebars");

function magSize(path) {
    const obj = {};
    const items = fs.readdirSync(path, { withFileTypes: true });

    for (const item of items) {
        const key = item.name;
        if (item.isFile()) {
            const stat = fs.statSync(path + "/" + item.name);
            obj[key] = stat.size;
        } else if (item.isDirectort()) {
            obj[key] = magSize(path + "/" + item.name);
        }
    }
    return obj;
}

fs.writeFileSync(
    "file.json ",
    JSON.stringify(magSize(__dirname + "/handlebars"), null, 4)
);
