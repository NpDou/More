<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $id = isset($_GET['id']) ? $_GET['id'] : '';
    $name = isset($_GET['name']) ? $_GET['name'] : '';
    $url = isset($_GET['url']) ? $_GET['url'] : '';
    $oprice = isset($_GET['oprice']) ? $_GET['oprice'] : '';
    $nprice = isset($_GET['nprice']) ? $_GET['nprice'] : '';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '';
    $sendm = isset($_GET['sendm']) ? $_GET['sendm'] : '';
    $pinpai = isset($_GET['pinpai']) ? $_GET['pinpai'] : '';

    $sql = "select * from shopcar where id=$id";
    $res = $conn->query($sql);

    if($res->num_rows == 0){
        // 写入数据sql语句
        $sql = "insert into shopcar(id,name,url,oprice,nprice,qty,sendm,pinpai) values('$id','$name','$url','$oprice','$nprice','$qty','$sendm','$pinpai')";
        $res=$conn->query($sql);
        if($res){
            echo "yes";
        }else{
            echo "no";

        }
    }else{
        $res=$conn->query("update shopcar set qty=qty+$qty*1 where id=$id");
        if($res){
            echo "yes";
        }else{
            echo "no";

        }
    }
?>