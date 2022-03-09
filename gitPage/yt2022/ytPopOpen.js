var arJs = document.getElementsByTagName('script'); 
var strWinName = "ytSkip";

// 경로 확인
for (let i = 0; i < arJs.length; i++) {
    let itme = arJs[i];
    if((itme.src+"").indexOf("ytPopOpen") > -1){
        if(itme.popWinName) strWinName = itme.popWinName;
        if(ytAdPath == null) var ytAdPath = itme.src.substring(0, itme.src.indexOf("gitPage")-1);
        break;
    }
}

// 팝업창 생성
window._popSkip = window.open("", strWinName,"width=500, height=300");

// script 편집
var fnScript = function(strBef, strAft){
    return strBef + "scr" + "ipt" + strAft;
}

// 팝업창에 js 추가
var strScrSkip = "var s = document.createElement('" + fnScript("","") + "');"
    + "s.type = 'text/javascript';"
    + "s.src = '" +ytAdPath+ "/gitPage/yt2022/yt202203.js';"
    + "document.head.appendChild(s);"
;

// 한번만 실행
setTimeout(function() {
	window._popSkip.document.write(fnScript("<", ">") + strScrSkip + fnScript("</", ">"));
    console.log("팝업창 오픈");
}, 3000);