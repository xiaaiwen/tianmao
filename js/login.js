//登录验证
$(function(){
	$('body').on('click','#denglu',function(e){
        var $name=$('#user').val();
        var $pass=$('#pass').val();
        var $submit=$('#submit');
        $.ajax({
            type:'post',
            url:'register.php',
            data:{
                name:$name,
                pass:$pass,     
            },
            dataType:'json',
            beforeSend:function(){
                // 判断用户名是否为空
                if(!$name){
                    alert('请输入用户名');
                    //$tips.html('请输入用户名').fadeIn(500).delay(1500).fadeOut(500);
                    return false;
                }
                // 判断密码是否为空
                if(!$pass){
                    alert('请输入密码');
                    //$tips.html('请输入密码').fadeIn(500).delay(1500).fadeOut(500);
                    return false;
                }
                //判断密码输入的长度是否为6~15之间
                if($pass.length<6||$pass.length>15){
                    alert('请输入6~15位密码');
                    //$tips.html('请输入6~15位密码').fadeIn(500).delay(1500).fadeOut(500);
                    return false;
                }              
                alert("登录成功")
            },
            success:function(){
                alert('登录成功');
            },    
        })
    })
})