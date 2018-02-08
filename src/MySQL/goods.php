<?php
    require('connect.php');
    // 获取前端数据
    $class = isset($_GET['class']) ? $_GET['class'] : null;
    $hot = isset($_GET['hot']) ? $_GET['hot'] : null;

    // 编写sql语句
    $sql = "select * from goods where";


    // 根据分类改变sql语句
    if($class){
        $sql .= " class='$class' and"; 
    }
    if($hot){
        $sql .= " hot='$hot' and"; 
    }

    $sql .= ' 1=1';


    // 查询sql语句
    // 得到查询结果集合（对象）
    $res = $conn->query($sql);

    // 使用查询结果集
    // 得到一个数组
    $row = $res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>