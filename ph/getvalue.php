<?php

require 'conn.php';
  if(isset($_GET['oldsid'])){
      $oldsid=$_GET['oldsid'];
      $result=$conn->query("select * from wrong where sid=$oldsid");
      echo json_encode($result->fetch_assoc());
  }