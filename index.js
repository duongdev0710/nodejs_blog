var express = require('express')

var app = express();
app.get('/', function(req, res) {
    res.send(
        `
            <div>do thanh duong</div>
        `
    )
})

app.listen(8000)