import expressLoader from './server';
import mongooseLoader from './database';
import logger from './logger';

export default async (params: any) => {
    const { expressApp } = params;
    try {
        // 连接数据库
        const mongoConnection = await mongooseLoader();
        logger.info('✌️ DB loaded and connected!');

        // 起服务器
        await expressLoader({ app: expressApp });
        logger.info('✌️ Express loaded');
    } catch (error) {
        logger.error(error);
    }
};
