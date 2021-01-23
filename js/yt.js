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
		, imageSelector : ".ytp-ad-overlay-image"
		, contSelector : ".ytp-ad-overlay-container"
		, isCheck : false, isSkip : false
	};
	pop._objSkip.fnSkip = function() {
		if (obj.winOpener == null)
			obj.winOpener = pop.opener;
		try {
			var dom = obj.winOpener.document;
			if (dom == null) return;
			var v = (dom.querySelectorAll(pop._objSkip.contSelector) || []).length == 0;
			if (v) {
				if(pop._objSkip.isCheck){
					pop._objSkip.mov = null;
					pop._objSkip.img = null;
					pop._objSkip.isCheck = false;
				}
				return ;
			}
			if(!pop._objSkip.isCheck) {
				pop._objSkip.isCheck = true;
				pop._objSkip.mov = dom.querySelectorAll(pop._objSkip.itemSelector) || [];
				pop._objSkip.img = dom.querySelectorAll(pop._objSkip.imageSelector) || [] ;
				pop._objSkip.isSkip = false;
			}
			if(!pop._objSkip.isSkip){
				if (pop._objSkip.mov.length > 0 && pop._objSkip.mov[0].offsetHeight > 0) {
					console.log("fnSkipMov");
					pop._objSkip.mov[0].click();
					pop._objSkip.isSkip = true;
				}else{
					if (pop._objSkip.mov.length > 0) {
						console.log("fnSkipImg");
						pop._objSkip.img[0].style.display = "none";
						pop._objSkip.isSkip = true;
					}
				}
			}
		} catch (e) {
		}
	}
	pop._objSkip.tid = pop.setInterval(pop._objSkip.fnSkip, 5000);
	return obj;
};
temp(this);
