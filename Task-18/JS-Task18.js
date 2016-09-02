/*arrayObj. push([item1 [item2 [. . . [itemN ]]]]);将一个或多个新元素添加到数组结尾，并返回数组新长度
arrayObj.unshift([item1 [item2 [. . . [itemN ]]]]);将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度
arrayObj.pop(); 移除最后一个元素并返回该元素值
arrayObj.shift(); 移除最前一个元素并返回该元素值，数组中元素自动前移*/
var num=[];
var btnlist=document.getElementsByTagName('input');
//按钮绑定事件
function btn(){
	btnlist[1].addEventListener('click',leftin);
	btnlist[2].addEventListener('click',rightin);
	btnlist[3].addEventListener('click',leftout);
	btnlist[4].addEventListener('click',rightout);
}
//把相应值显示在容器中
function output(){
	var container=document.getElementById('container');
	container.innerHTML="";
	for(var i=0;i<num.length;i++){
		container.innerHTML += "<div>"+num[i]+"</div>";
	}
}
//左边添加
function leftin(){
	var txt=btnlist[0].value;
	//isNAN()判断是否为数字，是数字返回false
	if(!isNaN(txt)){
		num.unshift(txt);
		output();
	}
	else{
		alert("请输入数字！");
		return;
	}	
}
//右边添加
function rightin(){
	var txt=btnlist[0].value;
	if(!isNaN(txt)){
		num.push(txt);
		output();
	}
	else{
		alert("请输入数字！");
		return;
	}	
}
//左边删除
function leftout(){
	var front=num.shift();
	alert("左侧出的数字为："+front);
	output();
}
//右边删除
function rightout(){
	var behind=num.pop();
	alert("右侧出的数字为："+behind);
	output();
}

window.onload=function(){
	btn();
}

