var arJs = document.getElementsByTagName('script'); 
var strWinName = "ytSkip";

for (let i = 0; i < arJs.length; i++) {
    let itme = arJs[i];
    if((itme.src+"").indexOf("ytPopOpen") > -1){
        if(itme.popWinName){
            strWinName = itme.popWinName;
        }
        console.log("src = " + itme.popWinName);
        console.log("src = " + itme.src);
        location.href.substring(0,22);
        if(ytAdPath == null){
            var ytAdPath = itme.src.substring(0, itme.src.indexOf("gitPage"));
        }
        break;
    }
}
if(ytAdPath == null){
    var ytAdPath = contextPath;
}
console.log("location.href = " + location.href);
console.log("ytAdPath = " + ytAdPath);

// 팝업창 생성 후 스크립트 추가 및 실행
window._popSkip = window.open("", strWinName,"width=500, height=300");

var fnScript = function(strBef, strAft){
    return strBef + "scr" + "ipt" + strAft;
}

var strScrSkip = "var s = document.createElement('" + fnScript("","") + "');"
    + "s.type = 'text/javascript';"
    + "s.src = '" +ytAdPath+ "/gitPage/yt2022/yt202203.js';"
    + "document.head.appendChild(s);"
;

setTimeout(function() {
	window._popSkip.document.write(fnScript("<", ">") + strScrSkip + fnScript("</", ">"));
    console.log("팝업창 오픈");
}, 1000);