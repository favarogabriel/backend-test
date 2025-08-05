const express = require('express');
const fs = require('fs');
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

app.get('/submit', (req, res) => {
    fs.writeFile('data.json', JSON.stringify(req.query), (err) => {
        if (err) {
            res.status(500).send('Error saving data');
        } else {
            res.send('Data saved successfully');
        }
    });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.URL}:${process.env.PORT}`);
});