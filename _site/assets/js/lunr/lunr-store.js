var store = [{
        "title": "About",
        "excerpt":"    Be My Wing Man? 이란  저와 함께 일하고 같이 코드를 공유할 분을 찾고 있다는 내용 입니다.    ","categories": [],
        "tags": [],
        "url": "/about/",
        "teaser": null
      },{
        "title": "MY MUSIC",
        "excerpt":"My MUSIC List Blog Post Draft Johann Sebastian Bach Suite No. 3 in D Major, BWV 1068: II. Air Lo Fi The Chinchilla! Foot tapping lounge tunes for getting stuff done at your own speed. The Drop Uptempo EDM • Infectious, energetic, dance-floor beats to keep you engaged. Symphonica Classical...","categories": ["posts"],
        "tags": ["MUSIC"],
        "url": "/posts/post-MyMUSICList227545/post-MyMUSICList227545.html",
        "teaser": null
      },{
        "title": "JAVA SPRING",
        "excerpt":"SPRING  CONFIG           WebMvcConfigurer            WebMvcConfigurer 설정 메모        @Bean public WebMvcConfigurer corsConfigurer() {     return new WebMvcConfigurer() {         @Override         public void addCorsMappings(CorsRegistry registry) {             registry             .addMapping(\"/**\")             .allowedOrigins(\"http://127.0.0.1:9999\");         }     }; }   ","categories": ["posts"],
        "tags": ["SPRING"],
        "url": "/posts/post-categorys/post-categorys.html",
        "teaser": null
      },{
        "title": "When U git Change Default Branch Renamed!",
        "excerpt":"✨ git Default Branch Renamed github 에서 default 브렌치를 이름 변경하면 로컬에서 cmd 창에 아래와 같이 작업 브렌치 마스터에서 변경된 이름으로 하고 ✨ fetch origin branch -u 변경된 branch 이름으로 ✨ remote 명령으로 origin의 모든것을 set-head 해줍니다. ✨ ✨ commands git branch -m master devlop git fetch origin git branch...","categories": ["posts"],
        "tags": ["GIT"],
        "url": "/posts/post-git-WhenChangeDefaultBranchRenamed2/post-git-WhenChangeDefaultBranchRenamed2.html",
        "teaser": null
      },{
        "title": "Javascript ES6 Lexical Scope",
        "excerpt":"Javascript Lexical Scope 클로져 (Closure) : 함수가 선언된 렉시컬 환경 Lexical Scope 의 정적 스코프 const x = 1; function outterFunc() { const s = 10; function innerFunc() { console.log(x); //10 } innerFunc(); } outterFunc(); 중첩 함수 내부에서 자시을 포함하고 있는 외부 함수 outterFunc의 x 변수에 접근이 가능하다. const x...","categories": ["posts"],
        "tags": ["Javascript"],
        "url": "/posts/post-javascript-es6-lexicalscope/post-javascript-es6-lexicalscope.html",
        "teaser": null
      },{
        "title": "React",
        "excerpt":"JSX가 왜 필요 할까? const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;; JSX (JavaScript Syntax Extension and occasionally referred as JavaScript XML) React를 위해 태어난 새로운 자바스크립트 문법 JSX 소개 – React (reactjs.org) =&gt; 자바스트립트 구문 확장, 떄론 자바스크립트 XML react.org 에서는 Javascript의 모든 기능이 포함되어 있다고 합니다. 즉 자바 스크립트 언어 구문에...","categories": ["posts"],
        "tags": ["JSX"],
        "url": "/posts/post-react-JSX/post-react-JSX.html",
        "teaser": null
      },{
        "title": "GIT MASTER",
        "excerpt":"📗 Git Commands List 🔓📎 GIT 저장소 개념 📎 + git의 저장소는 3가지 단계로 나누어 집니다. + 커밋한 소스가 보관되는 저장소 Repository + 프로젝트 파일들이 있는 **🌟작업트리** WorkTree + 저장소와 작업트리사이의 버퍼영역으로 커밋될 대상이 저장되는 **🌟스테이징** Staging + git은 빈 디렉토리는 추적하지 않습니다. + 형상관리를 하지 않을 파일은 **.gitignore** 파일에...","categories": ["posts"],
        "tags": ["GIT COMMANDS"],
        "url": "/posts/post-git-GIT-master-doit/post-git-GIT-master-doit.html",
        "teaser": null
      },{
        "title": "ES6 Arrow Function part1",
        "excerpt":"⚡️ EC6 Javascritp Arrow Function 1 화살표 함수(Arrow Function) 화살표 함수는 언뜻보기에 일반 JavaScript 함수를 만드는 멋진 방법 일뿐입니다 (그러나 몇 가지 놀라움이 있습니다). 화살표 함수를 사용하면 실제로 작동하는 간결한 한 줄짜리 함수를 만들 수 있습니다! ES5의 다음 코드와 유사 합니다. 예제2. 다음 예제에서는 화살표 함수를 만드는 방법을 보여 줍니다....","categories": ["posts"],
        "tags": ["Javascript"],
        "url": "/posts/post-javascript-es6-Arrow_function-part1/post-javascript-es6-Arrow_function-part1.html",
        "teaser": null
      },{
        "title": "ES6 Arrow Function part2",
        "excerpt":"⚡️ Javascritp Arrow Function 화살표 기능을 피해야 하는 경우 키워드의 상속에 대해 알고있는 것을 사용하여 화살표 함수를 사용해서는 안되는 몇 가지 인스턴스를 정의 할 수 있습니다. 다음 두 예제에서는 화살표 함수을 사용하여 함수 안쪽에서 주의해야 하는 경우를 보여 줍니다. ⚡️예제 1 const button = document.querySelector(\"btn\"); button.addEventListener(\"click\", () =&gt; { //...","categories": ["posts"],
        "tags": ["Javascript"],
        "url": "/posts/post-javascript-es6-Arrow_function-part2/post-javascript-es6-Arrow_function-part2.html",
        "teaser": null
      },{
        "title": "Functional Programming",
        "excerpt":"원본 : O’Reilly Functional Thinking - 닐 포트 지음 … 에서 인용 하였습니다. CHAPTER 1 1 WHY 함수형 프로그래밍 이란? 1-1 함수형 프로그래밍은 순수 함수 작성에 중점을 둔 프로그래밍 패러다임 입니다. 수학 함수를 기반으로 하며 부작용을 줄이고 코드를 더 쉽게 이해, 유지 관리 및 테스트할 수 있도록 설계되었습니다. 순수 함수는...","categories": ["posts"],
        "tags": ["javascript"],
        "url": "/posts/post-javascript-FunctionalPrograming/post-javascript-FunctionalPrograming.html",
        "teaser": null
      },{
        "title": "React Query 오류 다운그레이드",
        "excerpt":"✨ React Query @tanstack/react-query React-Query 사용하는 이유 : Custom Hook 의 문제로 인해. 1.Cache 2.Retry 기능이 없음. React Query 사용하여 이런 문제를 해결.. ==== INSTALL 환경설정 yarn 으로 설치한다. = @tanstack/react-query 를 설치한다. yarn create react-app query-init ✨ 디렉토리 상위에서 프로젝트(query-init)를 생성합니다. cd query-init ✨ yarn init ✨ yarn add...","categories": ["posts"],
        "tags": ["React"],
        "url": "/posts/post-React-Router-sampleCode/post-React-Router-sampleCode.html",
        "teaser": null
      },{
        "title": "코딩 사이트",
        "excerpt":"- 외국 코딩 사이트로는 대표적으로 다음과 같은 사이트들이 있습니다.   1.1 Stack Overflow: https://stackoverflow.com/   1.2 GitHub: https://github.com/   1.3 Codecademy: https://www.codecademy.com/   1.4 HackerRank: https://www.hackerrank.com/   1.5 Udacity: https://www.udacity.com/   1.6 Codepen: https://codepen.io/   1.7 FreeCodeCamp: https://www.freecodecamp.org/   1.8 Codewars: https://www.codewars.com/  ","categories": ["Coding"],
        "tags": ["Category"],
        "url": "/categories/",
        "teaser": null
      },{
        "title": "타입스크립트 (TypeScript) Introduction",
        "excerpt":"TypeScript 정리 초안 1.1 타입스크립트 (TypeScript) Introduction 자바스크립트 프로그램이 유용하려면 숫자, 문자열, 구조체, 불리언 값과 같은 간단한 데이터 단위가 필요합니다. TypeScript는 JavaScript와 거의 동일한 데이터 타입을 지원하며, 열거 타입을 사용하여 더 편리하게 사용할 수 있습니다. + TypeScript 의 개념 - TSC 타입스크립트 컴파일러 - AST를 바이트코드 라는 하위 수준의 표현으로...","categories": ["posts"],
        "tags": ["TypeScript"],
        "url": "/posts/typescript-tutorial-partOne/typescript-tutorial-partOne.html",
        "teaser": null
      }]
