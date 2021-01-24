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
//		, imageSelector : ".ytp-ad-overlay-image"
		, imageSelector : ".ytp-ad-overlay-container"
		, contSelector : ".ytp-ad-module"
		, isCheck : false, isSkip : false
	};
	pop._objSkip.fnSkip = function() {
		try {
			if(!pop._objSkip.isCheck){
				if (obj.winOpener == null) obj.winOpener = pop.opener;
				var dom = obj.winOpener.document;
				if (dom == null) return;
				pop._objSkip.cont = (dom.querySelectorAll(pop._objSkip.contSelector) || []);
			}
			if (pop._objSkip.cont[0].length == 0 || pop._objSkip.cont[0].offsetHeight == 0) {
				if(pop._objSkip.isCheck){
					pop._objSkip.mov = null;
					pop._objSkip.img = null;
					pop._objSkip.isCheck = false;
				}
				return ;
			}
			if(!pop._objSkip.isCheck) {
				pop._objSkip.isCheck = true;
				pop._objSkip.isSkip = false;
				pop._objSkip.mov = dom.querySelectorAll(pop._objSkip.itemSelector) || [];
				pop._objSkip.img = dom.querySelectorAll(pop._objSkip.imageSelector) || [] ;
			}
			if(!pop._objSkip.isSkip){
				if (pop._objSkip.mov.length > 0 && pop._objSkip.mov[0].offsetHeight > 0) {
					console.log("fnSkipMov");
					pop._objSkip.mov[0].click();
					pop._objSkip.isSkip = true;
				}else if (pop._objSkip.img.length > 0) {
					console.log("fnSkipImg");
					pop._objSkip.img[0].style.display = "none";
					pop._objSkip.isSkip = true;
				}else{
					pop._objSkip.isCheck = false;
				}
			}else if(dom == null){
				pop._objSkip.isCheck = false;
			}
		} catch (e) {
		}
	}
	pop._objSkip.tid = pop.setInterval(pop._objSkip.fnSkip, 2000);
	return obj;
};
temp(this);
