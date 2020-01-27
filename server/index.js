const express = require('express');
const app = express();
const port = 2004;

app.use(express.static('public'))

app.get('/', (req, res) => res.sendStatus(200));

log = (txt) => {
  console.log(new Date().toString(), txt);
}
app.listen(port, () => log(`rec channels listening on port ${port}
`));

