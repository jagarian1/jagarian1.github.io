---
title: "Javascript ES6 Lexical Scope"
search: true
categories:
  - posts
last_modified_at: 2022-01-10T08:06:00-05:00
tags:
  - Javascript
toc: true
toc_sticky: true
---

##### Javascript  Lexical Scope

+ 클로져 (Closure) : 함수가 선언된 렉시컬 환경

+ Lexical Scope 의 정적 스코프

```javascript
const x = 1;

function outterFunc() {
  const s = 10;

  function innerFunc() {
    console.log(x); //10
  }

  innerFunc();
}

outterFunc();

```

중첩 함수 내부에서 자시을 포함하고 있는 외부 함수 outterFunc의 x 변수에 접근이 가능하다.

```javascript
const x = 1;

function outterFunc() {
  const s = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x); //1
}

outterFunc();
```

그러나 내부에서 정의된 중첩 함수가 아니라면 innerFunc 함수를 outterFunc 함수의 내부에서 호출한다면 outterFunc 함수의 변수에 접근할수가 없다.
이러한 현상이 자바스크립트가 렉시컬 스코프를 따르는 프로그래밍 언어 이기 떄문이다.

--------

+ 클로져 (Closure) : 함수가 선언된 렉시컬 환경
  클로져는 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수를 의미 합니다.
  자바 스크립트에서는 모든 함수가 자연스럽게 클로져가 됩니다. 
  물론 예외는 있습니다... [new Function 문법](https://ko.javascript.info/new-function)

{: .notice}
**Watch out!** 함수는 특별한 프로퍼티 [[Environment]]에 저장된 정보를 이용해 자기 자신이 태어난 곳을 기억합니다. [[Environment]]는 함수가 만들어진 렉시컬 환경을 참조합니다.

+ 전역 렉시컬 환경과 현재의 렉시컬 환경

** ReferenceError: value is not defined

```javascript
 
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // ReferenceError: value is not defined
 ```


**getFunc의 렉시컬 환경에 있는 값 "test"가 출력됩니다.**

  ```javascript
 
function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

getFunc()(); // getFunc의 렉시컬 환경에 있는 값 "test"가 출력됩니다.
 ```

 함수 내부에서 외부 변수에 접근하는 것은 아키텍처 관점에서도 좋지 않고 에러에 취약합니다.

new Function으로 만든 함수에 무언가를 넘겨주고 싶다면 인수를 사용하세요.

##### 정리

{: .notice}
**Watch out!** new Function을 이용해 만든 함수의 [[Environment]]는 외부 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조하므로 외부 변수를 사용할 수 없습니다.


