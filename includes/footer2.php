<?php
$getcontact = mysqli_query($conn, "SELECT * FROM `contact`")or die(mysqli_error($conn));
$contact = mysqli_fetch_object($getcontact);

$getab = mysqli_query($conn, "SELECT * FROM `about`")or die(mysqli_error($conn));
$ab = mysqli_fetch_object($getab);
?>
<head><!-- Latest compiled and minified CSS -->

</head>
<!--information-starts-->
<div class="information" style="background-color: #00afef;">
    <div class="container" >
        <div class="infor-top" style="margin-top: 40px;">
            <div class="col-md-4 infor-left" style="color: white;">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="<? $contact->facebook ?>"><span class="fb" style="color: white;"></span><h6 style="color: white;">Facebook</h6></a></li>
                    <li><a href="<? $contact->twitter ?>"><span class="twit" style="color: white;"></span><h6 style="color: white;">Twitter</h6></a></li>
                    <li><a href="<? $contact->google ?>"><span class="google" style="color: white;"></span><h6 style="color: white;">Google+</h6></a></li>
                </ul>
            </div>
            <div class="col-md-4 infor-left" style="color: white;">
                <h3>About us</h3>
                <ul style="color: white !importnt;">
                    <p >
                        <?= $ab->para1?>
                    </p>
<!--                    <li><a href="#"><p>Specials</p></a></li>
                    <li><a href="#"><p>New Products</p></a></li>
                    <li><a href="#"><p>Our Stores</p></a></li>
                    <li><a href="contact.html"><p>Contact Us</p></a></li>
                    <li><a href="#"><p>Top Sellers</p></a></li>-->
                </ul>
            </div>
            <div class="col-md-4 infor-left" style="color: white;">
                <h3>Contact</h3>
                <ul>
                <p><?= $contact->address ?></p>
                <i class="fa fa-square fa-lg" style="width: 10px;height: 10px;"></i><p><?= $contact->name1; ?>: <?= $contact->mob1; ?></p>	
                <p><?= $contact->name2; ?>: <?= $contact->mob2; ?></p>
                <p>E-Mail: <a href="mailto:info@arnsons.com" style="color: white;"><?= $contact->email1; ?></a></p>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
<!--information-end--> 
<!--footer-starts-->
<div class="footer">
    <div class="container">
        <div class="footer-top">

            <div class="col-md-12 footer-right">
                <p> Abdul Razzak and Sons. All Rights Reserved<a href="#" target="_blank"></a> </p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
<!--footer-end-->	
</html>