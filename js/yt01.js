//var s = document.createElement("script");
//s.type = "text/javascript";
//s.src = "https://headwork.github.io/dev2019/js/yt01.js";
//document.head.appendChild(s);

window._popSkip = window.open("", "test","width=100, height=100");

var strScrSkip = 'var yObj = {isDebug:false	\n'
+'		, interval:2000			\n'
+'		, isSkipTime : false	\n'
+'	};							\n'
+'var temp = function(pop) {											\n'
+'	var obj = {                                                                         \n'
+'		winOpener : null,                                                               \n'
+'		winPop : pop                                                                    \n'
+'	};                                                                                  \n'
+'	if(pop._objSkip != null && pop._objSkip.tid != null){                               \n'
+'		clearInterval(pop._objSkip.tid);                                                \n'
+'	}                                                                                   \n'
+'	pop._objSkip = {                                                                            \n'
+'		itemSelector : ".ytp-ad-skip-button-container button.ytp-ad-skip-button"                \n'
+'		, imageSelector : ".ytp-ad-overlay-container"                                           \n'
+'		, contSelector : ".ytp-ad-module"                                            			\n'
+'		, isCheck : false, isSkip : false                                                       \n'
+'	};                                                                                          \n'
+'	pop._objSkip.fnSkip = function() {                                                          \n'
+'		try {                                                                                   \n'
+'			if(!pop._objSkip.isCheck){                                                          \n'
+'				if (obj.winOpener == null) obj.winOpener = pop.opener;                          \n'
+'				var dom = obj.winOpener.document;                                               \n'
+'				if (dom == null) return;                                                        \n'
+'				pop._objSkip.cont = (dom.querySelectorAll(pop._objSkip.contSelector) || []);    \n'
+'			}                                                                                   \n'
+'			if (pop._objSkip.cont.length == 0 || pop._objSkip.cont[0].offsetHeight == 0) {   \n'
+'				if(pop._objSkip.isCheck){                                                       \n'
+'					pop._objSkip.mov = null;                                                    \n'
+'					pop._objSkip.img = null;                                                    \n'
+'					pop._objSkip.isCheck = false;                                               \n'
+'				}                                                                               \n'
+'				return ;                                                                        \n'
+'			}                                                                                   \n'
+'			if(!pop._objSkip.isCheck) {                                                         \n'
+'				pop._objSkip.isCheck = true;                                                    \n'
+'				pop._objSkip.mov = dom.querySelectorAll(pop._objSkip.itemSelector) || [];       \n'
+'				pop._objSkip.img = dom.querySelectorAll(pop._objSkip.imageSelector) || [];      \n'
+'				pop._objSkip.isSkip = false;                                                    \n'
+'			}                                                                                   \n'
+'			if(!pop._objSkip.isSkip){                                                           \n'
+'				if (pop._objSkip.mov.length > 0) {                                              \n'
+'					if(!yObj.isSkipTime && pop._objSkip.mov[0].offsetHeight == 0) return;                           \n'
+'					if(yObj.isDebug) console.log("fnSkipMov");                                                   \n'
+'					pop._objSkip.mov[0].click();                                                \n'
+'					pop._objSkip.isSkip = true;                                                 \n'
+'				}else if (pop._objSkip.img.length > 0) {                                        \n'
+'					if(yObj.isDebug) console.log("fnSkipImg");                                               	\n'
+'					pop._objSkip.img[0].style.display = "none";                             	\n'
+'					pop._objSkip.isSkip = true;                                             	\n'
+'				}else {                                                                         \n'
+'					pop._objSkip.isCheck = false;												\n'
+'				}                                                                               \n'
+'			}else if(dom == null){                                                              \n'
+'				pop._objSkip.isCheck = false;        							                \n'
+'			}                                                                                   \n'
+'		} catch (e) {                                                                           \n'
+'		}                                                                                       \n'
+'	}                                                                                           \n'
+'	pop._objSkip.tid = pop.setInterval(pop._objSkip.fnSkip, yObj.interval);                      \n'
+'	return obj;                                                                         \n'
+'};                                                                                    \n'
+'temp(this);                                                                           \n';



setTimeout(function() {
	window._popSkip.document.write('<sc'+'ript>'+strScrSkip+'</sc'+'ript>');
}, 1000);


