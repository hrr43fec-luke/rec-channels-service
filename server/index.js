const express = require('express');
const app = express();
const port = 2004;

app.use(express.static('public'))

app.get('/', (req, res) => res.sendStatus(200));

app.listen(port, () => console.log(`rec channels listening on port ${port}`));