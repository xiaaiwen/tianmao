function ajax(url,fnSucc,fnFail){
	if(window.XMLHttpRequest){//非IE56
		var xhr=new XMLHttpRequest();
	}else{//IE56
		var xhr=new ActiveXObject("Microsoft.XMLHTTP");
	};
	// 2.与服务器建立连接
	xhr.open('get',url,true);
	// 3.发送给服务器
	xhr.send(null);//get请求参数为空或null
	// 4.接收数据
	xhr.onreadystatechange=function (){
		if (xhr.readyState==4) {//请求完成
			if (xhr.status==200) {//ok
				fnSucc(xhr.responseText)
			}else if(fnFail){
				fnFail();
			}else{
				alert(xhr.status);
			}
		};
	}	
}