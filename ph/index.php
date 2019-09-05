<?php
   require 'conn.php';
   $result=$conn->query("select * from wrong");//查看数据库
   $arrdata=array();

   for($i=0;$i<$result->num_rows;$i++){
       $arrdata[$i]=$result->fetch_assoc();
   }

   echo json_encode($arrdata);///(转成JSON格式)