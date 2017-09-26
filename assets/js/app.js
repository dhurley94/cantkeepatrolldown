$(document).ready(function() {
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
    redditGetter.getUserInfo('rizse');
    for (var i = 0; i < User.length; i++) {
        console.log(User[i]);   
    }
});
