import 'winston-daily-rotate-file';

import stripAnsi from 'strip-ansi';
import winston, { createLogger, format, transports } from 'winston';

import colors from './colors';

const trans = [];

export interface Logger extends winston.Logger {}

// 로그 출력 포맷
const printFormat = format.printf(({ level, message, timestamp }) => {
  return `[${level}] ${timestamp}  ${message}`;
});

// 콘솔 출력
trans.push(
  new transports.Console({
    level: process.env.DEBUG === 'true' ? 'debug' : 'info',
    format: format.combine(
      format((info) => {
        info.timestamp = colors.blackBright(info.timestamp);
        return info;
      })(),
      format.colorize(),
      printFormat
    )
  })
);

// 데일리 로그 파일
trans.push(
  new transports.DailyRotateFile({
    level: 'info',
    format: format.combine(
      format((info) => {
        info.message = stripAnsi(info.message as string);
        return info;
      })(),
      printFormat
    ),
    filename: 'LOG_%DATE%.log',
    dirname: 'logs',
    datePattern: 'YYYY-MM-DD',
    maxFiles: 10,
    handleExceptions: true
  })
);

const logger = createLogger({
  transports: trans,
  format: format.combine(
    format((info) => {
      info.level = info.level.toUpperCase();
      return info;
    })(),
    format.splat(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    format.errors({ stack: true })
  ),
  exitOnError: false
}) as Logger;

export default logger;
