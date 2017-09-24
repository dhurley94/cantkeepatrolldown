//combines core and API functionality   

//API
/**
 * Object that will grab data
 * from open jsonp obj from reddit API
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
                console.log(data);
                return data;
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
                console.log(data);
                return data;
            });
    },
    /**
     * Returns list of all user's posts
     * contains upvotes vs downvotes
     * subreddit additional info
     * Ex; https://www.reddit.com/user/rizse/submitted.json
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
            .done(function(data) {
                console.log(data);
                return data;
            });
    }
};

//code to refer to api.js from this one? for now, not in use
// $().getScript('js/api.js', function() {
//     // script is now loaded and executed.
//     // put your dependent JS here.



//    
// });

// End: API

// CORE APP.JS
var centeredSearch = $(".center-form");
var mainCont = $(".main-cont");
var searchButton = $("#troll-search > button");
var buttonText = $(".troll-butt-text");

centeredSearch.hide();


$(document).ready(function() { //jQuery document.load






    //Initial centering
    getVertMargin(centeredSearch, mainCont);
    getHorzMargin(buttonText, searchButton);
    centeredSearch.show();

    //James' code - do not touch

    console.log(redditGetter.getUserInfo('montarsp4'));

    //End: James' code - do not touch

}); //end: jQuery document.load



//align an element vertically
function getVertMargin(smallElem, parentElem) {
    var largeHeight = parseInt($(parentElem).height());
    var smallHeight = parseInt($(smallElem).css("height"));
    var marginAvail = largeHeight - smallHeight;
    //console.log(marginAvail);
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
    //console.log('callback - particles.js config loaded');
});