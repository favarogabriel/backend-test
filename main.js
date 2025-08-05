const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.URL}:${process.env.PORT}`);
});