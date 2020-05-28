import express, { Request, Response } from 'express';
import config from './config/index';
import logger from './loaders/logger';

// Add a polyfill for the Reflect API
import 'reflect-metadata';

const startServer = async () => {
    const app: express.Application = express();

    try {
        await require('./loaders').default({ expressApp: app });
    } catch (error) {
        logger.error(error);
    }

    app.listen(config.port, (err: any) => {
        if (err) {
            logger.error(err);
            process.exit(1);
            return;
        }
        logger.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️ 
        ################################################
        `);
    });
};

startServer();
