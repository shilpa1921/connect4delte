const chalk = require("chalk");
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
    req.on("error", err => console.log("Error in request: ", err));
    res.on("error", err => console.log("Error in response: ", err));
    if (req.method === "GET") {
        res.write(`
        <!doctype html>
        <html>
        <title>Colors</title>
        <form method="POST">
          <input type="text" name="first" placeholder="first" autocomplete="off">
          <select name="color">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="gray">gray</option>
            <option value="magenta">magenta</option>
            <option value="cyan">cyan</option>
          </select>
          <button type="submit">Go</button>
        </form>
        </html>
        `);
        res.end();
    }
    if (req.method === "POST") {
        let body = "";
        req.on("data", chunk => (body += chunk));
        req.on("end", () => {
            console.log("body: ", body);

            let parsedBody = querystring.parse(body);
            console.log("parsedBody: ", parsedBody);

            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.write(`
                <a href="/" style="color:${parsedBody.color}">Hello ${parsedBody.first} </a>`);

            console.log("colour:", parsedBody.color);
            console.log(
                chalk[parsedBody.color](parsedBody.first + " is clicked")
            );

            res.end();
        });
    }
});

server.listen(8080, () => console.log("PORT 8080 Listening!"));

// console.log(chalk.cyan('this is the color cyan'));
// console.log(chalk.magenta('this is the color magenta'));
