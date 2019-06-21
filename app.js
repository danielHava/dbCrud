const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const postgresRouter = require('./routes/postgres.route.js');
const mongoRouter = require('./routes/mongo.route.js');

const logErrors = require('./helpers/logErrors');
const errorHandler = require('./helpers/errorHandler');

const app = express();
const config = require('./config');

app.set('config', config);
app.set('root', __dirname);

app.disable('x-powered-by');

// require('./pg').init(app);
// require('./mongo').init(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/postgres', postgresRouter);
app.use('/mongo', mongoRouter);

// Use error handler
app.use(logErrors);
app.use(errorHandler);

module.exports = app;
