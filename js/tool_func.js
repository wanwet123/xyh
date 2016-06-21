//这个是工具函数库，因此可以整合进jquery文件中
function $$(id){
	return typeof id === 'string'?document.getElementById(id):id;
}
//事件绑定
function myAddEvent(obj,sEvent,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+sEvent,fn);
	}else if(obj.addEventListener){
		obj.addEventListener(sEvent,fn,false);
	}else{
		obj['on'+sEvent] = fn;
	}
}

//绝对居中模块
function ele_mid(obj){
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    w = w>640?640:w;
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var w1 = obj.offsetWidth,h1 = obj.offsetHeight;
    var c_l = parseInt((w-w1)/2),c_t = parseInt((h-h1)/2-10);
    obj.style.left=c_l+'px';
    obj.style.top=c_t+'px';
}





















