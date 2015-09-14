var main = function () {
    $(".intro_text").hide();
    var x = document.cookie;
    if (x == "alreadyVisited=1"){
        secondAnimation();
    }
    else {
        firstAnimation();
    }
    
};

function firstAnimation(){
    $("#intro1").delay(500).fadeIn(1);
    setTimeout(function(){
        $("#intro1").text("Excellence");}, 1000);
    setTimeout(function(){
        $("#intro1").text("Commitment");}, 1500);
    setTimeout(function(){
        $("#intro1").text("Welcome to DECA Glenforest");}, 2000);
    setTimeout(function(){
        $(".intro_container").animate({
        top: "100%",
        height: "0%"},300);}, 2500);
    setTimeout(function(){
        $(".main_container").animate({
        top: "0px"},300);}, 2500);
    setTimeout(function(){
        $(".intro_container").remove();}, 2800);
    createCookie();
}

function secondAnimation(){
    $(".intro_container").animate({
        top: "100%",
        height: "0%"},500);
    $(".main_container").animate({
        top: "0px"},500);
    setTimeout(function(){
        $(".intro_container").remove();}, 500);
}
function createCookie(){
    document.cookie="alreadyVisited=1";
}

$(document).ready(main);