// 두 수가 같은지 비교
$(document).ready(function() {
    console.log(solution());
});

function solution(num1, num2) {
    if(num1 === num2) { // 같으면 1
        return[1];
    } else {
        return[-1]; // 다르면 -1
    }
}



