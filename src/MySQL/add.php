


<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $met = isset($_GET['way']) ? $_GET['way'] : null;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;

    if($met=='+'){
        $conn->query("update shopcar set qty=qty+1 where id=$id");
    }
    if($met=='-'){
        if($qty<=0){
            $conn->query("delete from shopcar where id='$id'");
        }else{
            $conn->query("update shopcar set qty=qty-1 where id=$id");
        }
    }
    if($met=='x'){
        $conn->query("delete from shopcar where id='$id'");
    }
?>
