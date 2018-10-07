//拖拽
$(function(){
	
	//btn的点击事件 show bar隐藏
	$('.tyxy_btn1').click(function(){
		$('tyxy').hide();	
	})
	
	//拖拽 show 鼠标按下
	$('#tyxy').mousedown(function(e){
		$(this).css('cursor','move');
		
		//获取div的位置
		var offset=$(this).offset();
		console.log(offset);
		//获取鼠标距离div不变的距离
		var x=e.pageX-offset.left;
		var y=e.pageY-offset.top;
		
		//鼠标按下移动事件
		$(document).mousemove(function(evt){
			//获取指定的距离
			var ll=evt.pageX-x;
			var tt=evt.pageY-y;
			console.log(ll+":"+tt);
			
			//判断边界
			if(ll<=0){
				ll=0
			}else if(ll>=$(document).width()-$('#tyxy').width()){
				ll=$(document).width()-$('#tyxy').width();
			}
			
			if(tt<=0){
				tt=0;
			}else if(tt>=$(document).height()-$('#tyxy').height()){
				tt=$(document).height()-$('#tyxy').height();
			}
			
			//给show 绑定移动的距离
			$('#tyxy').css({left:ll+'px',top:tt+'px'});
			
		
		})
	
	})
	
	//鼠标抬起
	$(document).mouseup(function(){
		//去掉小十字
		$('#show').css('cursor','default');
		//关闭鼠标移动事件
		$(this).off('mousemove');
	})
	


})


// 同意协议
$(function(){
	$('#tyxy').show(1000);
	$('.tyxy_btn1').click(function(){
		$('#tyxy').hide();
	})
	$('.tyxy_btn2').click(function(){
		$('#tyxy').hide();
	})
})