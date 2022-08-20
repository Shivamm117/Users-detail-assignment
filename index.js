const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const addRoutes = require('./routes/add');
const displayRoutes = require('./routes/display');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', addRoutes.routes);
app.use(displayRoutes.routes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
  
app.listen(4000);