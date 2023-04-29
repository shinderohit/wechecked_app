
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<style>
    .fixed {
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        box-shadow: 0 5px 5px -2px rgba(0,0,0,.1);
    }

</style>

<script>
    var num = 100; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.main_menu').addClass('fixed');
        } else {
            $('.main_menu').removeClass('fixed');
        }
    });
</script>

<header class="main_menu home_menu">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="index.html"> <img src="logo.png" alt="logo" style="width:125px"> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="menu_icon"><i class="fas fa-bars"></i></span>
                    </button>

                    <div class="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="index.php">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"
                                   role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                    <a class="dropdown-item" href="category.html">Sling Bags</a>
                                    <a class="dropdown-item" href="single-product.html">Shoulder Bags</a>

                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.php">About Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="contact.php">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="hearer_icon d-flex">
                        <a id="search_1" href="javascript:void(0)"><i class="ti-search"></i></a>

                        <!-- <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div class="single_product">

                            </div>
                        </div> -->

                    </div>
            </div>
            </nav>
        </div>
    </div>
</div>
<div class="search_input" id="search_input_box">
    <div class="container ">
        <form class="d-flex justify-content-between search-inner">
            <input type="text" class="form-control" id="search_input" placeholder="Search Here">
            <button type="submit" class="btn"></button>
            <span class="ti-close" id="close_search" title="Close Search"></span>
        </form>
    </div>
</div>
</header>