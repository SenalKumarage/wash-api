const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {

    return res.send('Hello world...\nDocker...');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
