const fs = require("fs");

module.exports.generateHtml = () => {
    const items = fs.readdirSync(__dirname + "/projects", {
        withFileTypes: true
    });
    let list = "<ul></ul>";

    for (let item of items) {
        list += `<li><a href = "/${item.name}/">${item.name}</a></li>`;
        console.log(item.name);
    }

    console.log("list", list);

    let homePage = `<!DOCTYPE html>
    <html>
    <head>
    <title>Portfolio</title>
    </head>
    <body>
    <h1>Portfolio</h1>

    ${list}

    </body>
    <footer></footer>
    </html>`;

    return homePage;
};
