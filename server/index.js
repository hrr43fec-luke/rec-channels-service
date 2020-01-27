const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('Hello World!'));

log = (txt) => {
  console.log(txt, new Date().toString());
}
app.listen(port, () => log(`rec channels listening on port ${port}
`));