const cluster = require("cluster");
const os = require("os");
// console.log(os.cpus().length);

cluster.setupMaster({
    exec: "index.js"
});

if (cluster.isMaster) {
    //ensures only master process has children
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork(); //creates a new process that runs same file as master process
    }
    console.log("master process");
} else {
    console.log("child process");
}

// handling the death of a child
cluster.on("exit", function(child) {
    console.log(child.process.pid + " has died+");
    //pid = process id
    cluster.fork();
});
