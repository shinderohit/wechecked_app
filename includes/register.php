<?php

ob_start();
session_start();
require("dbconnect.php");
include ('function.php');

$eu=$_SESSION['user'];
$un=$_SESSION['userName'];
$uname = $_GET["uname"];
$email = $_GET["email"];
$password = $_GET["password"];
$success = true;
$loggedIn = false;
$error = true;
$maindb = "site_passmain";
$itemCommand = array();
$wisListCommand = array();

if($password !="" && $email !="" && $uname !="") {
    $checkregister = mysqli_query($conn, "SELECT * FROM `$maindb` WHERE `email` = '$email'") or die(mysqli_error($conn));
    if (mysqli_num_rows($checkregister) == 0) {
        mysqli_query($conn, "INSERT INTO `$maindb`(`srno`, `user`, `password`, `email`) VALUES
                                       ('','$uname','$password','$email')")or die(mysqli_error($conn));

        $register = mysqli_query($conn, "SELECT * FROM `$maindb` WHERE `email`='$email'")or die(mysqli_error($conn));

        $dtl = mysqli_fetch_object($register);

        $_SESSION['user'] = $email;
        $_SESSION['userName'] = $uname;
        $success = true;
        $loggedIn = true;
        $error = false;



        // /* User Cart Details */
        // $getUserCartDetails = mysqli_query($conn, "SELECT a.item, SUM(a.qty) AS totqty, 
        //     b.code, b.title, b.mrp, b.erp, b.smallimg FROM `carttran` a, `prodmain` b
        //                                WHERE a.item = b.code AND a.user='$email' GROUP BY a.item")or die(mysqli_error($conn));

        // $countCart = mysqli_query($conn, "SELECT SUM(qty) AS totqty FROM `carttran` WHERE user='$email'")or die(mysqli_error($conn));
        // $counter = mysqli_fetch_object($countCart);
        // $cartQty = $counter->totqty;

        // /* User Wish List Details */
        // $getUserWishListDetails = mysqli_query($conn, "SELECT a.item, SUM(a.qty) AS totqty, b.code, b.title, b.mrp, b.erp, b.smallimg FROM `wishlist` a,
        //                                   `prodmain` b WHERE a.item = b.code AND a.user='$email' GROUP BY a.item")or die(mysqli_error($conn));

        // $countWishList = mysqli_query($conn, "SELECT SUM(qty) AS totqty FROM `wishlist` WHERE user='$email'")or die(mysqli_error($conn));
        // $countList = mysqli_fetch_object($countWishList);
        // $listQty = $countList->totqty;


      /*  if (mysqli_num_rows($getUserCartDetails) > 0) {
            while ($items = mysqli_fetch_object($getUserCartDetails)) {
                $itemCommand[] = $items;
            }
            header("Content-type: application\json");
            $itemArray = $itemCommand;
            $_SESSION["user_cart"] = json_encode($itemArray);
            $_SESSION["user_cartQty"] = $cartQty;
        }

        if (mysqli_num_rows($getUserWishListDetails) > 0) {
            while ($listItems = mysqli_fetch_object($getUserWishListDetails)) {
                $wisListCommand[] = $listItems;
            }
            header("Content-type: application\json");
            $listArray = $wisListCommand;
            $_SESSION["user_wishList"] = json_encode($listArray);
            $_SESSION["user_wishListQty"] = $listQty;
        }*/
    }
}
header("Content-type: application\json");
$cartArray = array(
                    "success" => $success, 
                    "isLoggedIn" => $loggedIn, 
                    "error" => $error,
                    "userName" => $dtl->user, 
                    "itemsCommand" => $itemCommand, 
                    "cartQty" => $cartQty, 
                    "eu" => $eu, 
                    "un" => $un, 
                    "wishListQty" => $listQty
                   );
echo json_encode($cartArray);
?>