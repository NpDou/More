<?php
    require('connect.php');

    $sql = "select * from shopcar";

    $res = $conn->query($sql);

    $row = $res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>