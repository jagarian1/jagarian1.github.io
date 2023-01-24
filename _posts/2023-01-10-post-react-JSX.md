---
title:  "React Native"
search: true
categories: 
  - React
last_modified_at: 2023-01-10T08:06:00-05:00
tags:
  - React
  - JSX
toc: true
toc_sticky: true
---

![](../assets/images/2023-01-10-post-react-JSX/christopher-gower-m_HRfLhgABo-unsplash.jpg)

#### JSX가 왜 필요 할까?

```javascript
const element = <h1>Hello, world!</h1>;
```

> JSX (**JavaScript Syntax Extension** and occasionally referred as **JavaScript [XML](https://en.wikipedia.org/wiki/XML)**)

React를 위해 태어난 새로운 자바스크립트 문법  

JSX 소개 – React (reactjs.org) =>  자바스트립트 구문 확장, 떄론 자바스크립트 XML

react.org  에서는 Javascript의 모든 기능이 포함되어 있다고 합니다.

즉 자바 스크립트 언어 구문에 대한 React 확장 이라고 합니다. HTML과 흡사 합니다.

JSX는 (이전 Facebook)에 의해 만들어 집니다.  XHP 또 다른 확장 구문과 비슷 합니다. - by WIKI

코드 1 ) 

```react
// index.js
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App.jsx or App.js
import './App.css';
function App() {
    const name = 'React';
  return (
    <>
      <h1 >{`Hello! ${name}`} World!</h1>
    </>
  );
}

export default App;
```

그러면. JSX 가 왜 필요 할까? 왜 사용 하는걸까요.

------

이것을 설명하기 위해 위키와 react.org 에서는 관심사의 분리, 느슨한 결합, 추상화의 한형태, 더많은 자유도가 생긴다 는 표현으로 설명하고 있군요.

이것을 쉽게 이해 하려고 이글을 남기고 있습니다. 

React는 10년은 가지고 놀만한 아이디어 라고 하니. 좀더 같이 알아 보고자 합니다.

자바를 처음 공부할때도 스프링에서도 이러한 부분은 설명이 있었습니다.. (요부분은 나중에 자료를 찾아 보죠.)

  코드 2 )

```react
const element = <a href="https://www.reactjs.org"> link </a>;
```

```react
const element = <img src={user.avatarUrl}></img>;
```

```react
...
```

먼저 **React**를 말하고자 하는건 JSX의 태생이 Facebook에서 만든 자바스크립트 라이브러리에서 XHP 개량판에 그 기원을 두고 있다고 한다. 

그럼 원론으로 돌아가 이걸 왜 사용 하는걸까요.

위에 예제 코드가 html 같은 정체불명의 **JSX** 코드 인것 입니다. **ESMA6** 기반 자바스크립트에 

html을 넣은듯한 Virtual DOM.의 최적화 작업  html의 **DOM의 랜더링** 이라 생각 됩니다.

------

제가 여기에 글을  쓴 이유 중 하나가 React 에서 어디까지가 JSX이고 어디 부분이 React 인가 때문도 있었습니다.

어쩌면 React JSX Redux의 설명이 될수도 있겠네요.

React 에서는 컴파일해야 하는 과정이 있으며 Component라는 개별적인  뷰 단위를 가집니다. `render()`

그리고 **Redux** *(Redux(리덕스)란 JavaScript(자바스트립트) 상태관리 라이브러리이다. · Redux(리덕스)의 본질은 Node.js 모듈이다.)* 라는 것을 사용해 상태관리를 하는 라이브러리를 사용합니다.  *상태관리는 여기서 더 찾아 보시기 바랍니다.* [ Redux.js.org ](https://ko.redux.js.org/introduction/getting-started)



- 자바스크립트 표현식 JavaScript expressions

코드 3 ) JSX 예

```react
const App = () => {
   return (
     <div>
       <p>Header</p>
       <p>Content</p>
       <p>Footer</p>
     </div>
   ); 
}
```

```react
<h1>{10+1}</h1>
```

렌더링 후

```html
 <h1>11</h1>
```



- 조건식

  JSX 내에서는 If  else 문을 사용할 수 없지만 조건식을 대신 사용할 수 있습니다. 

  ```react
  const App = () => {
     const sections = [1, 2, 3];
     return (
       <div>
         {sections.map((n,i) => (
          /* 'key' is used by react to keep track of list items and their changes */
          /* Each 'key' must be unique */
             <div key={"section-" + n}>
                 Section {n} {i === 0 && <span>(first)</span>}
             </div>
         ))}
       </div>
     );
  } /* https://en.wikipedia.org/wiki/JSX_(JavaScript) */
  ```

  

- 속성

  JSXX는 HTML 에서 제공하는 요소 속성을 미러링하도록 설계된 다양한 요소 속성을 제공한다.

  

JSX로 작성된 코드는 웹 브라우져에서 이해하기 위해 Babel과 같은(트랜스파일러) 도구로 변환해야 합니다.

이제 React 생태계로 들어 가려 합니다. 

요즘 React 를 늦게 배우고 있는 개발자 입니다.

**참고한 자료**

- [react.org] (https://ko.reactjs.org)

- [XML에 대한 ECMAScript](https://en.wikipedia.org/wiki/ECMAScript_for_XML)

- https://dobbit.github.io/redux/
- https://react.vlpt.us/redux/