<?php

ob_start();
error_reporting(E_ALL);
$con = mysqli_connect("localhost", "u712156057_ksuite2022",  "Km_Wecheck!may2022#$", "u712156057_ksuite") or die(mysqli_error($con));
// Check connection
if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}
?>