const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/verify-code', (req, res) => {
    if (req.query.code === '1234') {
        res.send('Code verified successfully');
    } else {
        res.status(400).send('Invalid code');
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.URL}:${process.env.PORT}`);
});