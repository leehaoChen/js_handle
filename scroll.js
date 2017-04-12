// 查询窗口的滚动条的位置
function getScrollOffsets(w){
	//使用指定的窗口，如果不带参数则使用默认窗口
	w = w || window;
	//除了ie8之前的都能用
	if(w.pageXoffset != null) return {x:w.pageXoffset,y:w.pageYoffset}
	// 标准模式下的ie （或者任何浏览器）
	var d =  w.document;
	if(document.compatMode == "CSS1Compat")
	 	return {x:d.documentElement.scrollLeft,y:d.documentElement.scrollTop};
	//对于怪异模式下的浏览器
	return {x:d.body.scrollLeft,y:d.body.scrollTop} 		
}

// 查询窗口的视口尺寸（显示的尺寸）
function getViewportSize(w){
	//使用指定的窗口，如果不带参数则使用默认窗口
	w = w || window;
	//除了ie8之前的都能用
	if(w.innerWidth!=null)return {w:w.innerWidth,h:w.innerHeight};

	// 标准模式下的ie （或者任何浏览器）
	if(document.compatMode == "CSS1Compat")
	 	return {w:d.documentElement.clientWidth,h:d.documentElement.clientHeight};
	 //对于怪异模式下的浏览器
	return {w:d.body.clientWidth,h:d.body.clientHeight} 
}

// 获取元素的视口坐标 getBoundingClientRect() 包含边框和内边距 getClientRect() 获取换行的多个矩形行内元素 。

// 获取元素的文档坐标（兼容性为>=ie5）
function  getDocRect(e){
  var box = e.getBoundingClientRect();
  var offsets = getScrollOffsets();
  var x= box.left +offsets.x;
  var y=box.top+ offsets.y;
  var w=box.width||(box.right - box.left);
  var h=box.height ||(box.bottom - box.top)
  return{
  	x:x,y:y,w:w,h:w
  }
}
//滚动 scrollTo() scrollBy() scroll() scrollIntoView()

 
// 每一个元素拥有的属性           可视区域            文档区域
//文档坐标（实际大小 和坐标）    内容+内边距        内容+内边距
// offsetWith               clientWidth             scrollWidth
// offsetHeight             clientHeight            scrollHeight
// offsetLeft               clientLeft边框+滚动条   scrollLeft 滚动条的位置
// offsetTop                clientTop               scrollTop
// offsetParent 所相对的父元素




function getElementPosition(e){ /*获取文档坐标*/
	var x =0 ,y=0;
	while(e!=null){
		x+=e.offsetLeft
		y+=e.offsetTop
		e = e.offsetParent
	}
	return {x:x,y:y};
}
function getElementPos(elt){ /*获取视口坐标*/
	var x =0 ,y=0;
	for(var e=elt;e!=null;e=e.offsetParent){
		x+=e.offsetLeft;
		y+=e.offsetTop
	}
	for(var e=elt.parentNode;e!=null&&e.nodeType==1;e=e.parentNode){
		x-=e.scrollLeft
		y-=e.scrollTop
	}
	return {x:x,y:y}
}