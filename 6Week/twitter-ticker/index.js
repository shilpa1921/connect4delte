const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js");
app.use(express.static("./JSONticker"));

app.get("/data.json", (req, res) => {
    console.log("need to server Json");
    getToken(function (err, bearerToken) {
        if (err) {
            console.log("error in getToken", err);
            return;
        }
        console.log("in index.js the bearertoken is : ", bearerToken);
        // 2. Then, when we have the bearerToken, use it to get some tweets.
        getTweets(bearerToken, function (err, tweets) {
            if (err) {
                console.log("error in getTweets", err);
                return;
            }

            // 3. When we have the tweets, we want to filter them.
            const filteredTweets = filterTweets(tweets);

            // 4. Once filtered... send back a response (i.e. res.json(filteredTweets))
            res.json(filteredTweets);
        });
    });
});

app.listen(8084, console.log("server is listeining"));
