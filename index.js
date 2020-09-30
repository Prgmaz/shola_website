const express = require('express');
const app = express();

app.use('/static', express.static('static'))

app.get("/", (req, res) => {
    return res.sendFile(`${__dirname}/templates/index.html`);
});

app.listen(3000, () => {
    console.log("Server is running on 3000 port")
});
