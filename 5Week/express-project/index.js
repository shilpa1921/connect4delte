const express = require("express");
const app = express();
const { generateHtml } = require("./fun.js");
const myHtml = generateHtml();
app.use(require("cookie-parser")());
const basicAuth = require("basic-auth");

app.use("/panes", (req, res, next) => {
    const creds = basicAuth(req);
    if (!creds || creds.name != "Shilpa" || creds.pass != "biradar") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
});

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use((req, res, next) => {
    if (!req.cookies.cookieConsent && req.url != "/cookie") {
        res.cookie("preUrl", req.url);
        res.redirect("/cookie");
    } else {
        next();
    }
});

app.get("/cookie", (req, res) => {
    res.send(`
    <h1>To use this site, please enable cookies.</h1>
    <form method='POST'>
    <input type="checkbox" name="cookieConsent" value='acceptedCookies'> I accept to cookies:
    <button>SUBMIT</button>
    </form>`);
});

app.post("/cookie", (req, res) => {
    if (req.body.cookieConsent) {
        res.cookie("cookieConsent", true);
        res.redirect(req.cookies.preUrl);
    } else {
        res.send(
            "<h1>Sorry, you cannot use this without first enabling cookies. </h1>"
        );
    }
});

//DYNAMIC PROJECT SOURCING AND HTLM//
app.get("/", (req, res) => {
    res.send(myHtml);
});

app.use(express.static(__dirname + "/projects"));

app.listen(8080, console.log("I am listening..."));
