// 瀑布流
var list_mid = document.getElementById('list_mid');
var uls = list_mid.children;

for(var i = 0;i<=15;i++){
    appendLi();
}
function appendLi(){
    var oli = document.createElement('li');
    //取一个1-35之间的随机数
    var x = Math.ceil(Math.random()*16);
    var y = Math.ceil(Math.random()*1000);
    // oli.innerHTML = `<img src="images/${x}.png"/>`;
    oli.innerHTML = `<div>
						<img src="../images/list_mid_tp${x}.jpg" alt="">
						<p class="list_mid_p1">￥${y}.00</p>
						<p class="list_mid_p2">橙家全屋<span>装修</span>设计效果图家装施工服务</p>
						<p class="list_mid_p3">橙家装饰旗舰店</p>
						<ul class="list_mid_p4">
							<li>月成交 <span>${y}笔</span></li>
							<li>评价 <span>${y}</span></li>
							<li>
								<img src="../images/list_mid_tb.png" alt="">
							</li>
						</ul>
					</div>`
    // 获取到每一个ul的高度
    var ul1_h = uls[0].offsetHeight;
    var ul2_h = uls[1].offsetHeight;
    var ul3_h = uls[2].offsetHeight;
    var ul4_h = uls[3].offsetHeight;
    var ul4_h = uls[4].offsetHeight;
    // 用来存储拥有最小高度的ul标签
    var ulmin = null;
    // 比较出四个高度里面最小的高度是多少
    var minH = Math.min(ul1_h,ul2_h,ul3_h,ul4_h);
    for(var i = 0;i<uls.length;i++){
        if(uls[i].offsetHeight==minH){
            ulmin = uls[i];
        }
    }
    ulmin.appendChild(oli);
}
// 检测页面滚动条的变化
window.onscroll = function(){
    //文档卷上去的高度
    var wscrollTop = document.body.scrollTop ||document.documentElement.scrollTop;
    //浏览器窗口的高度
    var wH = document.documentElement.clientHeight;
    //文档的高度
    var docH = document.documentElement.offsetHeight;
    //剩余高度
    var m = docH-wH-wscrollTop;
    if(m<500){
        for(var i = 0;i<=15;i++){
            appendLi();
        }
    }
    // 瀑布流停止
    if(wscrollTop>10000){
        window.onscroll=null;
    }
}


// -----------右侧选项栏栏弹出-------------------------
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
