<!--
register.php-->
<!--<?php
header('Content-Type:text/html;charset=utf-8');
// 服务端验证
//用户名必填校验
if($_POST['name']) {
//用户名是否存在校验
if($_POST['name'] != 'itcast'){
$arr = array(
    'code'=>10000,
	'msg'=>'登录成功!',
	'result'=>array('name'=>$_POST['name'])
);
}else{
$arr = array(
	'code'=>10001,
	'msg'=>'登录失败!',
	'result'=>array('name'=>$_POST['name'])
);
}
} else {
$arr = array(
	'code'=>10002,
	'msg'=>'登录失败！',
	'result'=>'一些信息'
);
}


echo json_encode($arr);


sleep(1);


?>-->