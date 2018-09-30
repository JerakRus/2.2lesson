const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express;

app.use(express.static(__dirname + '/src'));


app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(port)
console.log("server started on port " + port);