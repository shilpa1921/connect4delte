const https = require("https");
//const secrets = require("./secrets.json");
const { consumerKey, consumerSecret } = require("./secrets.json");

//this function gets the bearer token from twitter
module.exports.getToken = (callback) => {
    let creds = `${consumerKey}:${consumerSecret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    const cb = function (response) {
        if (response.statusCode != 200) {
            console.log("response status", response.statusCode);
            callback(response.statusCode);
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {
            let parsedBody = JSON.parse(body);
            console.log("twitter.js: parsedBody: ", parsedBody);
            callback(null, parsedBody.access_token); //null means "no error"
        });
    };
    const req = https.request(options, cb);

    req.end("grant_type=client_credentials");
};

//gets tweets
module.exports.getTweets = (bearerToken, callback) => {
    const Options2 = {
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=twitterapi&tweet_mode=extended",
        method: "GET",
        screen_name: "twitterapit",
        headers: {
            Authorization: "Bearer " + bearerToken,
        },
    };

    const cb2 = function (response) {
        if (response.statusCode != 200) {
            console.log(
                "twitter.js: getTweets resp status",
                response.statusCode
            );
            callback(response.statusCode);
        }

        let tweets = "";

        response.on("data", (chunk) => {
            tweets += chunk;
        });

        response.on("end", () => {
            let parsedTweets = JSON.parse(tweets);
            console.log(
                "twitter.js: tweet response from twitter: ",
                parsedTweets
            );

            console.log("shilpa:", parsedTweets[6].full_text);

            callback(null, parsedTweets);
        });
    };

    const req = https.request(Options2, cb2);
    req.end();
};

//cleans up response from Twitter API
module.exports.filterTweets = (tweets) => {
    //will be passed as array of objects
    //loop through and extract the relevant info text: and url:
    //synchronous
};
