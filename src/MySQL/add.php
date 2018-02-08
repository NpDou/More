


<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $id = isset($_GET['id']) ? $_GET['id'] : '3';
    $met = isset($_GET['way']) ? $_GET['way'] : 'add';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '12';

    if($met=='+'){
        $qty=$qty*1+1;
    }
    if($met=='-'){
        $qty=$qty*1-1;
        if($qty<=0){
            $conn->query("delete from shopcar where id='$id'");
        }
    }
    if($met=='x'){
        $conn->query("delete from shopcar where id='$id'");
    }
        // $sql = "select * from shopcar where id=$id";
    // $res = $conn->query($sql); 

    // $row = $res->fetch_assoc();
    // $num =$row['qty']*1+1;
    // $result=$conn->query("updata shopcar set qty='$qty' where id='$id'");
    // @mysql_query($result) or die( '修改出错：' .mysql_error());
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);   
?>
