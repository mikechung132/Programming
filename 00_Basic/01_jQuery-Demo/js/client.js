  // Boundaries
  const upperLim = "10px";
  const lowerLim = "380px";
  const leftLim = "10px";
  const rightLim = "380px";

  // Nudging
  const nudgeL = "-=30px";
  const nudgeR = "+=100px";

  // Reset Position
  const startX = "200px";
  const startY = "200px";


  // Initialize Variables
  const showElement = document.getElementById('show');
  const hideElement = document.getElementById('hide');
  const toggleElement = document.getElementById('toggle');
  const fadeIn = document.getElementById('fadeIn');
  const fadeOut = document.getElementById('fadeOut');
  const up = document.getElementById('up');
  const down = document.getElementById('down');
  const right = document.getElementById('right');
  const left = document.getElementById('left');
  const glide = document.getElementById('glide');
  const nLeft = document.getElementById('nLeft');
  const nRight = document.getElementById('nRight');
  const slideUp = document.getElementById('slideUp');
  const slideDown = document.getElementById('slideDown');
  const reset = document.getElementById('reset');

  // Loading Audio
  const audio = document.getElementById("walk");
  audio.onloadeddata = function(){
      const myAudio = document.getElementById("walk").volume = .8;
  }


  /* EVENT LISTENERS */

  // ACTIONS
  showElement.addEventListener("click", function() {
    $("#beetle").show(100);
    document.getElementById("text").innerHTML = "";
  });

  hideElement.addEventListener("click", function() {
    $("#beetle").hide();
    document.getElementById("text").innerHTML = "He use an Invisibility Technique!";
  });

  toggleElement.addEventListener("click", function() {
    $("#beetle").toggle();
    document.getElementById("text").innerHTML = "";
  });


  // FADE
  fadeIn.addEventListener("click", function() {
    $("#beetle").fadeIn(300);
    document.getElementById("text").innerHTML = "Wild Arcbeetle appears!";
    document.getElementById("fade").play();
  });

  fadeOut.addEventListener("click", function() {
    $("#beetle").fadeOut(300);
    document.getElementById("text").innerHTML = "The Invisibility Technique Again!";;
    document.getElementById("fade").play();
  });


  // NAVIGATION
  up.addEventListener("click", function() {
    $("#beetle").css("top", upperLim);
    document.getElementById("text").innerHTML = "I'm top of the world!";
    document.getElementById("walk").play();
  });

  down.addEventListener("click", function() {
    $("#beetle").css("top", lowerLim);
    document.getElementById("text").innerHTML = "Started from the bottom";
    document.getElementById("walk").play();
  });

  left.addEventListener("click", function() {
    $("#beetle").css("left", leftLim);
    document.getElementById("text").innerHTML = "Left me hanging?";
    document.getElementById("walk").play();
  });

  right.addEventListener("click", function() {
    $("#beetle").css("left", rightLim);
    document.getElementById("text").innerHTML = "Welcome to the Right Side";
    document.getElementById("walk").play();
  });


  // GLIDE
  glide.addEventListener("click", function() {
    $("#beetle").css( "left", leftLim);

    //Glide to new position
    $("#beetle").animate({ "left": rightLim}, 300);
    document.getElementById("text").innerHTML = "CHARGE!!";
    document.getElementById("dash").play();
  });


  // NUDGING
  nLeft.addEventListener("click", function() {
    $("#beetle").animate({"left": nudgeL}, 200);
    document.getElementById("text").innerHTML = "Did you just push me?!";
    document.getElementById("push").play();
  });

  nRight.addEventListener("click", function() {
    $("#beetle").animate({"left": nudgeR}, 200);
    document.getElementById("text").innerHTML = "..System ERROR.. ";
    document.getElementById("punch").play();
  });


  // SLIDES
  slideUp.addEventListener("click", function() {
    $("#beetle").slideUp("fast");
    document.getElementById("text").innerHTML = "";
    document.getElementById("slide").play();
  });
  slideDown.addEventListener("click", function() {
    $("#beetle").slideDown("fast");
    document.getElementById("text").innerHTML = "";
    document.getElementById("slide").play();
  });


  // RESETS
  reset.addEventListener("click", function() {
    $("#beetle").css( "top", startX);
    $("#beetle").css( "left", startY);
    document.getElementById("text").innerHTML = "Back where we started.";;
    document.getElementById("teleport").play();
  });
