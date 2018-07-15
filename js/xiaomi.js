window.onload=init;
var i=1;
var dingshi;
var obj;


//页面加载完毕设置定时器
function init (){
	dingshi=window.setInterval("lunbo()",4000);
}

//列表和图片同步
function litong (){
	var lie=document.getElementById("li"+i);
	for (var j=1;j<=6;j++) {
		var alllie=document.getElementById("li"+j);
		alllie.style.backgroundColor="rgba(0,0,0,0.4)";
		alllie.style.borderColor="rgba(255,255,255,0.3)";
	}
	lie.style.backgroundColor="#fff";
	lie.style.backgroundColor="rgba(255,255,255,0.3)";
	lie.style.borderColor="rgba(0,0,0,0.4)";
}

//图片切换的程序
function lunbo() {
	i++;
	if(i>6) {
		i=1;
	}
	obj=document.getElementById("lunbo");
	obj.style.backgroundImage="url(img/xmad"+i+".jpg)";
	litong();
	return i;
}


//轮播图左右箭头
	var left = document.getElementById("lunbo-left");
	var right =document.getElementById("lunbo-right");
	//点左箭头
	function toleft () {
		var obj=document.getElementById("lunbo");
		window.clearInterval(dingshi);
		if (i==1) {
			i=6;
		} else{
			--i;
		}
		obj.style.backgroundImage="url(img/xmad"+i+".jpg)";
		litong();
		return i;
	}
	//点右箭头
	function toright() {
		var obj=document.getElementById("lunbo");
		window.clearInterval(dingshi);
		if (i==6) {
			i=1;
		} else{
			++i;
		}
		obj.style.backgroundImage="url(img/xmad"+i+".jpg)";
		litong();
		return i;
		
	}

//点击列表图片变化
function xianshitu (n,t) {
	var obj=document.getElementById("lunbo");
	i=n;
	obj.style.backgroundImage="url(img/xmad"+i+".jpg)";
	window.clearInterval(dingshi);
	litong();
	return i;
}

//搜索框焦点变色
//function bianse() {
//	var souri=document.getElementById("sou-right");
//	souri.style.borderColor="#FF6700";
//}
//function bianhui() {
//	var souri=document.getElementById("sou-right");
//	souri.style.borderColor="#E0E0E0";
//}
//搜索框hover变色
//function siover() {
//	var soule = document.getElementById("sl-in");
//	soule.style.borderColor="#b3b3b3";
//}
//function siout (){
//	var soule = document.getElementById("sl-in");
//	soule.style.borderColor="#E0E0E0";
//}
