const express = require('express');
const app = express();
const port = 3000;

const service = require('./Service');

app.get('/', (req, res) => {

    // This is a sample of promise - resolve
    service.promiseResolveExample(1).then((output) => {
        console.log("Resolved - Start");
        console.log(output);
        console.log("Resolved - End");
    }).catch((output) => {
        console.log(output);
    });
    

    // This is a sample of promise - reject
    service.promiseRejectExample(0).then((output) => {
        console.log(output);
    }).catch((output) => {
        console.log("Reject - Start");
        console.log(output);
        console.log("Reject - End");
    });

    res.send('Done');
});

app.listen(port, () => {
    console.log(`Express app is running on port ${port}`);
});