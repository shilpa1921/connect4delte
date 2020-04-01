const http = require("http");
const fs = require("fs");
const path = require("path");

const { generateHtml } = require("./fun.js");
console.log("generateHtml", generateHtml);
const myHtml = generateHtml();

var Obj = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml"
};

http.createServer((req, res) => {
    req.on("error", err => console.log("Error in request: ", err));
    res.on("error", err => console.log("Error in response: ", err));

    if (req.method !== "GET") {
        res.statusCode = 405;
        // res.setHeader("Location", "/");
        return res.end();
    }
    if (req.url === "/") {
        return res.end(myHtml);
    }
    const filePath = __dirname + "/projects" + req.url;
    console.log("filepath ", filePath);
    console.log("normalised path:", path.normalize(filePath));
    // console.log("url requested: ", req.url);

    // prevent traversal attacks

    if (!path.normalize(filePath).startsWith(__dirname)) {
        res.statusCode = 403;
        console.log("Error!");
        return res.end();
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("error in fs.stat: ", err);
            res.statusCode = 404;
            return res.end();
        }

        if (stats.isFile()) {
            console.log("its a file: ", filePath);

            const extension = path.extname(filePath);
            const readStream = fs.createReadStream(filePath);

            res.setHeader("Content-Type", Obj[extension]);
            console.log(Obj[extension]);

            //create a readstream from filePath
            //plus something?
            readStream.pipe(res);
            readStream.on("error", err => {
                console.log("Error in the read stream file: ", err);
                res.statusCode = 500;
                res.end();
            });
        } else {
            console.log("its a directory: ", filePath);
            if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                res.setHeader("Content-Type", "text/html");

                readStreamHtml.pipe(res);

                readStreamHtml.on("error", err => {
                    console.log("Error in read stream html: ", err);
                    res.statusCode = 500;
                    res.end();
                });
            } else {
                console.log("redirect to the /");
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                return res.end();
            }
        }
    });
}).listen(8080, () => console.log("Server is listening..."));
