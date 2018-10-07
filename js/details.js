// 放大镜
$(function(){
	//small中的鼠标移动事件
	$('#small').mousemove(function(e){
		//move big 显示
		$('#move,#big').show();
		
		//获取鼠标的坐标
		var x=e.pageX-$(this).offset().left;
		var y=e.pageY-$(this).offset().top;
		// console.log(x+":"+y);
		//鼠标要居中-宽高一半
		var x=x-$('#move').width()/2;
		var y=y-$('#move').height()/2;
		
		//判断x y 的边界
		if(x<=0){
			x=0
		}else if(x>=$('#small').width()-$('#move').width()){
			x=$('#small').width()-$('#move').width()
		}
		
		if(y<=0){
			y=0;
		}else if(y>=$('#small').height()-$('#move').height()){
			y=$('#small').height()-$('#move').height()
		}
				
		//绑定给move
		$('#move').css({left:x,top:y});
		
		//大图和小图 比例关系
		var scale= $('#big>img').width()/$('#small>img').width();
		// console.log(scale);
		//设置大图移动
		$('#big>img').css({left:-x*scale,top:-y*scale});
		//改变大图
		$('#big>img').attr('src',$('#small_pic').attr('src'));
	
	}).mouseout(function(){
		//move big 隐藏
		$('#move,#big').hide();
	});
	
	//鼠标悬浮更换图片

	$('.hover li').eq(0).hover(function(){
		//给small中img图片=当前的img src
		// $('.hover img').attr('src',$(this).attr('src'));
		// var index = $(this).index();
		console.log('dsa');
		$('#small img').attr('src','../images/det_fdj_tp1.jpg');
		$('#big img').attr('src','../images/det_fdj_tp1.jpg');
	})
	$('.hover li').eq(1).hover(function(){
		//给small中img图片=当前的img src
		// $('.hover img').attr('src',$(this).attr('src'));
		// var index = $(this).index();
		console.log('dsa');
		$('#small img').attr('src','../images/det_fdj_tp2.jpg');
		$('#big img').attr('src','../images/det_fdj_tp2.jpg');
	})
	$('.hover li').eq(2).hover(function(){
		//给small中img图片=当前的img src
		// $('.hover img').attr('src',$(this).attr('src'));
		// var index = $(this).index();
		console.log('dsa');
		$('#small img').attr('src','../images/det_fdj_tp3.jpg');
		$('#big img').attr('src','../images/det_fdj_tp3.jpg');
	})
	$('.hover li').eq(3).hover(function(){
		//给small中img图片=当前的img src
		// $('.hover img').attr('src',$(this).attr('src'));
		// var index = $(this).index();
		console.log('dsa');
		$('#small img').attr('src','../images/det_fdj_tp4.jpg');
		$('#big img').attr('src','../images/det_fdj_tp4.jpg');
	})
	$('.hover li').eq(4).hover(function(){
		//给small中img图片=当前的img src
		// $('.hover img').attr('src',$(this).attr('src'));
		// var index = $(this).index();
		console.log('dsa');
		$('#small img').attr('src','../images/det_fdj_tp5.jpg');
		$('#big img').attr('src','../images/det_fdj_tp5.jpg');
	})
})

// 猜你喜欢
// var det_cnxh = document.getElementsByClassName('det_cnxh');
// console.log(det_cnxh);
// var lis = det_cnxh.children;

// appendLi();
// function appendLi(){
//     var oli = document.createElement('li');
//     //取一个1-35之间的随机数
//     var x = Math.ceil(Math.random()*8);
//     oli.innerHTML = `<img src="../images/det_cnxh_tp${x}.jpg"/>`;
//     // det_cnxh.appendChild(oli);
// }


// -----------右侧选项栏栏弹出-------------------------
var yanchi = setTimeout(function(){
    $('#rights').fadeIn(20);
},500)
$('#rights .select_content .hover').mouseenter(function(){
    // alert('das');
    var n = $(this).index();
    // console.log(n);
    $('#rights .select_content .xian').eq(n).fadeIn(500);
}).mouseleave(function(){
    $('#rights .select_content .xian').fadeOut(500);
})
