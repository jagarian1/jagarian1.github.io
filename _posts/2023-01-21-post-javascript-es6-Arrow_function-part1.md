---
title: "ES6 Arrow Function part1"
search: true
categories:
  - posts
last_modified_at: 2022-02-02T05:06:00-05:00
tags:
  - Javascript 
toc: true
toc_sticky: false
---

##### ⚡️ EC6 Javascritp Arrow Function 1
- 화살표 함수(Arrow Function) 

------

1. 화살표 함수는 언뜻보기에 일반 JavaScript 함수를 만드는 멋진 방법 일뿐입니다 (그러나 몇 가지 놀라움이 있습니다). 화살표 함수를 사용하면 실제로 작동하는 간결한 한 줄짜리 함수를 만들 수 있습니다!

* ES5의 다음 코드와 유사 합니다. 예제2.

* 다음 예제에서는 화살표 함수를 만드는 방법을 보여 줍니다.

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
let circumference = (pi, r) => 2 * pi * r;
let result = circumference(3.141592, 3);
console.log(result); 
```

{} 대괄호를 사용하지 않으면 본문의 문 값이 자동으로 반환 됩니다. 
앞의 코드는 다음과 같습니다.

```javascript
let circumference = function(pi, r) { return 2 * pi * r;}
let result = circumference(3.14, 3);
console.log(result); // 18.14
```

continue ...


2. 화살표 함수에서 "this"의 값

```react
var car = {
  name: 'Bugatti',
  fuel: 0,
  // site A
  addFuel: function() {
             // site B
             setInterval(function() {
              // site C
              this.fuel++;
              console.log("The fuel is now " + this.fuel);
             }, 1000)
           }
}
```


```react
var car = {
  name: 'Bagatti',
  fuel: 0,
  // Site A
  addFuel: function() {
            //site B 
            setInterval(() => {
              //site C 
              this.fuel++;
              console.log("The fuel is now " + this.fuel);
            }, 1000)
          }
  }
}
```

{: .notice}💡
 화살표 함수는 new와 함께 실행할 수 없습니다.
this가 없기 때문에 화살표 함수는 생성자 함수로 사용할 수 없다는 제약이 있습니다. 화살표 함수는 new와 함께 호출할 수 없습니다.


{: .notice}💡
 화살표 함수 vs. bind
화살표 함수와 일반 함수를 .bind(this)를 사용해서 호출하는 것 사이에는 미묘한 차이가 있습니다 .bind(this)는 함수의 '한정된 버전(bound version)'을 만듭니다.
화살표 함수는 어떤 것도 바인딩시키지 않습니다. 화살표 함수엔 단지 this가 없을 뿐입니다. 화살표 함수에서 this를 사용하면 일반 변수 서칭과 마찬가지로 this의 값을 외부 렉시컬 환경에서 찾습니다.




## [화살표 함수엔 'arguments’가 없습니다](https://ko.javascript.info/arrow-functions#ref-1917)

링크 참조



### 템플릿 문자열

**템플릿 문자열**은 문자열을 만들기 위한 새로운 리터럴일 뿐이므로 다양한 작업을 더 쉽게 수행할 수 있습니다. 포함된 식, 여러 줄 문자열, 문자열 보간, 문자열 서식 지정, 문자열 태그 지정 등과 같은 기능을 제공합니다. 그것들은 항상 처리되고 런타임에 일반 자바 스크립트 문자열로 변환됩니다. 따라서 일반 문자열을 사용하는 모든 곳에서 사용할 수 있습니다.

템플릿 문자열은 작은따옴표 또는 큰따옴표 대신 백틱(` `)을 사용하여 작성됩니다. 다음은 간단한 템플릿 문자열의 예입니다.

```javascript
let str1 = `hello`; //template string
let str2 = "world!!!";
console.log(str1 === str2); //output "false"
let str3 = `${str1} ${str2}`;
console.log(str3); //  hello world!!!
```



[^각주]: 요약

화살표 함수가 일반 함수와 다른 점은 다음과 같습니다.

- `this`를 가지지 않습니다.
- `arguments`를 지원하지 않습니다.
- `new`와 함께 호출할 수 없습니다.
- 이 외에도 화살표 함수는 `super`가 없다는 특징

화살표 함수는 컨텍스트가 있는 긴 코드보다는 자체 '컨텍스트’가 없는 짧은 코드를 담을 용도로 만들어졌습니다. 그리고 이 목적에 잘 들어맞는 특징을 보입니다.

