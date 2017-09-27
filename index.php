<?php

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
    <p>Check the console for Obj output</p>
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

                <div id="search-bar-div">
                    <form class="center-form">
                        <div class="form-group">
                            <div class="input-group" id="troll-search">
                                <input class="form-control" type="search" placeholder="troll much?">
                                <span class="input-group-btn button-span">
                                <button class="btn btn-primary">GO</button>
                            </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Full Screen Container END -->


    <!-- BS4, Tether, jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"></script>

    <!-- Particle.js -->
    <script src="assets/js/particles.js"></script>

    <!-- Project JS -->
    <script src="assets/js/app.js"></script>

</body>

</html>
