// APIS
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

// var imgurGetter = {

// };