const readline = require("readline");
const chalk = require("chalk");

// console.log(chalk.magenta('hi msg! :)'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        "2": "congratulations!"
                    }
                },
                right: "This was not the right choice. Goodbye!"
            }
        },
        no: "Alright then. Enjoy your day!"
    }
};
// console.log(conversation.q);
// console.log(conversation.answers['no']);cd

function askQuestion(story) {
    rl.question(chalk.cyan(story.q), answer => {
        if (story.answers[answer]) {
            if (typeof story.answers[answer] == "object") {
                // console.log("story.answers[answer].q :", story.answers[answer].q);
                askQuestion(story.answers[answer]);
            } else {
                console.log(chalk.green(story.answers[answer]));
                rl.close();
            }
        } else {
            console.log(chalk.red("Read the question carefully and answer"));
            askQuestion(story);
        }
    });
}

askQuestion(story);
