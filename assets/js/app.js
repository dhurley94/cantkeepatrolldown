// CORE APP.JS


var centeredSearch = $("#troll-search");
var mainCont = $(".main-cont");
var searchButton = $(".button-span > button");
var buttonText = $(".troll-butt-text");
    //centeredSearch.show();

centeredSearch.hide();

$(document).ready(function () {

    //Initial centering
    //$("#troll-search > button").css("padding-left", "4%");
    //$("#troll-search > button").css("padding-right", "4%");
    
    getVertMargin(centeredSearch, window);
    getHorzMargin(buttonText, searchButton);
    centeredSearch.show();
    
    if($(window).width() < 700){
       $(".button-span").css("width", "20%");
    }

});

$(window).resize(function(){
    console.log("resizing");
    $(".main-cont").css("height", "100vh");
    $(".main-cont").css("width", "100vw");
    getVertMargin(centeredSearch, window);
    
    if($(window).width() < 700){
       $(".button-span").css("width", "20%");
    }
    else{
       $(".button-span").css("width", "10%");
       }
    
})


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
