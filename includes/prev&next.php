<?php
if ($addflag !=1) {
    $compare1 = mysqli_query($con, "SELECT MIN($keyfld) AS mincode FROM `$maindb` WHERE $keyfld !='' $keycond LIMIT 0,1 ") or die(mysqli_error($con));
    $fincode1 = mysqli_fetch_object($compare1);

    if ($qvouch > $fincode1->mincode) {
        $chkqry = mysqli_query($con, "SELECT $keyfld FROM `$maindb` WHERE $keyfld < $qvouch $keycond ORDER BY $keyfld DESC LIMIT 0,1 ") or die(mysqli_error($con));
        $chkcode = mysqli_fetch_object($chkqry);
        $prevvouch = $chkcode->$keyfld;
        
        $pdisabled = '';
    } else {
        $prevvouch = $qvouch;
        $pdisabled1 = 'disabled';
    }
    
    
    $compare2 = mysqli_query($con, "SELECT MAX($keyfld) AS maxcode FROM `$maindb` WHERE $keyfld !='' $keycond LIMIT 0,1 ") or die(mysqli_error($con));
    $fincode2 = mysqli_fetch_object($compare2);

    if ($qvouch < $fincode2->maxcode) {
        $chkqryn = mysqli_query($con, "SELECT $keyfld FROM `$maindb` WHERE $keyfld > $qvouch $keycond ORDER BY $keyfld LIMIT 0,1 ") or die(mysqli_error($con));
        $chkcoden = mysqli_fetch_object($chkqryn);
        $nextvouch = $chkcoden->$keyfld;
 
        $ndisabled = '';
    } else {
        $nextvouch = $qvouch;
        $ndisabled1 = 'disabled';
    }
}

?>