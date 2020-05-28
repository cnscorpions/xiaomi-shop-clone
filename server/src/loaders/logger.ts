import winston from 'winston';
import config from '../config/index';

const transports = [];

/**
 * 设置dev/prod下的日志transport
 */
if (process.env.NODE_ENV !== 'development') {
    transports.push(new winston.transports.Console());
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(winston.format.cli(), winston.format.splat()),
        }),
    );
}

// 创建logger实例，并导出
const logger = winston.createLogger({
    level: config.logs.level,
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
    ),
    transports,
});

export default logger;
