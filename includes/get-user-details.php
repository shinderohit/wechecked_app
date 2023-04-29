<?php

ob_start();
session_start();
$userCommand = array();
$success = false;
$loggedIn = false;
$error = true;
$itemCommand = array();
$listQty = array();

if ($_SESSION["user"]) {
    $success        = true;
    $loggedIn       = true;
    $error          = false;
    $itemCommand    = json_decode($_SESSION["user_cart"], true);
    $cartQty        = $_SESSION["user_cartQty"];
    $wishListQty    = $_SESSION["user_wishListQty"];

    $cartItems  = array();
    $cartItems  = json_decode($_SESSION["user_cart"], true);
    $items      = count($cartItems);
    $subtotal   = 0;
    for ($i = 0; $i <= $items; $i++) {
        if ($cartItems[$i]["title"]) {
            $totalQty = $cartItems[$i]["totqty"];
            $ItemPrice = $cartItems[$i]["mrp"];
            $totalPrice = round(($cartItems[$i]["totunit"] * $ItemPrice) / $cartItems[$i]["minqty"], 0);
            $subtotal = ($subtotal + ($totalPrice * $totalQty));
        }
    }
    $cartTotal = round($subtotal,0);
    $_SESSION["cartTotal"] = round($cartTotal,0);
}
header("Content-type: application\json");
$cartArray = array("success" => $success,
    "isLoggedIn" => $loggedIn,
    "error" => $error,
    "userName" => $_SESSION['userName'],
    "userMail" => $_SESSION['userMail'],
    "itemsCommand" => $itemCommand,
    "cartQty" => $cartQty,
    "wishListQty" => $wishListQty,
    "cartTotal" => $cartTotal
);
echo json_encode($cartArray);
?>