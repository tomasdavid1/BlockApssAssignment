let express = require('express');
let exphbs = require('express-handlebars');
let path = require('path');
let bodyParser = require('body-parser');
let routes = require('./routes')
let port = 3000



let app = express();

app.set('x-powered-by', false);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.locals.req = req;
    next();
});
app.use('/', routes);
app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;
