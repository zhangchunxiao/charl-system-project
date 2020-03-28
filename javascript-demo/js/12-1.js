window.onload = function(){
	imgLoc("container","box");
	var imgData={
		"data":[
			{"src":"doctor02.jpg"},
			{"src":"doctor01.jpg"},
			{"src":"doctor02.jpg"}
		]
	}
	window.onscroll =function(){
		if(checkFlag()){
			var cparent=document.getElementById("container");
			for(var i=0;i<imgData.data.length;i++){
				var ccontent=document.createElement("div");
				ccontent.className="box";
				cparent.appendChild(ccontent);
				var boximg=document.createElement("div");
				boximg.className="box_img";
				ccontent.appendChild(boximg);
				var img=document.createElement("img");
				img.src="../img/"+imgData.data[i].src;
				boximg.appendChild(img);
			}
			imgLoc("container","box");
		}
	}
}
function checkFlag(){
	var cparent = document.getElementById("container");
	var ccontent = getChildElement(cparent,"box");
	var lastContentHeight= ccontent[ccontent.length-1].offsetTop;//据顶部的距离
	//console.log(lastContentHeight);
	var scrollTop=document.documentElement.screenTop||document.body.scrollTop;
	//console.log(scrollTop);
	var pageHeight =document.documentElement.clientHeight||document.body.clientHeight;
	//console.log(lastContentHeight+":"+scrollTop+":"+pageHeight);
	if(lastContentHeight<scrollTop+pageHeight){
		return true;
	}
}
function imgLoc(parent,content){
	//将parent下content内容全部取出来
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	//console.log(ccontent.length);
	//console.log(ccontent[0]);
	var imgWidth = ccontent[0].offsetWidth;
	//var cols= Math.floor(document.documentElement.clientWidth / imgWidth);
	var num = Math.floor(document.documentElement.clientWidth / imgWidth);
	cparent.style.cssText = "width:"+imgWidth*num+"px;margin:0 auto auto";
	
	var BoxHeightArr=[];
	for(var i=0; i<ccontent.length;i++){
		//BoxHeightArr[i]=ccontent[i].offsetHeight;
		//console.log(BoxHeightArr[i]);
		if(i<num){
			BoxHeightArr[i]=ccontent[i].offsetHeight;
			//console.log(BoxHeightArr[i]);
		}else{
			var minheight = Math.min.apply(null,BoxHeightArr);
			//console.log(minheight);
			var minIndex=getMinHeight(BoxHeightArr,minheight);
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top= minheight+"px";
			ccontent[i].style.left= ccontent[minIndex].offsetLeft+"px";
			BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
		}
	}
}
//找到最小高度的位置
function getMinHeight(BoxHeightArr,minHeight){
		for(var i in BoxHeightArr){
			if(BoxHeightArr[i]==minHeight){
				return i;
			}
		}
}

function getChildElement(parent,content){
	//储存child
	var contentArr= [];
	var allcontent= parent.getElementsByTagName("*");//通过父集得到所有内容
	for(var i=0; i<allcontent.length;i++){
		if(allcontent[i].className==content){
			contentArr.push(allcontent[i]);//最小高度
		}
	}
	return contentArr;
}