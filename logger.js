import winston from 'winston';

const { format, createLogger, transports } = winston;
const {
  timestamp, combine, printf, errors,
} = format;

const logFormat = printf(({ level, message, stack }) => `${level}: ${stack || message}`);

export default createLogger({
  format: combine(
    format.colorize(),
    timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    errors({ stack: true }),
    logFormat,
  ),
  transports: [new transports.Console()],
});
