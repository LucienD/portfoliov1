windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

var Portfolio = angular.module('Portfolio', []);

var menuLeft = document.getElementById('menu');
var showLeft = document.getElementById('bouton_menu');
var wrap = document.getElementById('wrap');
var contenerMenu = document.getElementById('contener_menu');
var logo = document.getElementById("logo");
var audioTravaux = document.getElementById("audioTravaux");
var audioMonde = document.getElementById("audioMonde");
var audioPresentation = document.getElementById("audioPresentation");
var stopAudio = document.getElementById("stopAudio");
var elmtTravaux = document.getElementById("elementTravaux");

function colorToggle(btn){
    var property = document.getElementById(btn);
    property.className = 'toggled' == property.className ? '' : 'toggled';
}

// function pageVision(evt) {
//      var circle = evt.target;
//      var currentRadius = circle.getAttribute("r");
//      
//      circle.setAttribute("r", currentRadius*100);
//  }


stopAudio.addEventListener('click', function (e)
{
    e = e || window.event;
    audioTravaux.muted = !audioTravaux.muted;
    audioPresentation.muted = !audioPresentation.muted;
    audioMonde.muted = !audioMonde.muted;
    e.preventDefault();
}, false);

function pauseElmt(){
    elmtTravaux.style.animationPlayState = "paused";
    elmtTravaux.style.WebkitAnimationPlayState = "paused";
}

//FONCTION DU MENU 

function goMer(){
    ctrlMenu();
    logo.style.top = "-1em";
    wrap.style.transform = "translateY(-4485px)";
    wrap.style.webkitTransform = "translateY(-4485px)";
    audioTravaux.pause();
    audioMonde.pause();
    audioPresentation.play();
    
}
function goSpace(){
    ctrlMenu();
    logo.style.top = "-1em";
    wrap.style.transform = "translateY(-800px)";
    wrap.style.webkitTransform = "translateY(-800px)";
    audioTravaux.pause();
    audioPresentation.pause();
    audioMonde.play();
}
function goCloud(){
    ctrlMenu();
    logo.style.top = "-1em";
    wrap.style.transform = "translateY(-3000px)";
    wrap.style.webkitTransform = "translateY(-3000px)";
    audioTravaux.pause();
    audioPresentation.pause();
    audioMonde.pause();
}
function goTerre(){
    ctrlMenu();
    logo.style.top = "-1em";
    wrap.style.transform = "translateY(-5700px)";
    wrap.style.webkitTransform = "translateY(-5700px)";
    audioMonde.pause();
    audioPresentation.pause();
    audioTravaux.play();
    
}

function ctrlMenu(){
    contenerMenu.style.transform = "scale3d(0.5, 0.5, 1) translateY(-490px)";
    contenerMenu.style.webkitTransform = "scale3d(0.5, 0.5, 1) translateY(-490px)";
}

function goRestart(){
    wrap.style.transform = "translateY(0px)";
    wrap.style.webkitTransform = "translateY(0px)";
    
    if(windowWidth >= 1500){
        contenerMenu.style.transform = "scale3d(1,1,1)";
        contenerMenu.style.webkitTransform = "scale3d(1,1,1)";
    }
    if(windowWidth >= 1400 && windowWidth < 1500){
        contenerMenu.style.transform = "scale3d(0.8,0.8,1)";
        contenerMenu.style.webkitTransform = "scale3d(0.8,0.8,1)";
    }
    if(windowWidth < 1400){
        contenerMenu.style.transform = "scale3d(0.7, 0.7, 1)";
        contenerMenu.style.webkitTransform = "scale3d(0.7, 0.7, 1)";
    }
    
    logo.style.top = "-200px";
    audioTravaux.pause();
    audioPresentation.pause();
    audioMonde.pause();
}

console.log(windowWidth);