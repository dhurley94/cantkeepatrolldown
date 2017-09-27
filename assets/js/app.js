//FireBase
// Initialize Firebase

var config = {
    apiKey: "AIzaSyDEaKRk_ThdHR7NGFv6usbJEOkcn4eblTA",
    authDomain: "durable-return-174902.firebaseapp.com",
    databaseURL: "https://durable-return-174902.firebaseio.com",
    projectId: "durable-return-174902",
    storageBucket: "durable-return-174902.appspot.com",
    messagingSenderId: "556904227370"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function () {

    getVertMargin(centeredSearch, window);
    getHorzMargin(buttonText, searchButton);
    centeredSearch.show();

    if ($(window).width() < 700) {
        $(".button-span").css("width", "20%");
    }

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
        getUserInfo: function (username) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/about.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function (data) {
                    if (data === 'undefined') {
                        return undefined;
                    } else {
                        console.log(data.data);
                        User.push(data.data);
                        redditGetter.getUserComments(username);
                    }
                });
        },
        /**
         * Returns list of all user's comments
         * contains upvotes vs downvotes
         * subreddit and comment
         * Ex; https://www.reddit.com/user/rizse/comments.json
         */
        getUserComments: function (username) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/comments.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function (data) {
                    console.log(data.data);
                    User.push(data.data);
                    redditGetter.getUserPosts(username);
                });
        },
        /**
         * Returns list of all user's posts
         * contains upvotes vs downvotes
         * subreddit additional info
         * Ex; https://www.reddit.com/user/rizse/submitted.json
         */
        getUserPosts: function (username) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/submitted.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function (data) {
                    console.log(data.data)
                    User.push(data.data);
                });
        }
    };

    /**
     * Example use cases
     * Check console
     */
    /*redditGetter.getUserInfo('rizse');
    for (var i = 0; i < User.length; i++) {
        console.log(User[i]);
    }*/



    $("#getUser").on("click", function (e) {
        e.preventDefault();

        //save value in search box
        var input = $("#trollName").val();

        //clear search box
        $("#trollName").val("");

        if (input != "") {
            console.log(input);
            redditGetter.getUserInfo(input);
            for (var i = 0; i < User.length; i++) {
                console.log(User[i]);
            }


        } else {
            console.log("Nothing in the input!");
        }
    })

    function checkDBForTroll(troll) {
        var trollNode = database.ref('trolls')

        trollNode.orderByChild('username').equalTo(troll).once('value').then(function (snapshot) {
            if (snapshot.exists()) {
                var key = snapshot.key;
                redditGetter.getUserInfo(troll);
                var comment_karma = User[0].comment_karma;
                var link_karma = User[0].link_karma;

            } else {

            }
        })
    }

});

// CORE APP.JS

var centeredSearch = $("#troll-search");
var mainCont = $(".main-cont");
var searchButton = $(".button-span > button");
var buttonText = $(".troll-butt-text");
//centeredSearch.show();

centeredSearch.hide();

$(window).resize(function () {
    console.log("resizing");
    $(".main-cont").css("height", "100vh");
    $(".main-cont").css("width", "100vw");
    getVertMargin(centeredSearch, window);

    if ($(window).width() < 700) {
        $(".button-span").css("width", "20%");
    } else {
        $(".button-span").css("width", "10%");
    }

});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

particlesJS.load('particles-js', 'assets/json/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

//console.log(redditGetter.getUserInfo('rizse'));

//PARTICLE.JS & PRESENTATION
//align an element vertically
function getVertMargin(smallElem, parentElem) {
    var largeHeight = parseInt($(parentElem).height());
    var smallHeight = parseInt($(smallElem).css("height"));
    var marginAvail = largeHeight - smallHeight;
    console.log(marginAvail);
    var marginToSet = (marginAvail / 2);

    $(smallElem).css("margin-top", marginToSet);
    $(smallElem).css("margin-bottom", marginToSet);

}

//align an element horizontally
function getHorzMargin(smallElem, parentElem) {
    var largeWidth = parseInt($(parentElem).width());
    var smallWidth = parseInt($(smallElem).css("width"));
    var marginAvail = largeWidth - smallWidth;
    console.log(marginAvail);
    var marginToSet = (marginAvail / 2);

    $(smallElem).css("margin-left", marginToSet);
    $(smallElem).css("margin-right", marginToSet);
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/json/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

//END: PARTICLE.JS & PRESENTATION
