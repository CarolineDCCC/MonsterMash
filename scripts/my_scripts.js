


let headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

let timer = null;
let timer2 = null;
let timer3 = null;




let lightning1Fade = function(){
    $("#lightning1").fadeIn(2500);
    $("#lightning1").fadeOut(3000);
};

timer = setInterval(lightning1Fade, 1000);

let lightning2Fade = function(){
    $("#lightning2").fadeIn(500);
    $("#lightning2").fadeOut(2000);
};

timer2 = setInterval(lightning2Fade, 2500);

let lightning3Fade = function(){
    $("#lightning3").fadeIn(3500);
    $("#lightning3").fadeOut(750);
};

timer3 = setInterval(lightning3Fade, 1000);


$("#head").click(function() {
    if (headclix < 9) {
        $(this).animate({left: "-=367px"}, 500);
        headclix += 1;
    }
    else {
        $(this).animate({left: "0px"}, 500);
        headclix = 0;
    }
});

$("#eyes").click(function() {
    if (eyeclix < 9) {
        $(this).animate({left: "-=367px"}, 500);
        eyeclix += 1;
    }
    else {
        $(this).animate({left: "0px"}, 500);
        eyeclix = 0;
    }
});

$("#nose").click(function() {
    if (noseclix < 9) {
        $(this).animate({left: "-=367px"}, 500);
        noseclix += 1;
    }
    else {
        $(this).animate({left: "0px"}, 500);
        noseclix = 0;
    }
});

$("#mouth").click(function() {
    if (mouthclix < 9) {
        $(this).animate({left: "-=367px"}, 500);
        mouthclix += 1;
    }
    else {
        $(this).animate({left: "0px"}, 500);
        mouthclix = 0;
    }
});

let newP = $("<p>");
newP.text("Make your own monster face by clicking on the picture.");

$("body").append(newP);
newP.addClass("addedP");
newP.css("display", "block");

