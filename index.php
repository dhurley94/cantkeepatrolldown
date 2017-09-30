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

    <link rel="stylesheet" href="assets/css/style.css">
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


            </div>
        </div>
    </div>
    <!-- Full Screen Container END -->


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

    <!-- Particle.js -->
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