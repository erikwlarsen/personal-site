const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../dist/assets')));
app.use(express.static(path.resolve(__dirname, '../dist/build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
