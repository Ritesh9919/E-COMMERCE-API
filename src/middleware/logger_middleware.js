const fs = require('fs');
const winston = require('winston');

const fsPromise = fs.promises;

// async function log(logData) {
//     try {
//         logData = new Date().toString() + ". log data: " + logData;
//     await fsPromise.writeFile('log.txt', logData);
//     } catch (error) {
//         console.log(err);
//     }
    
// }

const logger = winston.createLogger({
    level:'info',
    format:winston.format.json(),
    defaultMeta:{service:'request-logging'},
    transports:[
        new winston.transports.File({filename:'logs.txt'})
    ]
})

const loggerMiddleware = async(req, res, next) => {
    if(!req.url.includes('signin')) {
        const logData = `${req.url} - ${JSON.stringify(req.body)}`;
        logger.info(logData);
    }
    
    next()
}

module.exports = loggerMiddleware;