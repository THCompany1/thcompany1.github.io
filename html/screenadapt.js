// JavaScript Document
new function (){
var _self = this;
_self.width = 750;//设置默认最大宽度
_self.fontSize = 100;//默认字体大小
_self.changePage = function(){
var p = (document.documentElement.getBoundingClientRect().width)/_self.width;
	if(p<=1){
		document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+p*_self.fontSize+"px !important");
	}else{
		document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+1*_self.fontSize+"px !important");
	}
};
_self.changePage();
window.addEventListener("resize",function(){_self.changePage();},false);
};