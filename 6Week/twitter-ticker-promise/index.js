const express = require("express");
const app = express();
let { getToken, getTweets, filterTweets } = require("./twitter.js");
app.use(express.static("./JSONticker"));

const { promisify } = require("util");
getToken = promisify(getToken);
getTweets = promisify(getTweets);

app.use(express.static("ticker"));

app.get("/data.json", (req, res) => {
    console.log("Need to serve some JSON!");
    // we want to do 4 things
    // 1. get the bearerToken from Twitter
    getToken().then((token) => {
        return Promise.all([
            getTweets(token, "Drake"),
            getTweets(token, "Beyonce"),
            getTweets(token, "taylorswift13"),
        ])
            .then((results) => {
                const mergedResults = [
                    ...results[0],
                    ...results[1],
                    ...results[2],
                ];

                const sortedTweets = mergedResults.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });

                return sortedTweets;
            })
            .then((sortedTweets) => {
                return filterTweets(sortedTweets);
            })
            .then((filteredTweets) => {
                res.json(filteredTweets);
            })
            .catch((err) => {
                console.log("An error occurred: ", err);
            });
    });
});

app.listen(8080, () => console.log("Express server is at your service."));
