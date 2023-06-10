const express = require('express');
const cors = require('cors');
const apiRouter = require('./api');

const app = express();
const port = 4005; // Replace with your desired port number

// Other middleware and configurations...
app.use(cors());

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
