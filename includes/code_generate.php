<?php



 $searchdisabled    ='';

 $adddisabled       ='';

 $editdisabled      ='';

 $savedisabled      ='';

 $deletedisabled    ='';

 $printdisabled     ='';

 $canceldisabled    ='';

 $pdisabled         ='';

 $ndisabled         ='';

 

if (isset($_GET["mode"])) {

    $mode = $_GET["mode"];

    if ($mode == "true") {

        $addflag = 1;

        $gen1 = mysqli_query($conn, "SELECT MAX(code) AS maxcode FROM `$maindb` LIMIT 0,1 ") or die(mysqli_error($conn));

        if (mysqli_num_rows($gen1) > 0) {

            $vvouch = mysqli_fetch_assoc($gen1);

            $qvouch = $vvouch["maxcode"] + 1;

        } else {

            $qvouch = '1';

        }

        $gen2 = mysqli_query($conn, "SELECT MAX(code) AS maxcode FROM `$maindb_d` LIMIT 0,1 ") or die(mysqli_error($conn));

        if (mysqli_num_rows($gen2) > 0) {

            $cvvouch = mysqli_fetch_assoc($gen2);

            $dvouch = $cvvouch["maxcode"] + 1;

        } else {

            $dvouch = '1';

        }

        $flag = "Add";

        /*Disabling buttons*/        

        $searchdisabled ='disabled';

        $adddisabled ='disabled';

        $editdisabled ='disabled';

        $deletedisabled ='disabled';

        $printdisabled ='disabled';

        $pdisabled ='disabled';

        $ndisabled ='disabled';

        /*End Disabling buttons*/        

    }elseif($mode === "last"){

        $addflag = 2;

        $mgetlastrec = mysqli_query($conn, "SELECT * FROM `$maindb` ORDER BY `code` DESC LIMIT 0,1") or die(mysqli_error($conn));

        $mgetvouchno = mysqli_fetch_array($mgetlastrec);

        $tgetlastrec = mysqli_query($conn, "SELECT * FROM `$trandb` ORDER BY `code` DESC LIMIT 0,1") or die(mysqli_error($conn));

        $lgetvouchno = mysqli_fetch_array($tgetlastrec);

        $getvouch   = $lgetvouchno["code"];

        $qvouch     = $mgetvouchno["code"];

        $getvouch_d = $lgetvouchno["code_d"];



        /*Disabling buttons*/

        $savedisabled = 'disabled';

        $canceldisabled = 'disabled';

        /*End Disabling buttons*/

        

    }elseif($mode === "edit"){

        $addflag = 0;

        $qvouch = $_GET["code"];

        $dvouch = $_GET["code_d"];

        $flag = "Edit";



        /*Disabling buttons*/

        $savedisabled = 'disabled';

        $canceldisabled = 'disabled';

        $pdisabled ='disabled';

        $ndisabled ='disabled';

        /*End Disabling buttons*/

    }

}

?>



