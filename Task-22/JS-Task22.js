
window.onload = function(){
	var I = null;
	var list = [];
	var root = document.getElementById('root');
	var input = document.getElementsByTagName('input');
	input[0].onclick = function(){
		init(list);
		DLR(root);
		display(list);
	}
	input[1].onclick = function(){
		init(list);
		LDR(root);
		display(list);
	}
	input[2].onclick = function(){
		init(list);
		LRD(root);
		display(list);
	}
	//先序遍历
	function DLR(node){
		if(node != null){
			list.push(node);
			DLR(node.firstElementChild);
			DLR(node.lastElementChild);
		}
	}

	//中序遍历
	function LDR(node){
		if(node != null){
			LDR(node.firstElementChild);
			list.push(node);
			LDR(node.lastElementChild);
		}
	}

	//后序遍历
	function LRD(node){
		if(node != null){
			LRD(node.firstElementChild);
			LRD(node.lastElementChild);
			list.push(node);
		}
	}

	function init(data){
		clearInterval(I);
		list = [];
		var divs = document.getElementsByTagName('div');
		for(var i = 0;i < divs.length;i++){
			divs[i].style.backgroundColor = "#fff";
		}
	}

	function display(data){
		var n = 0;
		data[n].style.backgroundColor = '#3879d9';
		I = setInterval(function(){
			n++;
			if(n == data.length){
				clearInterval(I);
				data[n-1].style.backgroundColor = '#fff';
				return;
			}
			data[n].style.backgroundColor = '#3879d9';
			data[n-1].style.backgroundColor = '#fff';	
			console.log(data[n]);
		}, 1000);
		
	}
}
