/*arrayObj. push([item1 [item2 [. . . [itemN ]]]]);将一个或多个新元素添加到数组结尾，并返回数组新长度
arrayObj.unshift([item1 [item2 [. . . [itemN ]]]]);将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度
arrayObj.pop(); 移除最后一个元素并返回该元素值
arrayObj.shift(); 移除最前一个元素并返回该元素值，数组中元素自动前移*/

//ie事件兼容性设置
var eventUtil={
         	// 添加句柄
         	addHandler:function(element,type,handler){
               if(element.addEventListener){
                 element.addEventListener(type,handler,false);
               }else if(element.attachEvent){
                 element.attachEvent('on'+type,handler);
               }else{
                 element['on'+type]=handler;
               }
         	}
}


var num=[];
var btnlist=document.getElementsByTagName('input');
var flag=true;
//按钮绑定事件
function btn(){
	eventUtil.addHandler(btnlist[1],'click',leftin);
	eventUtil.addHandler(btnlist[2],'click',rightin);
	eventUtil.addHandler(btnlist[3],'click',leftout);
	eventUtil.addHandler(btnlist[4],'click',rightout);
	eventUtil.addHandler(btnlist[5],'click',function(){
		var time=btnlist[6].value;
		if(isNaN(time)){
			alert("请输入数字！");
			return;
		}
		else{
			bubbleSort(time);
		}		
	});
	eventUtil.addHandler(btnlist[7],'click',random);
	/*btnlist[1].addEventListener('click',leftin);
	btnlist[2].addEventListener('click',rightin);
	btnlist[3].addEventListener('click',leftout);
	btnlist[4].addEventListener('click',rightout);
	btnlist[5].addEventListener('click',function(){
		var time=btnlist[6].value;
		if(isNaN(time)){
			alert("请输入数字！");
			return;
		}
		else{
			bubbleSort(time);
		}		
	});
	btnlist[7].addEventListener('click',random);
*/
}
//把相应值显示在容器中
function output(){
	var container=document.getElementById('container');
	container.innerHTML="";
	for(var i=0;i<num.length;i++){
		container.innerHTML += "<div>"+num[i]+"</div>";
		var odiv=container.getElementsByTagName('div')[i];
		/*odiv.style.height=num[i]*3+'px';*/
		odiv.style.marginTop=300-num[i]*3+'px';
		odiv.style.paddingTop=num[i]*3-14+'px';		
	}
}
//左边添加
function leftin(){
	if(!flag){
		alert("正在排序！");
		return;
	}
	var txt=btnlist[0].value;
	//isNAN()判断是否为数字，是数字返回false
	//同时判断是否为10-100
	if(!isNaN(txt) && txt>=10 && txt<=100){
		if(num.length == 60){
			alert("最多输入60个数字！");
			return;
		}
		num.unshift(txt);
		output();
		return;		
	}
	alert("请输入数字0-100！");
}
//右边添加
function rightin(){
	if(!flag){
		alert("正在排序！");
		return;
	}
	var txt=btnlist[0].value;
	if(!isNaN(txt) && txt>=10 && txt<=100){
		if(num.length == 60){
			alert("最多输入60个数字！");
			return;
		}
		else{
			num.push(txt);
			output();
		}		
	}
	else{
		alert("请输入数字0-100！");
		return;
	}	
}
//左边删除
function leftout(){
	if(!flag){
		alert("正在排序！");
		return;
	}
	var front=num.shift();
	alert("左侧出的数字为："+front);
	output();
}
//右边删除
function rightout(){
	if(!flag){
		alert("正在排序！");
		return;
	}
	var behind=num.pop();
	alert("右侧出的数字为："+behind);
	output();
}
//冒泡算法排序
function bubbleSort(e){
	if(isNull(num)){		
		return;
	}
	if(!flag){
		alert('正在排序！');
		return;
	}
	var temp = null;
	var len = num.length;
	/*for(var i = 0;i < len;i++){
		for(var j = 0;j < len-1-i;j++){
			if(num[j+1] < num[j]){
				temp=num[j];
				num[j]=num[j+1];
				num[j+1]=temp;
				output();
			}
		}
	}*/
	var i=0;
	var j=0;
	flag=false;
	clearInterval(time);
	var time=setInterval(function(){	
		if(j == len-1-i){
			i++;
			j=0;
		}
		if(i == len-1){
			flag=true;
			clearInterval(time);
			return;
		}
		if(num[j+1] < num[j]){
			temp=num[j];
			num[j]=num[j+1];
			num[j+1]=temp;
			output();
		}
		j++;
	},e);
	
}
function random(){
	if(!flag){
		alert("正在排序！");
		return;
	}
	for(var i=0;i<60;i++){
		var x=Math.round(Math.random()*90) + 10;
		num[i]=x;
	}
	output();	
}

function isNull(num){
	for(var i = 0; i < num.length; i++){
		num[i] != null;
		return false;
	}
	return true;
}
window.onload=function(){
	btn();
}

