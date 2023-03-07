# 개발 및 일상 한줄 일기 (2022.12.03 ~ )

-  <b>2022.12.03</b> 이번주는 d3.js에 대해 공부를 했다.  
처음으로 스스로 데이터를 뿌렸다! 기념으로 어제 공부한 것에 대해 올리려고  
신나게 정리를 하고 있었는데 끝내고 보니까 12시가 넘어 있었다.. 
어이없게 1일 1커밋을 놓쳤다.. 내일부터는 진짜 1일 1커밋 도전..!!
-  <b>2022.12.06</b> 매주 화요일 목요일은 1시간 40분동안 발레 수업 듣는 시간!  
되도록 수업 전에 알고리즘 하나씩 풀어서 업로드 하자..!!
-  <b>2022.12.07</b> 기존에 d3.json(파일이름.json)으로 불러왔던 것을 fetch로 불러오도록 수정했다.  
데이터를 변환시키는 과정에서 해당 date에 대한 값이 없는 날에도 cost_price값을 0처리 해서 넣어야했다.   
if (!dateArr.includes(i))을 활용해서 <b>배열에 특정 값(기존 json 파일에 있던 date)이 포함되어 있지 않으면</b>  
배열에 해당 date값을 찾아서 cost_price 값을 0처리한걸 push하도록 처리했다.
-  <b>2022.12.10</b> 알고리즘 테스트 케이스가 다 맞아서 통과된줄 알았는데 제출 후 채점하기를 하니까 다 틀리다고 나왔다...  
이런 경우도 있구나.. 
-  <b>2022.12.16</b> 어제 삼성인터넷 브라우저에서 뷰포트때문에 문제가 생겼다.  
삼성브라우저가 '손가락으로 웹페이지 확대/축소' 기능이 켜져있으면 뷰포트가 확대가 되어서 생기는 문제였다.  
전에는 이 기능을 끄는 방법을 팝업으로 만들어서 넣는 방식으로 해결하였는데,  
이 방법이 불편하다는 말이 나와서 다른 방식으로 수정하게 되었다.  
html파일을 -1.html을 만들어서 해당 html링크에 들어왔을 때  
만약 브라우저가 삼성브라우저면 -1.html 파일로 넘어가도록 처리를해서 해결했다.  
-1.html 파일에서 뷰포트를 1이 아니라 0.2정도로 수정해서 화면이 과하게 확대가 되는 것을 바로 잡았고,  
뷰포트에 따라 작아진 컨텐츠 사이즈들의 크기를 3배로 키워서 잘 보이도록 처리했다.
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
-  <b>2022.12.19</b> 인클루드로 header랑 footer를 만들었는데  
그 전까지 잘 작동이 되었던 click 이벤트가 작동이 되지 않았다.  
on click으로 바꿔도 작동이 되지 않았다.  
알고보니 var windowW = $(window).width(); 라는 쓰이지 않는 변수가 있어서 그런거였다.  
지워주니 작동이 잘 되었다.
-  <b>2022.12.22</b> 알고리즘이 풀릴듯 말듯 안풀린다. 조금만 더 생각하면 풀릴거 같은데...머리 식히고 내일 다시 풀어봐야겠다.
-  <b>2022.12.23</b> 오늘 회사 사무실 이사했다. 자리 잘못뽑았다..ㅜㅜ
-  <b>2022.12.24</b> 크리스마스 이브🎄
-  <b>2022.12.28</b> 어제 커밋 푸시를 했는데 오늘 아침에 확인해보니까 커밋이 안되어 있었다.  
집에 와서 다시 커밋을 하니까 어제 날짜로 커밋이 잘 되었다.  
-  <b>2022.12.31</b> 2022년 마지막 날이다..!!  
2022년이 이제 1시간도 안남았다.
-  <b>2023.01.01</b> 2023년 1월 1일 시작!!
-  <b>2023.01.10</b> 도자기를 보러 갔다왔다.
-  <b>2023.01.12</b> flip book을 css로 구현했다.
-  <b>2023.01.22</b> 설날이다.
-  <b>2023.01.23</b> 쉬는날에는 시간이 빨리 지난다.
-  <b>2023.01.30</b> <model-viewer 옵션>  
auto-rotate : 360도 회전  
camera-orbit : 속도 및 카메라 각도 조절  
disable-zoom : 줌인 줌 아웃 막기
-  <b>2023.02.02</b> 브런치 실수를 했다.  
새 브런치를 만들어서 push해야하는데 습관적으로 main에다 push했다.  
금방 수습은 되었지만 다음부터는 이런 실수를 하지 않도록 조심해야겠다.  
다음부터는 수정하기 전에 git pull origin mai n명령어로  
먼저 수정된거 있는지 확인하고 수정하는 습관을 만들어야겠다.
-  <b>2023.02.03</b> electron에 jQuery 연결하는 방법  
main.js에서   
```javascript
new BrowserWindow({  
    webPreferences: {  
      nodeIntegration : true // 이거를 추가한다. 
    }  
})  
```
그리고  
```html
<script>if (typeof module === 'object') {window.module = module; module = undefined;};</script>
<script src="./src/js/jquery-3.6.3.min.js"></script>    
<script>if (window.module) module = window.module;</script>
```
을 사용한다.  
참고 링크1: https://itinerant.tistory.com/93  
참고 링크2: https://spadeworkdiary.tistory.com/4
-  <b>2023.02.06</b> 미세먼지가 심했다. 걸어왔더니 목이 칼칼하다.
-  <b>2023.02.08</b> 서버 세팅하는 법을 배웠다.(aws / putty / studio 3T)
-  <b>2023.02.16</b> 로그인 페이지 프론트 제대로 구현해보기 /  
input file 이미지 썸네일 처리  drag and drop으로 처리해보기
-  <b>2023.02.17</b> model-viewer에서 lighting처리 방법 : exposure="2"  
그림자 처리 방법 : shadow-intensity="1"  
숫자가 커질수록 빛과 그림자 강도가 강해진다. (0은 없는것)
-  <b>2023.02.17</b> 주말에 할일:  
1) 카페맵 removeclass('on')하면 마커 사라지게 처리
2) 웹북 만든거 기능 점검
3) 퍼즐도 기능 점검
-  <b>2023.02.20</b> 3D 모델 뷰어
```html
<model-viewer class="img3d" id="hotspot-camera-view-demo" src="파일이름.glb" animation-name="circle" ar ar-modes="webxr scene-viewer quick-look" auto-rotate camera-controls camera-orbit="auto 75deg auto" disable-zoom environment-image="neutral" shadow-intensity="1">    
     <button class="view-button hotspot-1" slot="hotspot-1" data-position="-0.1997m 2000.11766m 0.0056m" data-normal="150.4421014m 0.04410423m 0.8958802m" data-orbit="3.711166deg -180.3035deg 0.04335197m" data-target="-0.1879433m 2000.11766m -0.01563221m"></button>     
     <button class="view-button hotspot-5" slot="hotspot-5" data-position="400.1989m 1000.16711m -0.0749m" onclick="resetTurntableRotation();"></button>
</model-viewer>
```
```javascript
// data-position : 스팟 위치 조정  
// data-orbit: 보여지는 각도 deg deg m (가운데 deg가 -면 윗면이 보이고, 그냥이면 숫자가 커질수록 아랫면이 포커스 된다.)
// data-target: 카메라 각도
// onclick="resetTurntableRotation() : 카메라 각도 초기화
<script>
    const modelViewer2 = document.querySelector("#hotspot-camera-view-demo");
    const annotationClicked = (annotation) => {
        let dataset = annotation.dataset;
        modelViewer2.cameraTarget = dataset.target;
        modelViewer2.cameraOrbit = dataset.orbit;
        modelViewer2.fieldOfView = '45deg';
    }

    modelViewer2.querySelectorAll('button').forEach((hotspot) => {
        hotspot.addEventListener('click', () => annotationClicked(hotspot));
    });
</script>
```
-  <b>2023.02.20</b> 깃허브 연결 오류 문제  
제어판 > 사용자 계정 > 자격 증명 관리자 > windows 자격 증명에 가서 회사 깃허브 말고 다른 계정으로 연결되어 있는 깃허브를 삭제한다.  
비주얼 스튜디오 코드를 다시 시작한다.
-  <b>2023.02.20</b> yarn add(npm install) / yarn run(npm start)
-  <b>2023.02.24</b> 주말에 할일:바닐라 자바스크립트로 슬라이더 만들기/ 퍼즐 drag & drop 만들기/ flip book 제이쿼리로 된거 자바스크립트로 바꾸기 
-  <b>2023.02.25</b> 조개구이 맛있다🦪
-  <b>2023.02.28</b> 내일 할일: 바닐라 자바스크립트로 슬라이더/페이징/input file 여러개 썸네일 나오게 처리/  (+ 개인 프로젝트 )
-  <b>2023.03.02</b> 동적으로 생성된 div에 addEventListener 클릭 이벤트 (--> 퍼블리싱 폴더에 썸네일 multi input file이랑 같이 있음)
```javascript
let  = document.querySelectorAll("#thumbWrap .thumb .xBtn");
 document.addEventListener('click',function(e){
    if(e.target && e.target.className== 'xBtn'){
        e.target.closest(".thumb").remove();
    }
}); 
```
-  <b>2023.03.03</b> 특정 시간동안 해당 이벤트 없을 시 새로고침 
```javascript
// 2분동안 click 이벤트 없으면 화면 새로고침
let noclick  = window.addEventListener('click', function (e) { 
    if (noclick) { 
        clearTimeout(noclick); 
    } 
    noclick = setTimeout(function() { 
        location.reload(); // location.reload(false);랑 같은 뜻. 새로고침시 클라이언트 캐쉬에서 불러온다.
        //location.reload(true); // 이렇게 하면 페이지 새로고침시 서버에서 불러온다.
    }, 120000); 
});
```
-  <b>2023.03.07</b> javascript에서 :not()사용법
```javascript
var elements = document.querySelectorAll(
    'ul li:not([style*="display:none"]):not([style*="display: none"])'
);
```
```html
<ul>
    <li style="display:none;">1</li>
    <li>2</li>
    <li style="display:none;">3</li>
    <li>4</li>
</ul>
```
