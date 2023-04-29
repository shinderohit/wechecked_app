<?php

function insmess() {

    print '<script type="text/javascript">';
    print 'alert("RECORD ADDED SUCESSFULLY")';
    PRINT '</script>';
}

function updmess() {

    print '<script type="text/javascript">';
    print 'alert("RECORD UPDATED SUCESSFULLY")';
    PRINT '</script>';
}

function browse($var) {
    print '<script type="text/javascript">';
    print 'alert("' . $var . '")';
    print '</script>';
}

function mydt($var) {
    global $con;
    mysqli_real_escape_string($con, $var);
    strtotime($var);
    date('Y-m-d', $var);
}

function monthname($month_int) {
    $month_int = (int) $month_int;
    $months = array("", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    return $months[$month_int];
}

function rsword($number) {
    if (($number < 0) || ($number > 999999999)) {
        throw new Exception("Number is out of range");
    }
    $Gn = floor($number / 100000);  /* Millions (giga) */
    $number -= $Gn * 100000;
    $kn = floor($number / 1000);     /* Thousands (kilo) */
    $number -= $kn * 1000;
    $Hn = floor($number / 100);      /* Hundreds (hecto) */
    $number -= $Hn * 100;
    $Dn = floor($number / 10);       /* Tens (deca) */
    $n = $number % 10;               /* Ones */
    $res = "";
    if ($Gn) {
        $res .= rsword($Gn) . " Lacs";
    }
    if ($kn) {
        $res .= (empty($res) ? "" : " ") .
                rsword($kn) . " Thousand";
    }
    if ($Hn) {
        $res .= (empty($res) ? " " : " ") .
                rsword($Hn) . " Hundred";
    }
    $ones = array("", "One", "Two", "Three", "Four", "Five", "Six",
        "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen",
        "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eightteen",
        "Nineteen");
    $tens = array("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty",
        "Seventy", "Eigthy", "Ninety");
    if ($Dn || $n) {
        if (!empty($res)) {
            $res .= " And ";
        }
        if ($Dn < 2) {
            $res .= $ones[$Dn * 10 + $n];
        } else {
            $res .= $tens[$Dn];
            if ($n) {
                $res .= "-" . $ones[$n];
            }
        }
    }
    if (empty($res)) {
        $res = "zero";
    }
    return $res;
}

function delete($mydb, $table, $vouch, $chk, $file) {
    global $con;
    mysqli_select_db($con, $mydb);
    mysqli_query($con, "DELETE FROM $table WHERE $vouch='$chk'") or die(mysqli_error($con));
    header("refresh: 1; $file");
}

function delnew($mydb, $table, $cond, $file) {
    global $con;
    mysqli_select_db($con, $mydb);
    mysqli_query($con, "DELETE FROM $table WHERE $cond") or die(mysqli_error($con));
    header("refresh: 1; $file");
}

function delmulti($mydb, $table, $cond, $file) {
    global $con;
    mysqli_select_db($con, $mydb);
    mysqli_query($con, "DELETE FROM $table WHERE $cond") or die(mysqli_error($con));
    header("refresh: 1; $file");
}

function table($table, $order) {

    global $con;

    $query = "SELECT * FROM $table ORDER BY $order ASC LIMIT 0, 30 ";
    $returnTables = mysqli_query($con, $query);

    $sql_columns_name = "SHOW COLUMNS FROM $table";

    $sql_columns_result = mysqli_query($con, $sql_columns_name);

    $column_arr = array();

    while ($row = mysqli_fetch_array($sql_columns_result)) {
        $column_arr[] = $row['Field'];
    }

    echo '<table>';

    while ($row = mysqli_fetch_array($returnTables)) {

        for ($i = 0; $i < count($column_arr); $i++) {
            echo "<tr>";
            echo "<td>" . $row[$column_arr[$i]] . "</td><br>";
            echo "</tr>";
        }
    }

    echo '</table>';
}

//function table($res) {
//    $i = 0;
//    $colNames = array();
//    $data = array();
//    while ($row = mysqli_fetch_object($res)) {
//        if ($i == 0) {
//            foreach ($row as $colname => $val)
//                $colNames[] = $colname;
//        }
//        $data[] = $row;
//        $i++;
//    }
//    $colNames = array_keys(reset($data));
//    $num = mysqli_num_rows($res);
//
//    echo "<h1>Number Of Records: $num</h1>";
//    echo '<table border="1" cellspacing="0" cellpadding="10">';
//    echo "<tr>";
//
//    foreach ($colNames as $colName) {
//        echo "<th>$colName</th>";
//    }
//
//    foreach ($data as $row) {
//        echo "<tr>";
//        foreach ($colNames as $colName) {
//            echo "<td>" . $row[$colName] . "</td>";
//        }
//        echo "</tr>";
//    }
//
//    echo "</table>";
//}

function val($value) {
    global $con;
    if (get_magic_quotes_gpc()) {
        $value = stripslashes($value);
    }
    if (!is_numeric($value)) {
        $value = "'" . mysqli_real_escape_string($con, $value) . "'";
    }
    return $value;
}

function convert_number_to_words($number) {

    $hyphen = '-';
    $conjunction = ' And ';
    $separator = ', ';
    $negative = 'negative ';
    $decimal = ' point ';
    $dictionary = array(
        0 => 'Zero',
        1 => 'One',
        2 => 'Two',
        3 => 'Three',
        4 => 'Four',
        5 => 'Five',
        6 => 'Six',
        7 => 'Seven',
        8 => 'Eight',
        9 => 'Nine',
        10 => 'Ten',
        11 => 'Eleven',
        12 => 'Twelve',
        13 => 'Thirteen',
        14 => 'Fourteen',
        15 => 'Fifteen',
        16 => 'Sixteen',
        17 => 'Seventeen',
        18 => 'Eighteen',
        19 => 'Nineteen',
        20 => 'Twenty',
        30 => 'Thirty',
        40 => 'Fourty',
        50 => 'Fifty',
        60 => 'Sixty',
        70 => 'Seventy',
        80 => 'Eighty',
        90 => 'Ninety',
        100 => 'Hundred',
        1000 => 'Thousand',
        1000000 => 'Million',
        1000000000 => 'Billion',
        1000000000000 => 'Trillion',
        1000000000000000 => 'Quadrillion',
        1000000000000000000 => 'Quintillion'
    );

    if (!is_numeric($number)) {
        return false;
    }

    if (($number >= 0 && (int) $number < 0) || (int) $number < 0 - PHP_INT_MAX) {
// overflow
        trigger_error(
                'convert_number_to_words only accepts numbers between -' . PHP_INT_MAX . ' and ' . PHP_INT_MAX, E_USER_WARNING
        );
        return false;
    }

    if ($number < 0) {
        return $negative . convert_number_to_words(abs($number));
    }

    $string = $fraction = null;

    if (strpos($number, '.') !== false) {
        list($number, $fraction) = explode('.', $number);
    }

    switch (true) {
        case $number < 21:
            $string = $dictionary[$number];
            break;
        case $number < 100:
            $tens = ((int) ($number / 10)) * 10;
            $units = $number % 10;
            $string = $dictionary[$tens];
            if ($units) {
                $string .= $hyphen . $dictionary[$units];
            }
            break;
        case $number < 1000:
            $hundreds = $number / 100;
            $remainder = $number % 100;
            $string = $dictionary[$hundreds] . ' ' . $dictionary[100];
            if ($remainder) {
                $string .= $conjunction . convert_number_to_words($remainder);
            }
            break;
        default:
            $baseUnit = pow(1000, floor(log($number, 1000)));
            $numBaseUnits = (int) ($number / $baseUnit);
            $remainder = $number % $baseUnit;
            $string = convert_number_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
            if ($remainder) {
                $string .= $remainder < 100 ? $conjunction : $separator;
                $string .= convert_number_to_words($remainder);
            }
            break;
    }

    if (null !== $fraction && is_numeric($fraction)) {
        $string .= $decimal;
        $words = array();
        foreach (str_split((string) $fraction) as $number) {
            $words[] = $dictionary[$number];
        }
        $string .= implode(' ', $words);
    }

    return $string;
}

function getzdates($zyear, $zpara) {
    global $zstdate;
    global $zendate;
    global $con;
    require("includes/dbconnect.php");
    $getdates = mysqli_query($con, "SELECT *, DATE_FORMAT(`startdate`, '%Y-%m-%d') as stdate, DATE_FORMAT(`lastdate`, '%Y-%m-%d')as endate FROM compyear WHERE finyear='$zyear'") or die(mysqli_error($con));
    $zdt = mysqli_fetch_object($getdates);
    $zstdate = $zdt->stdate;
    $zendate = $zdt->endate;
    if ($zpara == "S") {
        return $zstdate;
    } else {
        return $zendate;
    }
}

function left($str, $length) {
    return substr($str, 0, $length);
}

function right($str, $length) {
    return substr($str, -$length);
}

function ageCalculator($dob) {
    if (!empty($dob)) {
        $birthdate = new DateTime($dob);
        $today = new DateTime('today');
        $age = $birthdate->diff($today)->y;
        return $age;
    } else {
        return 0;
    }
}

function dateDiffInDays($date1, $date2) {
    // Calulating the difference in timestamps 
    $diff = strtotime($date2) - strtotime($date1);

    // 1 day = 24 hours 
    // 24 * 60 * 60 = 86400 seconds 
    return abs(round($diff / 86400));
}

?>
