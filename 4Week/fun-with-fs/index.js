const fs = require("fs");
function logSizes(path) {
    fs.readdir(
        path,
        {
            withFileTypes: true
        },
        (err, items) => {
            if (err) {
                console.log("ERROR: ", err);
            } else {
                for (const item of items) {
                    if (item.isFile()) {
                        fs.stat(path + "/" + item.name, (err, stats) => {
                            if (err) {
                                console.log(" ERROR ocurred", err);
                            } else {
                                console.log(
                                    path + "/" + item.name + ": " + stats.size
                                );
                            }
                        });
                    } else if (item.isDirectory()) {
                        logSizes(path + "/" + item.name);
                    }
                }
            }
        }
    );
}

logSizes(__dirname + "/files");

// task2
function mapSizes(path) {
    const obj = {};

    const elems = fs.readdirSync(path, {
        withFileTypes: true
    });

    for (const elem of elems) {
        const Key = elem.name;
        if (elem.isFile()) {
            const stats = fs.statSync(path + "/" + elem.name);
            obj[Key] = stats.size;
        } else if (elem.isDirectory()) {
            obj[Key] = mapSizes(path + "/" + elem.name);
        }
    }

    return obj;
}

fs.writeFileSync(
    "files.json",
    JSON.stringify(mapSizes(__dirname + "/files"), null, 4)
);
