//var s = document.createElement("script");
//s.type = "text/javascript";
//s.src = "https://headwork.github.io/dev2019/js/yt01.js";
//document.head.appendChild(s);

window._popSkip = window.open("", "test","width=100, height=100");

var strScrSkip = 'var temp = function(pop) {											\n'
+'	var obj = {                                                                         \n'
+'		winOpener : null,                                                               \n'
+'		winPop : pop                                                                    \n'
+'	};                                                                                  \n'
+'	if(pop._objSkip != null && pop._objSkip.tid != null){                               \n'
+'		clearInterval(pop._objSkip.tid);                                                \n'
+'	}                                                                                   \n'
+'	pop._objSkip = {                                                                    \n'
+'		itemSelector : ".ytp-ad-skip-button-container button.ytp-ad-skip-button"        \n'
+'	};                                                                                  \n'
+'	pop._objSkip.fnSkip = function() {                                                  \n'
+'		console.log("fnSkip11");                                                        \n'
+'		if (obj.winOpener == null)                                                      \n'
+'			obj.winOpener = pop.opener;                                                 \n'
+'		try {                                                                           \n'
+'			var dom = obj.winOpener.document;                                           \n'
+'			if (dom == null)                                                            \n'
+'				return;                                                                 \n'
+'			var v = dom.querySelectorAll(pop._objSkip.itemSelector);                    \n'
+'			if (v != null && v.length > 0 && v[0].offsetHeight > 0) {                   \n'
+'				console.log("fnSkip");                                                  \n'
+'				v[0].click();                                                           \n'
+'			}                                                                           \n'
+'		} catch (e) {                                                                   \n'
+'		}                                                                               \n'
+'	}                                                                                   \n'
+'	pop._objSkip.tid = pop.setInterval(pop._objSkip.fnSkip, 5000);                      \n'
+'	return obj;                                                                         \n'
+'};                                                                                    \n'
+'temp(this);                                                                           \n';
setTimeout(function() {
	window._popSkip.document.write('<sc'+'ript>'+strScrSkip+'</sc'+'ript>');
}, 1000);


