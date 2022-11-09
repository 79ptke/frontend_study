// 두 수의 차
function solution(num1, num2) {
    let answer = num1 - num2;
    return answer;
}

solution();

// 두 수의 몫
function solution2(num1, num2) {
    //let answer = parseInt(num1 / num2);
    // 위의 것을 쓰면 양수일때는 상관이 없지만 음수가 나올 경우 
    // 값이 달라지니 주의 해야한다.
    let answer = Math.floor(num1 / num2);
    return answer;
}
  
solution2();