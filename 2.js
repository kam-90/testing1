function myAsyncFunction(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(message), 5000);
    });
}

x = myAsyncFunction("Random");

x.then(
    (message, msg) => console.log(`FROM INSIDE ${message}, ${msg}`)
    , function (args) {
        console.log(args);
        throw new Error("HAHAHA");
    }
).catch((err) => console.log("Here is your error", err));
