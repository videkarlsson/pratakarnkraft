navFadedIn=false;
//Fade in nav on scroll down
window.addEventListener("scroll", function() {
    

    if(!navFadedIn){
    if (window.scrollY < 500) {
        $('#scroll-navbar').fadeOut();
    }
    else {
        $('#scroll-navbar').fadeIn();
        navFadedIn=true;
    }
    }
},false);

$(document).ready(function(){setInterval(function (){$("#intro-text-2").fadeIn(6000,function(){
});},1000)});
$(document).ready(function(){
    setInterval(function () {$("#scroll-down-icon").fadeIn(6000,function(){
});}, 2500)
    });






// $(document).ready(function(){$("#scroll-down-icon").hide().fadeIn(40000);});

//  element1.fadeIn(500, function() {  
//        element2.fadeIn(500, function() { 

// var introTextState = 1;

// function introStep() {
// 	if(introTextState===1){
//   		$("#intro-text-one").hide();
//   		$("#intro-text-two").show();
//   		// $("#progress-left-first").css("background","white")
//   		$("#progress-left-second").css("background","yellow")
//   		// $("#progress-right-first").css("background","white")
//   		$("#progress-right-second").css("background","yellow")
//   		introTextState =2;
// 	}
// 	else{
// 		$("#intro-text-two").hide();
//   		$("#intro-text-three").show();
//       $("#scroll-up-arrow").hide();
//   		// $("#progress-left-second").css("background","white")
//   		$("#progress-left-third").css("background","yellow")
//   		// $("#progress-right-second").css("background","white")
//   		$("#progress-right-third").css("background","yellow")
//   		$("#scroll-down-arrow").fadeIn(3000);
// 	}
// }

// function a() {
//     alert("Hello")
// }

// $("#scroll-down-arrow").click(scrollDown700());





// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide();
//   });
// });