const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    request.on("error", err => {
        console.log("err in req: ", err);
    });

    response.on("error", err => {
        console.log("err in res: ", err);
    });

    console.log("request url: ", request.url);
    console.log("request method: ", request.method);
    console.log("request headers: ", request.headers);

    if (request.method === "GET") {
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;

        response.end(`<!doctype html>
                        <html>
                        <title>Hello World!</title>
                        <p>Hello World!</p>
                        </html>`);
    } else if (request.method === "PUT") {
        response.statusCode = 200;
        response.end(`<h1> you made a PUT request! </h1>`);
    } else if (request.method === "POST") {
        console.log("you made a POST request");

        let body = "";

        request.on("data", chunk => {
            body += chunk;
        });

        request.on("end", () => {
            console.log("body: ", body);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            res.end();
        });
    } else if (request.method === "HEAD") {
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;
        response.end();
    } else {
        response.statusCode = 405;
        response.end();
    }

    const { headers } = request;
    const userAgent = headers["user-agent"];

    fs.appendFile(
        "info.txt",
        Date() +
            "\t" +
            request.method +
            "\t" +
            request.url +
            "\t" +
            userAgent +
            "\n",
        err => {
            if (err) throw err;
        }
    );
});

server.listen(8080, () => console.log("server is listening ..."));
