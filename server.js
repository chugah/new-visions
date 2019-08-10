const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './client/dist')));

app.listen(4000, () => console.log('app renders on localhost:4000'));
