<?php



require 'conn.php';//链接数据库
 if(isset($_POST['check'])){
    $title=$_POST['Rtitle'];
    $showhy=$_POST['Rshowhy'];
    $way=$_POST['Rway'];
    ///添加到数据库中
    $conn->query("insert wrong values(null,'$title','$showhy','$way',NOW())");
 }
