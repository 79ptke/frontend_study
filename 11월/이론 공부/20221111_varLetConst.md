# var let const 차이

1. var
- 중복 선언 가능 (유연한 변수 선언)

```javascript

var x = 1;
console.log(x); // 1

var x = 2;
console.log(x); // 2

var x = 3;
console.log(x); // 3


// 첫번째와 두번째 값이 초기화된다.
// 마지막 값만 저장된다.
```


2. let
- 중복 선언 불가능 / 재할당 가능

```javascript

var x = 1;
console.log(x); // 1

var x = 2;
console.log(x); // 에러 - 중복선언 불가

x = 3;
console.log(x); // 3


// 값을 재할당한다.
```


3. const
- 중복 선언 불가능 / 재할당 불가능

```javascript

var x = 1;
console.log(x); // 1

var x = 2;
console.log(x); // 에러 - 중복선언 불가

x = 3;
console.log(x); // 에러 - 재할당 불가

```