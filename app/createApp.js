const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const helloRoutes = require('./routes/hello');
const loggerMiddleware = require('./middlewares/logger');

function createApp(config) {
    const app = express();

    // Configuration
    app.use(helmet());
    app.use(morgan('dev'));
    app.use(express.json());

    // Custom Middleware
    app.use(loggerMiddleware);

    // Routes
    app.use('/hello', helloRoutes);

    // Error handling and other middleware can go here

    return app;
}

module.exports = createApp;
