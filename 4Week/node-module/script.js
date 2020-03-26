function printCommandUrl() {
    const inputUrl = process.argv[2];
    const url = require("url");
    const parsedUrl = url.parse(inputUrl);
    const urlQuery = parsedUrl.query;

    console.log("The protocol is", parsedUrl.protocol);
    console.log("The host is", parsedUrl.host);
    console.log("The hostname is", parsedUrl.hostname);
    console.log("The port is", parsedUrl.port);
    console.log("The pathname is", parsedUrl.pathname);
    console.log("The query is", urlQuery);
    if (urlQuery !== null) {
        const queryString = require("querystring");
        let parsedQuery = queryString.parse(urlQuery);

        for (const key in parsedQuery) {
            console.log(
                `The value of the ${key} parameter is ${parsedQuery[key]}`
            );
        }
    }
}

printCommandUrl();
