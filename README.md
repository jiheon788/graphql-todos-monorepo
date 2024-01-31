# GraphQL Todos

GraphQL을 학습하기 위한 서버-클라이언트로 이루어진 모노레포입니다.

## Getting Started

#### Install

```
yarn install
```

#### Start

```
yarn start:server
yarn start:client
```

## Takeaways

![KakaoTalk_20240131_133922967](https://github.com/jiheon788/graphql-todos-monorepo/assets/90181028/a3cbe665-acb2-462f-a1ae-a2511dd5890f)

#### DB 스키마 (Database Schema):

데이터베이스 내에서 데이터가 물리적으로 어떻게 저장되고 조직되는지에 대한 구조를 정의합니다.
테이블, 열, 데이터 타입, 관계 등을 포함합니다.

#### GraphQL 스키마:

클라이언트가 요청할 수 있는 데이터의 타입, 구조, 관계 등을 정의합니다.
쿼리, 뮤테이션, 서브스크립션 및 사용자 정의 타입(객체, 인터페이스, 열거형 등)을 포함합니다.

#### 리졸버 (Resolver):

서버에서, 쿼리나 뮤테이션에 대한 실제 데이터 처리를 담당합니다.
데이터베이스나 다른 데이터 소스로부터 데이터를 가져오거나, 데이터를 수정하는 로직을 구현합니다.

#### 클라이언트의 쿼리와 뮤테이션 정의:

클라이언트가 서버에 어떤 데이터를 요청하거나 어떤 작업을 수행하도록 요청하는 것을 정의합니다.
필요한 데이터의 정확한 필드와 타입을 명시하여 요청합니다.
