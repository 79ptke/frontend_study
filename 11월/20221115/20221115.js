function solution(deno1, num1, deno2, num2) {
    num1=1;
    deno1=2
    num2=3;
    deno2=4;
    let deno = deno1*deno2; //분모
    let num = num1*deno2 + num2*deno1; //분자

    console.log(num1 / deno1, num2 / deno2);
    console.log(num / deno);
    console.log(num, deno);

    let minNum;
    // 약분
    for(i = 0; i < deno; i++) {
        if(deno%i === 0 && num%i === 0) {
            minNum = i;
            return[num/minNum, deno/minNum];
        }
    }

    return [deno, num];
}

$(document).ready(function() {
    solution();
});