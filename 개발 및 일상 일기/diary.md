# 개발 및 일상 한줄 일기 (2022.12.03 ~ )

-  <b>2022.12.03</b> 이번주는 d3.js에 대해 공부를 했다. 처음으로 스스로 데이터를 뿌렸다! 기념으로 어제 공부한 것에 대해 올리려고 신나게 정리를 하고 있었는데 끝내고 보니까 12시가 넘어 있었다.. 어이없게 1일 1커밋을 놓쳤다.. 내일부터는 진짜 1일 1커밋 도전..!!
-  <b>2022.12.06</b> 매주 화요일 목요일은 1시간 40분동안 발레 수업 듣는 시간! 되도록 수업 전에 알고리즘 하나씩 풀어서 업로드 하자..!!
-  <b>2022.12.07</b> 기존에 d3.json(파일이름.json)으로 불러왔던 것을 fetch로 불러오도록 수정했다. 데이터를 변환시키는 과정에서 해당 date에 대한 값이 없는 날에도 cost_price값을 0처리 해서 넣어야했다. if (!dateArr.includes(i))을 활용해서 <b>배열에 특정 값(기존 json 파일에 있던 date)이 포함되어 있지 않으면</b> 배열에 해당 date값을 찾아서 cost_price 값을 0처리한걸 push하도록 처리했다.
-  <b>2022.12.10</b> 알고리즘 테스트 케이스가 다 맞아서 통과된줄 알았는데 제출 후 채점하기를 하니까 다 틀리다고 나왔다... 이런 경우도 있구나.. 
-  <b>2022.12.16</b> 어제 삼성인터넷 브라우저에서 뷰포트때문에 문제가 생겼다. 삼성브라우저가 '손가락으로 웹페이지 확대/축소' 기능이 켜져있으면 뷰포트가 확대가 되어서 생기는 문제였다. 전에는 이 기능을 끄는 방법을 팝업으로 만들어서 넣는 방식으로 해결하였는데, 이 방법이 불편하다는 말이 나와서 다른 방식으로 수정하게 되었다. html파일을 -1.html을 만들어서 해당 html링크에 들어왔을 때 만약 브라우저가 삼성브라우저면 -1.html 파일로 넘어가도록 처리를해서 해결했다. -1.html 파일에서 뷰포트를 1이 아니라 0.2정도로 수정해서 화면이 과하게 확대가 되는 것을 바로 잡았고, 뷰포트에 따라 작아진 컨텐츠 사이즈들의 크기를 3배로 키워서 잘 보이도록 처리했다.
```javascript
function device() {
    var mobileFlag = /Mobile|iP(hone|od)|Windows (CE|Phone)|Minimo|Opera M(obi|ini)|BlackBerry|Nokia/;
    //모바일일경우
    if (navigator.userAgent.match(mobileFlag) && !navigator.userAgent.match(/iPad/)) {
        return "Mobile";
    }
    //모바일 Device와 Android가 포함이 안되어 있을 경우
    else if (navigator.userAgent.match(/iPad|Android/)) {
        return "Tablet";
    }
    //그 외의 경우 모두 테블릿
    else {
        return "PC(Mobile, Tablet 외)";
    }
}
device();

// 삼성브라우저인지 아닌지 확인하고 맞으면 링크_1.html로 
function Browser() {
        var browser = navigator.userAgent.toLowerCase();
        if (browser.indexOf("samsungbrowser") != -1 || browser.indexOf("Samsungbrowser") != -1 ) {
            window.location.href = "링크_1.html";
            return "Samsung Browser";
        }
}
Browser();
```
-  <b>2022.12.19</b> 인클루드로 header랑 footer를 만들었는데 그 전까지 잘 작동이 되었던 click 이벤트가 작동이 되지 않았다. on click으로 바꿔도 작동이 되지 않았다. 알고보니 var windowW = $(window).width(); 라는 쓰이지 않는 변수가 있어서 그런거였다. 지워주니 작동이 잘 되었다.
   
   
