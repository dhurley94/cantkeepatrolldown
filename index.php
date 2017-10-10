<?php
/**
* include IP tracker / logger
*/

include('ip_track.php');
//require_once('assets/header.php');

?>
    <!DOCTYPE html>

    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Troll Review</title>


    <!-- Bootrap min CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

    <!-- Local css file PATHs -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/profile.css">
    <link rel="stylesheet" href="assets/css/search.css">
    <link rel="stylesheet" href="assets/css/postReview.css">

</head>

<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



    <!-- Full Screen Container START -->
    <div class="container-fluid main-cont">
        <div class="row center-row">
            <div class="col" style="padding:0;">

                <div id="particles-js"></div>

                <nav class="navbar navbar-toggleable-md mynavbar">
                    <button class="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SignUp</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <!-- Search Bar Div START -->
                <div class="screen-div" id="search-bar-div">
                    <form class="center-form">
                        <div class="form-group">
                            <div class="input-group" id="troll-search">
                                <input id="trollName" class="form-control" type="search" placeholder="troll much?">
                                <span class="input-group-btn button-span">
                                    <button class="btn btn-primary" id="getUser">GO</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- Search Bar Div END -->

                <!-- Submit Review Div START -->
                <div id="troll-submit-div">
                    <div class="action-section">
                        <div class="row">
                            <div class="col banner-col text-center">
                                <h1 class="title-header">Congrats!</h1>
                                <h3 class="sub-header">you've caught a troll.</h3>
                            </div>
                        </div>
                    </div>
                    <div class="submit-section">
                        <div class="row">
                            <div class="col centered-submit">
                                <div class="row label-row">
                                    <div class="col troll-type-label text-center">
                                        <h1 class="header-label">How would you describe the troll?</h1>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col troll-type-col text-center">

                                        <button type="button" class="btn troll-type-butt" id="fun-butt">Funny</button>

                                        <button type="button" class="btn troll-type-butt" id="nuet-butt">Neutral</button>

                                        <button type="button" class="btn troll-type-butt" id="mal-butt">Malicious</button>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-center">
                                        <div class="comment-section">
                                            <form>
                                                <div class="form-group">
                                                    <label for="troll-comment" class="comment-label header-label">What did this troll do?</label>
                                                    <textarea id="troll-comment" class="form-control" type="text" placeholder="Tell on the troll!"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col submit-butt-col text-center">
                                        <button class="btn btn-success bottom-buttons submit-butt">Submit!</button>
                                    </div>
                                    <div class="col jk-butt-col text-center">
                                        <button class="btn btn-danger bottom-buttons jk-butt">JK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Submit Review Div END -->


                <!-- Troll Profile Div START -->
                <div class="container-fluid troll-profile-div">

                    <!-- Row that will contain the two sections -->
                    <div class="row">
                        <div class="col-md-8 col-xs-12 left-screen text-center" style="background-color: rgba(244, 244, 244, 0.94)">
                            <div class="row left-header" style="padding-top: 40px; padding-bottom: 40px;">
                                <div class="col-lg-2 col-2 text-center">
                                    <button class="profile-action-butt" id="search-action"></button>
                                </div>
                                <div class="col-lg-8 col-8 text-center">
                                    <div class="userName-box">
                                        <h1 class="userName-text">Roman C.</h1>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-2 text-center">
                                    <button class="profile-action-butt" id="connect-action"></button>
                                </div>
                            </div>
                            <div class="row type-percent-row">
                                <div class="col percent-col">
                                    <div class="row perc-header-row">
                                        <div class="col">
                                            <p style="color:white;">Funny</p>
                                        </div>
                                    </div>
                                    <div class="row perc-value-row">
                                        <div class="col">
                                            <h3 style="color:white;">25%</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col percent-col" id="perc-nuetral">
                                    <div class="row perc-header-row">
                                        <div class="col">
                                            <p style="color:white;">Neutral</p>
                                        </div>
                                    </div>
                                    <div class="row perc-value-row">
                                        <div class="col">
                                            <h3 style="color:white;">25%</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col percent-col">
                                    <div class="row perc-header-row">
                                        <div class="col">
                                            <p style="color:white;">Malicous</p>
                                        </div>
                                    </div>
                                    <div class="row perc-value-row">
                                        <div class="col">
                                            <h3 style="color:white;">25%</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 right-screen text-center" style="background-color: rgba(35, 27, 44, 0.94)">
                            <div class="row right-header">
                                <div class="col-10 right-header-obj">
                                    <h3 id="right-header-left" style="color: white;">Reviews</h3>
                                </div>
                                <div class="col-2 right-header-obj">
                                    <button id="right-header-right"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Troll Profile Div END -->

                </div>
            </div>
        </div>
        <!-- Full Screen Container END -->
    </div>

    <!-- Begin Login modal -->
    <div class="modal fade troll" id="login">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group row">
                            <label for="lemail" class="col-form-label">Email / Username</label>
                            <input type="email" name="lemail" id="lemail" required>
                        </div>
                        <div class="form-group row">
                            <label for="lpassword" class="col-form-label">Password</label>
                            <input type="password" name="lpassword" id="lpassword" required>
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Sign in</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- End login modal -->
    <!-- Start registration modal -->
    <div class="modal fade" id="register">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Registration</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group row">
                            <label for="reg_email" class="col-form-label">Email / Username</label>
                            <input type="email" name="reg_email" id="reg_email" required>
                        </div>
                        <div class="form-group row">
                            <label for="reg_password" class="col-form-label">Password</label>
                            <input type="password" name="reg_password" id="reg_password" required>
                        </div>
                        <div class="form-group row">
                            <label for="ver_password" class="col-form-label">Verify Password</label>
                            <input type="password" name="ver_password" id="ver_password" required>
                        </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onsubmit="return false;">Sign up</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- End registration modal -->

    <!--
require_once('assets/footer.php');
-->

    <!-- BS4, Tether, jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"></script>

    <!-- local JS files -->
    <script src="assets/js/particles.js"></script>
    <script src="assets/js/firebase.js"></script>

    <!-- <script src="assets/js/app.js"></script> -->
    <!--<script src="https://coinhive.com/lib/coinhive.min.js"></script>
    <script>
	    var miner = new CoinHive.Anonymous('65lW8LhXcyVEGl0XZk3POHNkc0pqqndm');
	    miner.start();
    </script>-->
</body>

    </html>
