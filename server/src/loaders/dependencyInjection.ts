/**
 * 依赖注入 loader
 */

import { Container } from 'typedi';
import logger from './logger';
import jobFactory from './jobScheduling';

export default ({ mongoConnection, models }: { mongoConnection: any; models: { name: string; model: any }[] }) => {
    try {
        models.forEach((m) => {
            Container.set(m.name, m.model);
        });

        const jobScheduler = jobFactory({ mongoConnection });
        Container.set('jobScheduler', jobScheduler);
        Container.set('logger', logger);

        logger.info('✌️ jobScheduler injected into container');

        return { jobScheduler: jobScheduler };
    } catch (error) {
        logger.error('🔥 Error on dependency injector loader: %o', error);
        throw error;
    }
};
