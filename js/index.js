// 轮播
var t = null;
var h = null;
var n = 0;
var s = 0;
var q = 0;
function lb(){	
var lbid = document.getElementById("lb");
var lbk = lbid.children;//0为轮播图片部分 1为下标部分
var albdiv = lbk[0].children;//轮播样式设置部分
var albli = lbk[1].children;//下标样式设置部分
var num = albdiv.length;
var timer = null;//下标悬浮事件结束延时开始执行轮播
s = n;//计算当前正在显示的图片下标
n = (n+1)%num;//计算当前应该操作的图片下标
    for (var i=0;i<albli.length;i++) {
    	albli[i].ind = i;
    	albli[i].onmouseover = function(){
    	clearTimeout(timer);
    	clearTimeout(h);
q = this.ind;
albli[n].className = " ";
albli[q].className = "xh-dq";
albdiv[n].style.display = "none";
albdiv[q].style.display = "block";
for (var f=0;f<albli.length;f++) {
albdiv[f].style.opacity = 1;
albdiv[f].style.zIndex = 0;
}
n = q;
timer = setInterval(function(){

},1000);
h=setTimeout(lb,1000);
    	}
   }
//下标样式操作
albli[s].className = " ";
albli[n].className = "xh-dq";

//一秒内操作
for (var i = 0;i<1000;i++) {
var op = albdiv[s].style.opacity;
var op2 = albdiv[n].style.opacity;
albdiv[s].style.opacity = (Number(op)*1000-1)/1000;
albdiv[n].style.opacity = (Number(op2)*1000+1)/1000;
}
albdiv[n].style.display = "block";
albdiv[n].style.zIndex = 2;
albdiv[s].style.display = "none";
//一秒后操作
t && clearInterval(t);
t = setInterval(function(){
albdiv[s].style.display = "none";
albdiv[s].style.opacity = 0;
albdiv[s].style.zIndex = 0;
albdiv[n].style.zIndex = 1;
t && clearInterval(t);    
        t = null;
},1000);
    h && clearTimeout(h);    
    h=setTimeout(lb,1000);
}
lb();


//轮播二级菜单 
// li1
$('.lbli1').mouseover(function(){
    $('.li1_a').css('color','#ff0036');
})
$('.lbli1').mouseout(function(){
    $('.li1_a').css('color','#fff');
})
// li2
$('.lbli2').mouseover(function(){
    $('.li2_a').css('color','blue');
})
$('.lbli2').mouseout(function(){
    $('.li2_a').css('color','#fff');
})
// li3
$('.lbli3').mouseover(function(){
    $('.li3_a').css('color','blue');
})
$('.lbli3').mouseout(function(){
    $('.li3_a').css('color','#fff');
})
// li4
$('.lbli4').mouseover(function(){
    $('.li4_a').css('color','#ff0036');
})
$('.lbli4').mouseout(function(){
    $('.li4_a').css('color','#fff');
})
// li5
$('.lbli5').mouseover(function(){
    $('.li5_a').css('color','blue');
})
$('.lbli5').mouseout(function(){
    $('.li5_a').css('color','#fff');
})
// li6
$('.lbli6').mouseover(function(){
    $('.li6_a').css('color','blue');
})
$('.lbli6').mouseout(function(){
    $('.li6_a').css('color','#fff');
})
// li7
$('.lbli7').mouseover(function(){
    $('.li7_a').css('color','#ff0036');
})
$('.lbli7').mouseout(function(){
    $('.li7_a').css('color','#fff');
})
// li8
$('.lbli8').mouseover(function(){
    $('.li8_a').css('color','#f7a831');
})
$('.lbli8').mouseout(function(){
    $('.li8_a').css('color','#fff');
})
// li9
$('.lbli9').mouseover(function(){
    $('.li9_a').css('color','#f7a831');
})
$('.lbli9').mouseout(function(){
    $('.li9_a').css('color','#fff');
})
// li10
$('.lbli10').mouseover(function(){
    $('.li10_a').css('color','blue');
})
$('.lbli10').mouseout(function(){
    $('.li10_a').css('color','#fff');
})
// li11
$('.lbli11').mouseover(function(){
    $('.li11_a').css('color','#ff0036');
})
$('.lbli11').mouseout(function(){
    $('.li11_a').css('color','#fff');
})
// li12
$('.lbli12').mouseover(function(){
    $('.li12_a').css('color','blue');
})
$('.lbli12').mouseout(function(){
    $('.li12_a').css('color','#fff');
})
// li13
$('.lbli13').mouseover(function(){
    $('.li13_a').css('color','#f7a831');
})
$('.lbli13').mouseout(function(){
    $('.li13_a').css('color','#fff');
})
// li14
$('.lbli14').mouseover(function(){
    $('.li14_a').css('color','#3bc7b0');
})
$('.lbli14').mouseout(function(){
    $('.li14_a').css('color','#fff');
})
// li15
$('.lbli15').mouseover(function(){
    $('.li15_a').css('color','#ff0036');
})
$('.lbli15').mouseout(function(){
    $('.li15_a').css('color','#fff');
})
// li16
$('.li16').mouseover(function(){
    $('.li16_a').css('color','#3bc7b0');
})
$('.li16').mouseout(function(){
    $('.li16_a').css('color','#fff');
})


// 选项卡
$(function(){
    $('.tmshop_xxk_head li').hover(function(){
        var i = $(this).index();
        $('.tmshop_xxk_head li').eq(i).addClass('color1').siblings().removeClass('color1');
        //方法一：
        // $('#con div').eq(i).show().siblings().hide();
        //方法二：
        $('.tmshop_xxk_con div').eq(i).addClass('show1').siblings().removeClass('show1');
    })
})


// 右侧选项栏栏弹出
var yanchi = setTimeout(function(){
    $('#select').fadeIn(20);
},500)
$('#select .select_content .hover').mouseenter(function(){
    // alert('das');
    var n = $(this).index();
    // console.log(n);
    $('#select .select_content .xian').eq(n).fadeIn(500);
}).mouseleave(function(){
    $('#select .select_content .xian').fadeOut(500);
})



// 楼层
$('#floor_btn .f_con .dh').click(function(){
    var index = $(this).index()-1;
    // console.log(index);
    // console.log($('#floor .loucen').eq(index).offset().top);
    var top=$('.loucen').eq(index).offset().top;
    $('html,body').animate({scrollTop:top},500);
})
var heights=[];
$('.loucen').each(function(){
    heights.push($(this).offset().top)
})
  
console.log(heights);

$(window).scroll(function(){
    var top = $(window).scrollTop();
    // console.log(top);
    var index;

    // 大于高度显示楼层栏
    if(top>1100){
        $('#floor_btn').fadeIn(1000);
    }else if(top<1100){
        $('#floor_btn').fadeOut(1000);
    }
    
    // 判断高度给楼层添加效果
    if(top>=heights[0]-200 && top<heights[1]-200){
        // 减200高度 ,是为了提前显示出内容
        $('#floor_btn .f_con .tmcs').css('background','#64C333');
    }else{
        $('#floor_btn .f_con .tmcs').css('background','');
    }

    if(top>=heights[1]-200 && top<heights[2]-200){
        $('#floor_btn .f_con .tmgj').css('background','#ff0036');
    }else{
        $('#floor_btn .f_con .tmgj').css('background','');
    }

    if(top>=heights[2]-200 && top<heights[3]-200){
        $('#floor_btn .f_con .mlrs').css('background','#EA5F8D');
    }else{
        $('#floor_btn .f_con .mlrs').css('background','');
    }

    if(top>=heights[3]-200 && top<heights[4]-200){
        $('#floor_btn .f_con .cdkw').css('background','#0AA6E8');
    }else{
        $('#floor_btn .f_con .cdkw').css('background','');
    }

    if(top>=heights[4]-200 && top<heights[5]-200){
        $('#floor_btn .f_con .jjsh').css('background','#64C333');
    }else{
        $('#floor_btn .f_con .jjsh').css('background','');
    }

    if(top>=heights[5]-200 && top<heights[6]-200){
        $('#floor_btn .f_con .dzac').css('background','#F15453');
    }else{
        $('#floor_btn .f_con .dzac').css('background','');
    }

    if(top>=heights[6]-200 && top<heights[7]-200){
        $('#floor_btn .f_con .hwcx').css('background','#19C8A9');
    }else{
        $('#floor_btn .f_con .hwcx').css('background','');
    }

    if(top>=heights[heights.length-1]-200){
        $('#floor_btn .f_con .cnxh').css('background','#ff0036');
    }else{
        $('#floor_btn .f_con .cnxh').css('background','');
    }

})


// 顶部搜索栏弹出
$(window).scroll(function(){
    var top = $(window).scrollTop();
    // console.log(top);
    if(top>800){
        $('#top_search').slideDown(500);
    }else{
        $('#top_search').slideUp(500);
    }
})
