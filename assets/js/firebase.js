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

$(document).ready(function() {

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
                .done(function(data) {
                    if (data === 'undefined') {
                        return undefined;
                    } else {
                        console.log(data.data);
                        User.push(data.data); //index 0
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
                .done(function(data) {
                    console.log(data.data);
                    User.push(data.data); //index 1
                    redditGetter.getUserPosts(username, redditGetter.handleTrollValues);
                });
        },
        /**
         * Returns list of all user's posts
         * contains upvotes vs downvotes
         * subreddit additional info
         * Ex; https://www.reddit.com/user/rizse/submitted.json
         */
        getUserPosts: function(username, handle) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/submitted.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function(data) {
                    console.log(data.data)
                    User.push(data.data); //index 2
                    handle(User, username);
                });
        },

        /**
         * Handles incoming troll user object and updates firebaseDB
         * Firebase PATH : trolls/uniqueID of troll that has the username requested/
         * callback will take in the troll name
         */
        handleTrollValues: function(troll, trollName) {

            var trollNode = database.ref('trolls')

            /* Here we look into the firebase trolls node and check for the username that was entered. I have an if/else statement here but it's unfinished. The idea is this:
             *
             * -> If the snapshot exists, use the already existing uniqueID of the troll to update his values(link_karma, comment_karma, number of banned post/comments)
             * -> Else if the snapshot does not exist, this means that this troll has not yet been logged and we can generate the uniqueID along with updating his values.
             *
             * Once You(JAMES) have this completed I'll also have two different UI changes occur for each of the two possibilities.
             */

            trollNode.orderByChild('username').equalTo(trollName).once('value').then(function(snapshot) {

                if (snapshot.exists()) { //in FB

                    console.clear();
                    console.log(trollName + " exists in our system!");
                    console.log(User);
                    //uniqueID already exists so store it for use...

                    var key;
                    var snap = snapshot;
                    snap.forEach(function(thisTroll) {
                        console.log(thisTroll.key);
                        key = thisTroll.key;
                    })

                    //console log the troll object from the API for reference when devloping...
                    // for (var i = 0; i < troll.length; i++) {
                    //     console.log("USER: " + i);
                    //     console.log(troll[i]);
                    // }

                    /**
                     * This part doesn't have to be in the if/else statement, you can set the variables before the statement.
                     * Store values from the API that we will update the firebase DB with...
                     */



                    //FB fields
                    /**
                     * User[0] = about user
                     * User[1] = user comments
                     * User[2] = user submitted
                     */

                    var comment_karma = User[0].comment_karma;
                    var link_karma = User[0].link_karma;
                    var comment_array = User[1].children;
                    var post_array = User[2].children;



                    // 10 lowest comments
                    bubbleSort(comment_array); //sort array by comment score to give lowest 10 ratings

                    // //Troll determination =  removal_reason, report_reasons, banned_at_utc, banned_by
                    var banned1;
                    var banned2;
                    var removal_reason;
                    var report_reasons;
                    var counter = 0;
                    var isTroll = false;
                    var commentScore = 0; //adds up total score of lowest 10 comments

                    var topPosts;

                    for (i = 0; i < comment_array.length; i++) {
                        //gets the first 10 comments and stores them in FB
                        switch (i) {
                            case 0:
                                trollNode.child(key).update({ c0: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 1:
                                trollNode.child(key).update({ c1: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 2:
                                trollNode.child(key).update({ c2: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 3:
                                trollNode.child(key).update({ c3: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 4:
                                trollNode.child(key).update({ c4: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 5:
                                trollNode.child(key).update({ c5: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 6:
                                trollNode.child(key).update({ c6: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 7:
                                trollNode.child(key).update({ c7: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 8:
                                trollNode.child(key).update({ c8: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 9:
                                trollNode.child(key).update({ c9: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;
                        }

                        //add up stats as we go along to determine trollocity
                        banned1 = comment_array[i].data.body.banned_at_utc;
                        banned2 = comment_array[i].data.body.banned_by;
                        removal_reason = comment_array[i].data.body.removal_reason;
                        report_reasons = comment_array[i].data.body.report_reasons;

                        if (banned1 != null || banned2 != null || removal_reason != null || report_reasons != null) {
                            counter++; //count up if any not null 

                        }
                    } //end for loop

                    //if any hit above, it's a troll!
                    if (counter > 0) {
                        isTroll = true; //troll bool
                    } else {
                        isTroll = false; //troll bool
                    }

                    // tot comments average
                    var commentAvg = commentScore / 10;

                    //troll rating
                    var trollRate;

                    //add to FB
                    trollNode.child(key).update({

                        mal: 0,
                        neutral: 0,
                        funny: 0,
                        comment_karma: comment_karma,
                        link_karma: link_karma,
                        is_troll: isTroll,
                        comment_score_avg: commentAvg

                    });





                    console.log("comment karma: " + comment_karma + "\nlink karma: " + link_karma);

                    // for (i = 0; i < comment_array.length; i++) {

                    //     //This is just a test to see how to access the parts of the API object Array
                    //     console.log(comment_array[i].data.body);

                    // }

                    console.log(comment_array);

                } else { //not in FB
                    console.clear();
                    console.log(trollName + " does not exits in our system...");
                    console.log(User);

                    var key = trollNode.push().key;

                    // for (var i = 0; i < troll.length; i++) {
                    //     console.log("USER: " + i);
                    //     console.log(troll[i]);
                    // }

                    /**
                     * This part doesn't have to be in the if/else statement, you can set the variables before the statement.
                     * Store values from the API that we will update the firebase DB with...
                     */
                    //FB fields
                    /**
                     * User[0] = about user
                     * User[1] = user comments
                     * User[2] = user submitted
                     */

                    var comment_karma = User[0].comment_karma;
                    var link_karma = User[0].link_karma;
                    var comment_array = User[1].children;
                    var post_array = User[2].children;



                    // 10 lowest comments
                    bubbleSort(comment_array); //sort array by comment score to give lowest 10 ratings

                    // //Troll determination =  removal_reason, report_reasons, banned_at_utc, banned_by
                    var banned1;
                    var banned2;
                    var removal_reason;
                    var report_reasons;
                    var counter = 0;
                    var isTroll = false;
                    var commentScore = 0; //adds up total score of lowest 10 comments

                    var topPosts;

                    for (i = 0; i < comment_array.length; i++) {
                        //gets the first 10 comments and stores them in FB
                        switch (i) {
                            case 0:
                                trollNode.child(key).update({ c0: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 1:
                                trollNode.child(key).update({ c1: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 2:
                                trollNode.child(key).update({ c2: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 3:
                                trollNode.child(key).update({ c3: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 4:
                                trollNode.child(key).update({ c4: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 5:
                                trollNode.child(key).update({ c5: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 6:
                                trollNode.child(key).update({ c6: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 7:
                                trollNode.child(key).update({ c7: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 8:
                                trollNode.child(key).update({ c8: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;

                            case 9:
                                trollNode.child(key).update({ c9: comment_array[i].data.body.trim() });
                                commentScore += comment_array[i].data.score;
                                break;
                        }

                        //add up stats as we go along to determine trollocity
                        banned1 = comment_array[i].data.body.banned_at_utc;
                        banned2 = comment_array[i].data.body.banned_by;
                        removal_reason = comment_array[i].data.body.removal_reason;
                        report_reasons = comment_array[i].data.body.report_reasons;

                        if (banned1 != null || banned2 != null || removal_reason != null || report_reasons != null) {
                            counter++; //count up if any not null 

                        }
                    } //end for loop

                    //if any hit above, it's a troll!
                    if (counter > 0) {
                        isTroll = true; //troll bool
                    } else {
                        isTroll = false; //troll bool
                    }

                    // tot comments average
                    var commentAvg = commentScore / 10;

                    //troll rating
                    var trollRate;


                    trollNode.child(key).update({
                        username: trollName,
                        comment_karma: comment_karma,
                        link_karma: link_karma
                    })

                    //add to FB
                    trollNode.child(key).update({
                        username: trollName,
                        mal: 0,
                        neutral: 0,
                        funny: 0,
                        comment_karma: comment_karma,
                        link_karma: link_karma,
                        is_troll: isTroll,
                        comment_score_avg: commentAvg

                    });

                    console.log("comment karma: " + comment_karma + "\nlink karma: " + link_karma);
                    // for (i = 0; i < comment_array.length; i++) {

                    //     //This is just a test to see how to access the parts of the API object Array

                    //     console.log(comment_array[i].data.body);
                    // }

                    console.log(comment_array);
                    console.log(post_array);

                }
            })
        }

    };

    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = len - 1; i >= 0; i--) {
            for (var j = 1; j <= i; j++) {
                if (arr[j - 1].data.score > arr[j].data.score) {
                    var temp = arr[j - 1].data.score;
                    arr[j - 1].data.score = arr[j].data.score;
                    arr[j].data.score = temp;
                }
            }
        }
        return arr;
    }


    /**
     * Example use cases
     * Check console
     */
    /*redditGetter.getUserInfo('rizse');
    for (var i = 0; i < User.length; i++) {
        console.log(User[i]);
    }*/



    $("#getUser").on("click", function(e) {
        e.preventDefault();

        //save value in search box
        var input = $("#trollName").val();

        //clear search box
        $("#trollName").val("");

        if (input != "") {
            console.log(input);

            //Triggers the domino effect that is the 'redditGetter' object
            //clear User array
            User = [];
            redditGetter.getUserInfo(input);


        } else {
            console.log("Nothing in the input!");
        }
    })

});

// CORE APP.JS

var centeredSearch = $("#troll-search");
var mainCont = $(".main-cont");
var searchButton = $(".button-span > button");
var buttonText = $(".troll-butt-text");
//centeredSearch.show();

centeredSearch.hide();

$(window).resize(function() {
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

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); 
particlesJS.load('particles-js', 'assets/json/particles.json', function () {
    console.log('callback - particles.js config loaded');
}); */

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

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); 
particlesJS.load('particles-js', 'assets/json/particles.json', function () {
    console.log('callback - particles.js config loaded');
}); */

//END: PARTICLE.JS & PRESENTATION