if(!hwCom){
    var hwCom = (
        function(){
            var _name = "hw module 2022.01";
            var _contextPath = null;
            var that = {};
            that.name = function(){return _name;};
            that.getContextPath = function(){
                if(_contextPath == null){
                    console.log(location.href);
                    var offset=location.href.indexOf(location.host)+location.host.length;
                    _contextPath=location.href.substring(offset,location.href.indexOf('/',offset+1));
                }
                return _contextPath;
            }
            return that;
        }
    )();
}
// console.log("hwCom.name = " + hwCom);
// console.log("hwCom.name = " + hwCom.name());
