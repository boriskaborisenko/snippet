const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const app = express();


app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/public', express.static('public'));

routes(app);

const server = app.listen(3000, function () {
    console.log("SERVER Running", server.address().port);
});