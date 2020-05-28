import Agenda from 'agenda';
import config from '../config';

export default (params: any) => {
    const { mongoConnection } = params;
    return new Agenda({
        mongo: mongoConnection,
        db: { collection: config.agenda.dbCollection },
        processEvery: config.agenda.pooltime,
        maxConcurrency: config.agenda.concurrency,
    });
};
