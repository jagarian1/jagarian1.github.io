---
title: "Javascript ES6 "
search: true
categories:
  - Javascript
last_modified_at: 2023-01-20T05:06:00-05:00
tags:
  - Javascript
toc: true
toc_sticky: true
---

### ⚡️ 화살표 기능을 피해야 하는 경우

##### 키워드의 상속에 대해 알고있는 것을 사용하여 화살표 함수를 사용해서는 안되는 몇 가지 인스턴스를 정의 할 수 있습니다.

🌟 다음 두 예제에서는 화살표 안쪽을 사용하여 주의해야 하는 경우를 보여 줍니다.

⚡️예제 1

```javascript
const button = document.querySelector("btn");
button.addEventListener("click", () => {
  // error: *this* refers to the `Window` Object
  this.classList.toggle("on");
});
```

⚡️예제 2

```javascript
const person1 = {
  age: 10,
  grow: function () {
    this.age++;
    console.log(this.age);
  },
};

person1.grow();
// 11

const person2 = {
  age: 10,
  grow: () => {
    // error: *this* refers to the `Window` Object
    this.age++;
    console.log(this.age);
  },
};

person2.grow();
```
