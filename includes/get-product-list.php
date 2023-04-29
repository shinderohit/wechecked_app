<?php
require("dbconnect.php");
include ('function.php');
header('Content-Type: text/html; charset=utf-8');

$maindb= "product";
$brand = '';
$price = '';
$category = '';
$catqry = '';

if(!empty($_REQUEST["category"])){
	$catqry = 'AND `type`='.$_REQUEST['category'];
}


// mysqli_query($conn, "SET CHARACTER SET utf8"); 
$getProduct = mysqli_query($conn, "SELECT * FROM `$maindb` WHERE `code` !=''   $catqry  ORDER BY `code`")
			  or die(mysqli_error($conn));

$prodArray = array();
while($row = mysqli_fetch_assoc($getProduct)){
      $prodArray[] = $row;  
}

$productJson = json_encode($prodArray);
echo $productJson;
?>