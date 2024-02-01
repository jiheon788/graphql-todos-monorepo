# GraphQL Todos

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. - [graphql.org](https://graphql.org/)

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

### Server

<dl>
  <dt>DB 스키마 (Database Schema)</dt>
  <dd>데이터베이스 내에서 데이터가 물리적으로 어떻게 저장되고 조직되는지에 대한 구조를 정의합니다.
  테이블, 열, 데이터 타입, 관계 등을 포함합니다.</dd>

  <dt>GraphQL 스키마</dt>
  <dd>클라이언트가 요청할 수 있는 데이터의 타입, 구조, 관계 등을 정의합니다.
  쿼리, 뮤테이션, 서브스크립션 및 사용자 정의 타입(객체, 인터페이스, 열거형 등)을 포함합니다.</dd>

  <dt>리졸버 (Resolver)</dt>
  <dd>서버에서, 쿼리나 뮤테이션에 대한 실제 데이터 처리를 담당합니다.
  데이터베이스나 다른 데이터 소스로부터 데이터를 가져오거나, 데이터를 수정하는 로직을 구현합니다.</dd>
</dl>

### Client

<dl>
  <dt>클라이언트의 쿼리와 뮤테이션 정의</dt>
  <dd>클라이언트가 서버에 어떤 데이터를 요청하거나 어떤 작업을 수행하도록 요청하는 것을 정의합니다.
필요한 데이터의 정확한 필드와 타입을 명시하여 요청합니다.</dd>

  <dt>`useMutation` 훅의 `optimisticResponse`와 `update` 옵션</dt>
  <dd>Apollo Client에서 GraphQL 뮤테이션을 다룰 때 사용되며, 사용자 인터페이스의 반응성과 데이터 동기화를 개선하기 위해 사용됩니다.</dd>
</dl>

---

<details>
<summary>Note-taking 2024.01.31: GraphQl Overviwe</summary>
<div markdown="1">

![KakaoTalk_20240131_133922967](https://github.com/jiheon788/graphql-todos-monorepo/assets/90181028/a3cbe665-acb2-462f-a1ae-a2511dd5890f)

</div>
</details>

<details>
<summary>Note-taking 2024.02.01: Optimistic Update</summary>
<div markdown="2">

![image](https://github.com/jiheon788/graphql-todos-monorepo/assets/90181028/9f364511-301b-4ae0-8aad-6e7409d03b50)

</div>
</details>

