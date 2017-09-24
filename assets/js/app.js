// CORE APP.JS







//James' code - do not touch



//End: James' code - do not touch


var centeredSearch = $(".center-form");
var mainCont = $(".main-cont");
var searchButton = $("#troll-search > button");
var buttonText = $(".troll-butt-text");

centeredSearch.hide();

$(document).ready(function() {

    //Initial centering
    getVertMargin(centeredSearch, mainCont);
    getHorzMargin(buttonText, searchButton);
    centeredSearch.show();

});


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
particlesJS.load('particles-js', 'assets/json/particles.json', function() {
    console.log('callback - particles.js config loaded');
});