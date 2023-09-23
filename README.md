# node-batch-example

## Install

```shell
# yarn
$ yarn install

# npm 
$ npm install
```

## Prerequisites

프로젝트 경로에 `.env.local` 파일을 생성해주세요.
내용은 `.env`에 정의된 기본 환경 설정 값을 로컬에서 변경할 값들만 명기합니다.

```dotenv
DEBUG=true
```

## Usage
```shell
# local 환경 실행
$ yarn start 

# development 환경 실행
$ yarn start:development
# or
$ npm run start:development

# staging 환경 실행
$ yarn start:staging
# or
$ npm run start:staging

# production 환경 실행
$ yarn start:production
# or
$ npm run start:production
```
