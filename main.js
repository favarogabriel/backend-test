const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
});