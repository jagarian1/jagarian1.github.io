---
title: "타입스크립트 (TypeScript) Introduction"
search: true
categories:
  - posts
last_modified_at: 2023--03-11-10T08:06:00-05:00
tags:
  - TypeScript
toc: true
toc_sticky: true
---

#### TypeScript 정리 초안

1.1 타입스크립트 (TypeScript) Introduction

```javascript
 자바스크립트 프로그램이 유용하려면 숫자, 문자열, 구조체, 불리언 값과 같은 간단한 데이터 단위가 필요합니다. 
 TypeScript는 JavaScript와 거의 동일한 데이터 타입을 지원하며, 열거 타입을 사용하여 더 편리하게 사용할 수 있습니다.

+ TypeScript 의 개념
 - TSC 타입스크립트 컴파일러
 - AST를 바이트코드 라는 하위 수준의 표현으로 변환한다.
 - 보통 자바스크립트 컴파일러와 런타임은 엔진이라는 하나의 프로그램으로 합쳐진다.
   프로그래머는  주로 이 엔지과 상호 작용한다.  
   V8 스파이더몽키 JSCode  샤크라 등 브라우져별 엔진이 이처럼 동작하며 자바스크립트가 해석되는 Interpreted 언어의 모습을 갖게 만든다...
 - 타입의 안정성. 타입을 이용해 프로그램이 유효하지 않은 작업을 수행하지 않도록 방지한다.
```

 여기까지는 O'Reilly  타입스크립트 프로그래밍 책에서 발췌한 것이고 이제부터 내 기억에 넣을 정리를 시작해보자.

+ 공식 문서

```javascript
Typescript 공식 홈페이지: https://www.typescriptlang.org/
Typescript 한글 git   : https://github.com/microsoft/TypeScript-Website
Typescript 한글 문서   : https://www.typescriptlang.org/docs/home
Typescript 한글 강좌   : 
Typescript 한글 메뉴얼 : https://typescript-kr.github.io/

```

```javascript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;
```

위와 아래는 동일 하다.

```javascript
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
```

위 예제가 이해가 가지 않는다면.  JavaScript ECMA6 튜토리얼을 보고 오기를 권장 한다.

```javascript
 - 정리하자면 타입스크립트는 에러를 알려준다는 사실자체 보다는 더 휼륭한 기능은 바로 에러를 알려주는 시점이다. 
 개발자가 테스트 편집기에 코드를 입력하는 순간 곧바로 에러 메세지를 발생 시킨다.
 어떤 에러를 발생하는지 보자..
```

```javascript
  // [에러 TS2365: '3' 타입과 'naver[]' 타입에 연산자 '+' 를 적용할 수 없음]]
  // [에러 TS2345: 'number' 타입의 매개변수에  'x' 라는 인수타입을 할달할 수 없음]]
```

```javascript
2.1 타입스크립트 : 3000 미터 상공에서 내려다보기

 + 타입 시스템 기능
 + 타입 결정  방식             동적
 + 타입이 자동으로 변환 되는가?  O 
 + 언제 타입을 확인하는가?       런타임
 + 언제 에러를 검출하는가?       런타임(대부분)

 + 동적 타입 바인딩 : 
   자바스크립트가 프로그램을 실행해야 특정 데이터의 타입을 알 수 있음을 의미함.

2.2 코드 편집기 설정
 - VSCode 웹사이트에서 제공하는 절차를 따라 설정 하라.
 - NodeJS 프로젝트 의존성이나 빌드를 관리하는 패키지 관리자 NPM 을 포함. 
   TSC 와 TSLint 설치로 터미널에서 NPM 프로젝트를 초기화 하라.
```

```javascript
mkdir 생성할project디렉토리명

cd project디렉토리명

npm Introduction
npm instll --save-dev typescript tslint @type/node
```

2.2.1  tsconfig.json

```javascript
 - 모든 타입 스크립트 프로젝트는 루트 디렉토리에 tsconfig.json 이라는 파일이 존재 해야 한다.
   json 파일은 타입스크리브의 프로젝트에서 어떤 파일을 컴파일 하고 어떤 자바스크립트 버전으로 방출하는지 등을 정의한다.

 - 루트 디렉토리에 tsconfig.json 이라는 파일을 만들고 코드 변집기를 열어 다음과 같이 입력하자.
```

```javascript
{
  "compilerOptions": {
    "lib": {"es2015"},
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2015",
    },
    "include": [
      "src"
    ]
}
```

그림 2-2 TypeScript 옵션

```javascript
 include
 lib
 module
 outDir
 strict
 target
```

2.2.2 tslint.json

```javascript
./node_modules/.bin/tslint -init
```

** rule 모든 규칙은 TSLint 공식문서에서 확인하자.

2.4 index.ts  또는 index.tsx

+ src/index.tsx

 index.ts 에  아래의 코드를 넣는다.

```javascript
 console.log('Hello TypeScript!');
```

+ 컴파일 하고 실행하자

+ TSC로 타입스크립트 컴파일

```javascript
 ./node_modules/.bin/tsc
```

+ NodeJS 로 코드 실행

```javascript
 node ./dist/index.js
```

여기까지 실행환경 이었다.. 수고 했음.
