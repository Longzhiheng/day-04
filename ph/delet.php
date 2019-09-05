<?php
require 'conn.php';
  if(isset($_POST['deletValeu'])){
      $sid=$_POST['deletValeu'];
      $conn->query("delete from wrong where sid=$sid");
  }
