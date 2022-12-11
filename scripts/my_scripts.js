


let headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

let timer = null;
let timer2 = null;
let timer3 = null;

let thunderTimer = null;





let lightning1Fade = function(){
    $("#lightning1").fadeIn(2500);
    $("#lightning1").fadeOut(3000);
};

timer = setInterval(lightning1Fade, 1000);

let lightning2Fade = function(){
    $("#lightning2").fadeIn(500);
    $("#lightning2").fadeOut(2500);
};

timer2 = setInterval(lightning2Fade, 2000);



let lightning3Fade = function(){
    $("#lightning3").fadeIn(750);
    $("#lightning3").fadeOut(1500);
    
};

timer3 = setInterval(lightning3Fade, 1500);


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

const myAudio = document.createElement('audio');

let playThunder = function() {

if (myAudio.canPlayType('audio/mpeg')) {
  myAudio.setAttribute('src','thunder-25689.mp3');
}

myAudio.currentTime = 5;
myAudio.play();
myAudio.loop = true;

};

const thunder2Audio = document.createElement('audio');

let playThunder2 = function() {

if (thunder2Audio.canPlayType('audio/mpeg')) {
  thunder2Audio.setAttribute('src','thunder-124463.mp3');
}

thunder2Audio.currentTime = 3;
thunder2Audio.play();
thunder2Audio.loop = true;

};

$("body").one("click", function() {
    playThunder();

  playThunder2();

 
});







