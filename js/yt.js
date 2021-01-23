alert(1);
var temp = function(pop) {
	var obj = {
		winOpener : null,
		winPop : pop
	};
	if(pop._objSkip != null && pop._objSkip.tid != null){
		clearInterval(pop._objSkip.tid);
	}
	pop._objSkip = {
		itemSelector : ".ytp-ad-skip-button-container button.ytp-ad-skip-button"
	};
	pop._objSkip.fnSkip = function() {
		if (obj.winOpener == null)
			obj.winOpener = pop.opener;
		try {
			var dom = obj.winOpener.document;
			if (dom == null)
				return;
			var v = dom.querySelectorAll(pop._objSkip.itemSelector);
			if (v != null && v.length > 0 && v[0].offsetHeight > 0) {
				console.log("fnSkip");
				v[0].click();
			}
		} catch (e) {
		}
	}
	pop._objSkip.tid = pop.setInterval(pop._objSkip.fnSkip, 5000);
	return obj;
};
temp(this);
