import expressLoader from './server';
import mongooseLoader from './database';
import diLoader from './dependencyInjection';
import jobSchedulingLoader from './jobScheduling';
import logger from './logger';

export default async (params: any) => {
    const { expressApp } = params;
    try {
        // 连接数据库
        const mongoConnection = await mongooseLoader();
        logger.info('✌️ DB loaded and connected!');

        const userModel = {
            name: 'userModel',
            model: require('../models/user.model').default,
        };

        // 依赖注入
        const { jobScheduler } = await diLoader({
            mongoConnection,
            models: [userModel],
        });
        logger.info('✌️ Dependency Injector loaded');

        // 加载定时任务
        // TODO: 有bug要修复
        // await jobSchedulingLoader({ jobScheduler });
        // logger.info('✌️ Jobs loaded');

        // 起服务器
        await expressLoader({ app: expressApp });
        logger.info('✌️ Express loaded');
    } catch (error) {
        logger.error(error);
    }
};
