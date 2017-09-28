<?php
/**
* include IP tracker / logger
*/

include('ip_track.php');

?>

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

    <!-- Full Screen Container START -->
    <div class="container-fluid main-cont">
        <div class="row center-row">
            <div class="col" style="padding:0;">

                <!--<div id="particles-js"></div>-->

                <nav class="navbar navbar-toggleable-md mynavbar">
                    <button class="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="modal" data-target="#login" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="modal" data-target="#register" href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="search-bar-div">
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
            </div>
        </div>
    </div>
    <!-- Full Screen Container END -->

<!-- Begin Login modal -->
<div class="modal fade" id="login">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Login Form</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Sign in</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Registration Form</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Sign up!</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- End registration modal -->

    <!-- BS4, Tether, jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- javascript was being declared at top of body causing conflicts -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"></script>

    <!-- Particle.js -->
    <!-- <script src="assets/js/particles.js"></script> -->
    <script src="assets/js/firebase.js"></script>
    <!-- <script src="assets/js/app.js"></script> -->
</body>

</html>
