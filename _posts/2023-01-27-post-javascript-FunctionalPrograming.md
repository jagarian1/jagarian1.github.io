---
title: "Functional Programming"
header: ""
categories:
  - posts
tags:
  - javascript
toc: true
toc_sticky: true
last_modified_at: 2023-01-26T05:06:00-05:00

---

> 원본 : O'Reilly Functional Thinking - 닐 포트 지음 ... 에서 인용 하였습니다.

![](../assets/images/2023-01-27-post-javascript-FunctionalPrograming/bram-naus-n8Qb1ZAkK88-unsplash.jpg)

## CHAPTER 1

### 1 WHY

- 함수형 프로그래밍 이란?

1-1 함수형 프로그래밍은 순수 함수 작성에 중점을 둔 **프로그래밍 패러다임** 입니다.

수학 함수를 기반으로 하며 부작용을 줄이고 코드를 더 쉽게 이해,  유지 관리 및 테스트할 수 있도록 설계되었습니다.

순수 함수는 동일한 입력이 주어지면 항상 동일한 출력을 반환하고 응용 프로그램 또는 데이터베이스의 상태 수정과 같은 관찰 가능한 부작용이 없는 함수입니다.

함수형 프로그래밍은 선언적 프로그래밍의 사용을 강조하는데, 이는 수행 방법에 대한 구현 세부 사항보다는 원하는 동작을 표현하는 관행입니다.

이를 통해 개발자는 구현 세부 사항보다는 문제 해결에 집중할 수 있습니다.

함수형 프로그래밍은 또한 **생성 후 변경할 수 없는 데이터 구조인 변경 불가능한 데이터 구조의 사용을 권장**합니다.
이를 통해 **장기적으로 코드 작성이 더 안정적이고 유지 관리가 쉬워 집니다**.

> [마이클 페더스 트위터 ](http://bit.ly/1tm4xQI) > **OO makes code understandable by encapsulating moving parts. FP makes code understandable by minimizing moving parts.**
> 객체 지향 프로그래밍은 움직이는 부분을 캡슐화 하여 코드 이해를 돕고,
> 함수형 프로그래밍은 움직이는 부분을 최소화하여 코드 이해를 돕는다.   -- 구글
>
> [Michael Feathers](https://twitter.com/mfeathers) [@mfeathers](https://twitter.com/mfeathers) [![img](https://pbs.twimg.com/profile_images/1169288003950264321/lqTYfvHO_normal.jpg)](https://twitter.com/mfeathers)

여기서 OO 는 객체 지향 프로그래밍 이 되고 FP는 함수형 프로그래밍이 될 것이다.

저는 개발자로 이전에 쓰이던 개념과 다른 개념의 코딩이 ... 이러한 이유로 바뀌어 나가는 걸
적응하지 못했던 경험이 있습니다. 앞으로 다른 사고방식으로 사고하는 법을 배우기 위해 위의 책을 정리하려고 쓰는 글입니다.

책에는 스칼라나 클로져 C 언어나 파이션 으로 예제가 구성되어 난해해 보이지만 핵심만 잡아서 풀어볼 생각입니다.
책에는 **이제 왜 WHY 모든 언어가 점차적으로 함수형이 되어 가는 지를 알아보자** 라고 되어있다.

클로져 : (Lexical) Closure. 클로저는 함수가 선언될 당시의 환경(environment)을 기억했다가 나중에 호출 되었을 때 원래의 환경에 따라 수행되는 함수이다. 이름이 클로저 인 이유는 함수 선언 시의 **scope(lexical scope) 를 포섭(closure)하여 이후 실행될 때 이용하기 때문**이다. 자주 '[이름 없는 함수(익명함수)](https://namu.wiki/w/람다식)' 와 혼동되곤 한다. 많은 언어의 익명함수가 closure 를 포함하기 때문에 편하게 부를 땐 서로 구분 없이 부르기도 한다. - by [클로저 - 나무 위키 (namu.wiki)](https://namu.wiki/w/클로저)

```java
function plus (a) {
  return function (x) {
    return a + x;
  }
}
var plus3 = plus(3);
var plus5 = plus(5);
```

**메모이제이션** memorization : 21page 함수의 연산결과를 저장했다가 같은 입력이 주어지면
연산을 하지 않고 리턴 하는 최적화 기법.

**컴플렉트** (complect) : 20apge 꼬아서 연결하다 또는 섞어 짜다. 라는 표현으로 명령형 프로그래밍을 하다보면
여러작업 효율을 높이기 위해 한루프에 넣음으로써 작업들을 복잡하게 하는 경우가 종종있다.
함수형 프로그래밍에서는 map() filter() 같은 **고계 함수** 를 통해 추상화의 단계를 높여서 문제를 더욱 명료하게 볼 수 있다.
나는 여러 예제를 통해 이렇게 본의 아니게 복잡해지는 경우에 대해 함수형 사고가 해독제 역할을 하는 것을 보일 것이다.

**고계 함수** HOF 또는 고차 함수라 한다. **고차 함수 (High-Order-Funtion)** 🍎🍌🥝

1. 함수를 다루는 함수
2. 함수를 인자로 받거나 함수를 결과 값으로 뱉는 함수..
   프로그래밍이 동작하는 중에 함수가 만들어지는.

**일급객체(First-Class Citizen)** : 🍎🍌🥝
일급객체 (First-Class Citizen)는 컴퓨터 과학에서 기본적이고 모든 기능들을 가지고 있는 객체의 상태를 의미합니다.
일급 객체는 **함수, 변수 등의 다른 객체에 할당할 수 있고,**
**인수로 다른 함수들에게 넘겨줄 수 있으며,**
**그 객체 자신이 함수로 인식되어 반환 값 으로 사용될 수 있습니다.**

---

## CHAPTER 2

### 2 전환

2-1. 함수형 코드를 작성하기 위해서는, 함수형 언어인 스칼라나 클로져 의 전환이 필요한 것이 아니라 문제에 접근하는 방식의 전환이 필요하다. 명령형 프로그래밍 차이를 보자

java8 버전 명령형 프로그래밍

예제 2-1

```java
public class TheCompanyProcess {
  public String cleanNames(List<String> listOfNames) {
      StringBuilder result = new StringBuilder();
      for (int i=0; i < listOfNames.size(); i++) {
        if (listOfNames.get(i).length() > 1) {
          result.append(capitalizeString(listOfNames.get(i))).append(",");
        }
      }
      return result.substring(0, result.length() -1).toString();
  }


  public String class capitalizeString(String s) {
      return s.substring(0, 1).toUpperCase() + s.substring(1, s.length());
  }
}
```

예제 2-2

함수형 처리

```java
listOfEmp
    -> filter(x.length> 1)
    -> transform(x.capitalize)
    -> convert(x + "," + y)
```

예제 2-3

2-1 을 스칼라로 표현

```scala
val employrees = List("neal", "s", "stu", "j", "rich", "bob", "aiden", "j" , "ethan"
, "liam", "mason", "noah", "lucas", "jacob", "jayden", "jack")

var result = employees
   .filter(_.length() > 1)
   .map(_.capitalize)
   .reduce(_+ "," +_)
```

예제 2-4

TheCompanyProcess 자바 버전

```java
//... 위 생략
public class Process {
    public String clearNames(List<String> names) {
        if (names == null) return "";
        return names
            .stream()
            .filter(name -> name.length() > 1)
            .map(name -> capitalize(name))
            .collect(Collectors.joining(","));
    }
    private String capitalize(String e) {
        retirn e.substring(0, 1).toUpperCase() + e.substring(1, e.length());
    }
}
```

글에서 보면 reduce() 대신 collect() 를 썼는데 이것은 자바 String 클래스 에 대해서 는 좀 더 효율적이라고 써있다.

저렇게 return 하는 방식은 요즘 ECMA6 자바스크립트 에서 쓰이는 방식과 다를 게 없네.

책이 쓰여 진지 2011 년 즈음 이미 이때 저자는 함수형 방식을 이미 구현하고 있었다는 게 부러울 뿐이다.

그럼 이후로는 다음에 정리해보자.

TIP : 절차보다는 결과에 집중하라.

---

> 인용

## CHAPTER 3

### 제 3장

3-1 양도하라

- 본문

---

```

```

## CHAPTER 4

### 제 4장

4-1 열심히 보다는 현명하게

- 본문

```

```

---

## CHAPTER 5

### 제 5장

5-1 진화하라

```

```

---

## CHAPTER 6

### 제 6장

6-1 전진하라

- 본문

```

```

---

## CHAPTER 7

### 제 7장

7-1 실용적 사고

- 본문

```

```

---

## CHAPTER 8

### 제 8장

8-1 폴리글랏과 폴리페러다임

- 본문

```

```

---

저자의 사이트 [[nealford.com • 홈](https://nealford.com/)](https://nealford.com/)
