---
title: "Javascript ES6 "
search: true
categories:
  - posts
last_modified_at: 2023-01-20T05:06:00-05:00
tags:
  - Javascript 
toc: true
toc_sticky: false
---

##### ⚡️ EC6 Javascritp Arrow Function 1
- 화살표 함수(Arrow Function) 

------

 * ES5의 다음 코드와 유사 합니다. 예제2.

 * 다음 예제에서는 다음 예제에서는 화살표 함수를 만드는 방법을 보여 줍니다.

  ⚡️예제 1 

```javascript
let circumference = (pi, r) => {
  let ans = 2 * pi * r;
  return ans;
}
let result = circumference(3.141592, 3);
console.log(result); // Outputs 18.849552
```

⚡️예제 2

```javascript
var circumference = function(pi, r) {
  var area = 2 * pi * r;
  return area;
}
var result = circumference(3.141592, 3);
console.log(result); //Output 18.849552
```
우리가 이전 써왔던 ES5 문법의 자바스크립트 예제입니다. 예제2.active

단일 명령문만 포함되어 있고 해당 명령문의 결과를 반환하려는 경우 대괄호를 사용하여 코드를 래핑할 필요가 없습니다. 이것은 그것을 한 줄짜리로 만듭니다. 다음 예제에서는 이를 보여 줍니다

```javascript
let circuference = (pi, r) => 2 * pi * r;
let result = circumference(3.141592, 3);
console.log(result); 
```

{} 대괄호를 사용하지 않으면 본문의 문 값이 자동으로 반환 됩니다. 
앞의 코드는 다음과 같습니다.

```javascript
let cirumference = function(pi, r) { return 2 * pi * r;}
let result = circuference(3.14, 3);
console.log(result); // 18.14
```

continue ...