import express from 'express';
import expressLoader from './express';
import mongooseLoader from './mongoose';
import logger from './logger';

export default async ({ expressApp }: { expressApp: express.Application }) => {
    try {
        const mongoConnection = await mongooseLoader();
        logger.info('✌️ DB loaded and connected!');

        // 起服务器
        await expressLoader({ app: expressApp });
        logger.info('✌️ Express loaded');
    } catch (error) {
        logger.error(error);
    }
};
