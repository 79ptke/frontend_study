function solution(deno1, num1, deno2, num2) {
    num1=1;
    deno1=2
    num2=3;
    deno2=4;
    let deno = deno1*deno2; //분모
    let num = num1*deno2 + num2*deno1; //분자

    // console.log(num1 / deno1, num2 / deno2);
    // console.log(num / deno);
    // console.log(num, deno);

    let minNum;
    for(i=0; i < num; i++) { // 틀린 이유 1) i < deno(분모)가 아니라 i < num(분자)를 써야한다.
        if(deno%i === 0 && num%i ===0) {
            minNum = i;                  
        } //틀린 이뉴2) for문이나 if문 안에 return을 하는게 아니라 밖에 써야한다.
    }
    
    // console.log(i);
    // console.log(num, deno);
    console.log(num/minNum , deno/minNum);

    return [num/minNum , deno/minNum];  
}

$(document).ready(function() {
    solution();
});