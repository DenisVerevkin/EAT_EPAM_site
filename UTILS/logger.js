'use strict';

const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;

const fs = require( 'fs' );
const path = require('path');
const logDir = 'log'; // directory path for logs

if ( !fs.existsSync( logDir ) ) {
    fs.mkdirSync( logDir );
}

const logger = winston.createLogger({
    format: combine(
        timestamp(),
        winston.format.json()),
    transports: [
        new winston.transports.Console({level: 'info' }),
        new winston.transports.File({ filename:  path.join(logDir, '/error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.join(logDir, '/combined.log'), level: 'debug' })
    ]
});

module.exports = logger;
