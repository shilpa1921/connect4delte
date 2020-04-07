const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets.json");

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
            "/1.1/statuses/user_timeline.json?screen_name=theonion&tweet_mode=extended",
        method: "GET",

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

            callback(null, parsedTweets);
        });
    };

    const req = https.request(Options2, cb2);
    req.end();
};
module.exports.filterTweets = (tweets) => {
    let tweetArray = [];

    let url = "";
    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls.length == 1) {
            url = tweets[i].entities.urls[0].url;
        }
        let fulltext = tweets[i].full_text;
        let splittext = fulltext.split("http", 3);
        let text = splittext[0];

        tweetArray.push({ url, text });
    }

    return tweetArray;
};
