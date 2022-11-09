# parseInt()과 Math.floor()의 차이

```javascript
function solution(num1, num2) {
    let answer = parseInt(num1 / num2);
    return answer;
}
  
solution();

function solution2(num1, num2) {
    let answer = Math.floor(num1 / num2);
    return answer;
}
  
solution2();

// 설명 참고 링크
// https://velog.io/@mnmm/js-parseint-mathfloor
```

### 두 함수가 양수일때는 같은 값이 나오지만 음수일때는 차이가 있다.
###  Math.floor는 소수 첫째자리에서 내림하고,
###  parseInt는 소수점을 버린다.