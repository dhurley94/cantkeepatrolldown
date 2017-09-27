/*
Dev Note: There has been extensive changes made to the following code:

STATUS: Work in progress!!!!

-Contact James before ANY changes are made!!! Doing so will break functionality!!!

- Do not reorganize
- Do not change variables back
- Do not leave console.logs uncommented after done using them

Thank you :)

*/

$(document).ready(function() { //start document load
    //INITIALIZATION

    var centeredSearch = $("#troll-search");
    var mainCont = $(".main-cont");
    var searchButton = $(".button-span > button");
    var buttonText = $(".troll-butt-text");
    //centeredSearch.show();

    centeredSearch.hide();

    var currentUser;


    //Initial centering
    //$("#troll-search > button").css("padding-left", "4%");
    //$("#troll-search > button").css("padding-right", "4%");

    getVertMargin(centeredSearch, window);
    getHorzMargin(buttonText, searchButton);
    centeredSearch.show();

    if ($(window).width() < 700) {
        $(".button-span").css("width", "20%");
    }


    //FireBase
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAtHFqNyx9r1K80KZ9O-BOPMJyygEfRVtg",
        authDomain: "ckatd-3c3f4.firebaseapp.com",
        databaseURL: "https://ckatd-3c3f4.firebaseio.com",
        projectId: "ckatd-3c3f4",
        storageBucket: "",
        messagingSenderId: "342675726179"
    };
    firebase.initializeApp(config);


    var database = firebase.database(); //variable to reference the database

    //END: INITIALIZATION

    //API

    //https://www.reddit.com/user/rizse/submitted.json$(document).ready(function() {
    /**
     * Object that will grab data
     * from open jsonp obj from reddit API
     */
    var User = [];

    /**
     * User array contains data
     * and breaks Async purposfully
     * containers [Overview, Comments, Posts]
     * if inital lookup of getUserInfo('username') returns undefined
     * a reddit user does not exist
     */
    var redditGetter = {
        /**
         * Returns basic user information 
         * including total link and comment karma
         * Ex; https://www.reddit.com/user/rizse/about.json
         */
        getUserInfo: function(username) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/about.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function(response) {
                    if (response === 'undefined') {
                        return undefined;
                    } else {
                        console.log(response.data);
                        User.push(response.data);
                        //redditGetter.getUserComments(username);
                    }
                });
        },
        /**
         * Returns list of all user's comments
         * contains upvotes vs downvotes
         * subreddit and comment
         * Ex; https://www.reddit.com/user/rizse/comments.json
         */
        getUserComments: function(username) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/comments.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function(response) {
                    console.log(response.data);
                    User.push(response.data);
                    //redditGetter.getUserPosts(username);
                });
        },
        /**
         * Returns list of all user's posts
         * contains upvotes vs downvotes
         * subreddit additional info
         * Ex; 
         */
        getUserPosts: function(username) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/submitted.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function(response) {
                    // console.log(data.data)
                    User.push(response.data);
                });
        }
    }; //end redditgetter

    //END API


    //James' Code - do not modify!

    //user search from main bar
    $('body').on('click', '#main_button', function() {
        currentUser = $('#main_text_input').val(); //username from search bar
        redditGetter.getUserComments(currentUser);

        console.log(User);

        console.log(currentUser);

        alert(User);





    });


    function fbGetter(user) {
        //gets info from FB


        //if exists in FB, do not add

        //if NOT exist in FB, add

    }




    // for (var i = 0; i < User.length; i++) {
    //     console.log(User[i]);
    //     console.log('test');
    // }

    //end James' code








}); //end document load

$(window).resize(function() {
    // console.log("resizing");
    $(".main-cont").css("height", "100vh");
    $(".main-cont").css("width", "100vw");
    getVertMargin(centeredSearch, window);

    if ($(window).width() < 700) {
        $(".button-span").css("width", "20%");
    } else {
        $(".button-span").css("width", "10%");
    }

})


//align an element vertically
function getVertMargin(smallElem, parentElem) {
    var largeHeight = parseInt($(parentElem).height());
    var smallHeight = parseInt($(smallElem).css("height"));
    var marginAvail = largeHeight - smallHeight;
    // console.log(marginAvail);
    var marginToSet = (marginAvail / 2);

    $(smallElem).css("margin-top", marginToSet);
    $(smallElem).css("margin-bottom", marginToSet);

}

//align an element horizontally
function getHorzMargin(smallElem, parentElem) {
    var largeWidth = parseInt($(parentElem).width());
    var smallWidth = parseInt($(smallElem).css("width"));
    var marginAvail = largeWidth - smallWidth;
    // console.log(marginAvail);
    var marginToSet = (marginAvail / 2);

    $(smallElem).css("margin-left", marginToSet);
    $(smallElem).css("margin-right", marginToSet);
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

particlesJS.load('particles-js', 'assets/json/particles.json', function() {
    // console.log('callback - particles.js config loaded');


});



//PARTICLE.JS & PRESENTATION
//align an element vertically
function getVertMargin(smallElem, parentElem) {
    var largeHeight = parseInt($(parentElem).height());
    var smallHeight = parseInt($(smallElem).css("height"));
    var marginAvail = largeHeight - smallHeight;
    // console.log(marginAvail);
    var marginToSet = (marginAvail / 2);

    $(smallElem).css("margin-top", marginToSet);
    $(smallElem).css("margin-bottom", marginToSet);

}

//align an element horizontally
function getHorzMargin(smallElem, parentElem) {
    var largeWidth = parseInt($(parentElem).width());
    var smallWidth = parseInt($(smallElem).css("width"));
    var marginAvail = largeWidth - smallWidth;
    //console.log(marginAvail);
    var marginToSet = (marginAvail / 2);

    $(smallElem).css("margin-left", marginToSet);
    $(smallElem).css("margin-right", marginToSet);
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/json/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

//END: PARTICLE.JS & PRESENTATION