var arJs = document.getElementsByTagName('script'); 
var strWinName = "ytSkip";

for (let i = 0; i < arJs.length; i++) {
    if((arJs[i].src+"").indexOf("ytPopOpen") > -1){
        if(arJs[i].popWinName){
            strWinName = arJs[i].popWinName;
        }
        console.log("src = " + arJs[i].popWinName);
        break;
    }
}

// 팝업창 생성 후 스크립트 추가 및 실행
window._popSkip = window.open("", strWinName,"width=500, height=300");

var fnScript = function(strBef, strAft){
    return strBef + "scr" + "ipt" + strAft;
}

var strScrSkip = "var s = document.createElement('" + fnScript("","") + "');"
    + "s.type = 'text/javascript';"
    + "s.src = 'http://127.0.0.1:5500/yt202203.js';"
    + "document.head.appendChild(s);"
;

setTimeout(function() {
	window._popSkip.document.write(fnScript("<", ">") + strScrSkip + fnScript("</", ">"));
    console.log("팝업창 오픈");
}, 1000);