<?php

require 'conn.php';
if(isset($_POST['upsid'])){
    $upsid=$_POST['upsid'];
    $uptitle=$_POST['uptitle'];
    $upshowhy=$_POST['upshowhy'];
    $upway=$_POST['upway'];
    echo  $upsid. $uptitle. $upshowhy. $upway;
    $conn->query("update wrong set title='$uptitle',showhy='$upshowhy',way='$upway', data=NOW() where sid=$upsid");
}