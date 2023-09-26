import dotenv from 'dotenv';

import banner from './util/banner';
import colors from './util/colors';
import logger from './util/logger';

// eslint-disable-next-line @typescript-eslint/require-await
async function start(): Promise<void> {
  // 배너 출력
  console.log(banner);
  logger.info(`---- ${colors.blueBright('BATCH START')} ----`);

  // 환경 변수 설정
  configureEnvironments();
}

const configureEnvironments = (): void => {
  // 기본 환경 설정값을 가지고 있는 .env 파일을 로드
  dotenv.config();

  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  // 설정된 환경(local, development, staging, production)에 따른 .env 파일에 지정된 값들을 재정의
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
    override: true
  });

  logger.info(`${colors.gray('- Environment:')} ${colors.blueBright(process.env.NODE_ENV.toUpperCase())}`);
  logger.info(
    `${colors.gray('- Print Debug:')} ${
      process.env.DEBUG === 'true' ? colors.blueBright(process.env.DEBUG) : colors.redBright(process.env.DEBUG)
    }`
  );
};

// 애플리케이션 시작
start().then(() => {
  logger.info(`---- ${colors.blueBright('BATCH END')} ----`);
});

// 처리되지 않은 오류 처리
process.on('uncaughtException', (error) => {
  logger.error(error);
  logger.info(`---- ${colors.red('BATCH TERMINATE')} ----`);
  process.exit(1);
});
