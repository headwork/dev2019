var count = 0;
if(ytAdPath == null){
    var ytAdPath = opener.ytAdPath;
}
if(!_skip){
    var _skip = {
        isDebug : false
        , timeout : 3000
    };
    (function(){
        _skip.eleLog = null;
        let eleBtn01 = null;let eleBtn02 = null;let eleBtn03 = null;let eleBtn04 = null;

        let watch = {
            // 옵저버 설정 자식이 변경되는 경우
            config : {childList: true}

            // 옵저버 인스턴스 생성 
            , _mo : new MutationObserver(function(mutations) { 
                mutations.forEach(function(mutation) { 
                    console.log(mutation); 
                });
            })
            // 실행
            , observe : function(target){
                this._mo.observe(target, this.config);
            }
            // 제거
            , disconnect : function(){
                this._mo.disconnect();
            }
        }

        // 옵저버 
        _skip.getObserver = function (){
            return watch;
        }

        // 반복실행 멈춤
        _skip.fnStop = function (){
            if(_skip.interval){clearInterval(_skip.interval);}
        }

        // 모니터링 시작
        _skip.fnStart = function (){
            _skip.fnStop();
            _skip.fnLog("시작", true)
            _skip.fnAdSkip();
            _skip.interval = window.setInterval(_skip.fnSkip, _skip.timeout);
        }

        // 로그처리
        _skip.fnLog = function (strLog, blnDebug = false){
            if(!blnDebug && !_skip.isDebug) return;
            if(_skip.eleLog){
                let strTemp = _skip.eleLog.textContent;
                if(strTemp.length > 10000){
                    _skip.eleLog.textContent = (strLog) + "\n";
                }else{
                    _skip.eleLog.textContent = (strLog) + "\n" + strTemp;
                }
            }else{
                console.log(strLog);
            }
        }
        // 반복실행 멈춤
        let _queryAdObject = "button.ytp-ad-skip-button, button.ytp-ad-overlay-close-button";
        _skip.fnAdSkip = function(){
            var target = opener.document.querySelectorAll(_queryAdObject);
            if(target.length == 0) return;
            if(count>1000) count = 0;
            _skip.fnLog("광고제거[" + (++count) + "]", true);
            target.forEach(ele => {ele.click();});
        }

        let strScript = 'var s = document.createElement("script");'
                    + '\ns.type = "text/javascript";s.src = "http://127.0.0.1:5500/ytPopOpen.js";'
                    + '\ns.popWinName = "ytSkip22";    /* 팝업창명 */'
                    + '\ndocument.head.appendChild(s);';

        let ele = document.querySelector("textarea");
        if(!ele){
            document.write("<label>Youtube Log</label><br>");
            document.write('<button id="btn01">시작</button> <button id="btn02">멈춤</button> <button id="btn03">로그</button> <button id="btn04">정보</button><br>');
            document.write('<textarea id="ytLog" style="width:100%;height:200px;"></textarea>');

            _skip.eleLog = document.querySelector("#ytLog");
            eleBtn01 = document.querySelector("#btn01");    /* 시작 */
            eleBtn01.addEventListener("click", function(){_skip.fnStart();});
            eleBtn02 = document.querySelector("#btn02");    /* 멈춤 */
            eleBtn02.addEventListener("click", function(){_skip.fnStop();_skip.fnLog("멈춤", true);});
            eleBtn03 = document.querySelector("#btn03");    /* 로그 */
            eleBtn03.addEventListener("click", function(){_skip.isDebug = !_skip.isDebug;});
            eleBtn04 = document.querySelector("#btn04");    /* 정보 */
            eleBtn04.addEventListener("click", function(){_skip.fnLog(strScript, true)});
        }
    })();
}

// 감시 기능 추가
_skip.fnObserver = function (){
    var target = opener.document.querySelectorAll(".ytp-ad-module")[0];
    _skip.getObserver().observe(target);
}

_skip.fnCheck = function (){
    _skip.fnLog("로그 = " + count++);
}
_skip.fnSkip = function (){
    if(opener == null){
        _skip.fnLog("부모창이 없습니다.", true);
        _skip.fnStop();
        return;
    }
    
    _skip.fnAdSkip();
    // if(_skip.fnCheck){
    //     _skip.fnCheck();
    //     return;
    // }
    // _skip.fnLog("로그 = " + count++);
}

_skip.fnStart();

console.log(ytAdPath);
