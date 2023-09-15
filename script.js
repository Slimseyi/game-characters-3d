function tlou() {
  showImage("tlou");
}

function ghost() {
  showImage("ghost");
}

function gow() {
  showImage("gow");
}

function mko() {
  showImage('mko');
}

function showImage(game) {
  var imageElement = document.getElementById("game-image");

  // i Update the image source based on the selected game
  if (game === "tlou") {
    imageElement.src = "https://rare-gallery.com/mocahbig/1396252-Ellie-The-Last-of-Us-Part-2-The-Last-of-Us-Part-II.jpg";
  } else if (game === "ghost") {
    imageElement.src = "https://i.pinimg.com/550x/d7/d9/bb/d7d9bb638e03ec9ce13388cb6e9005a3.jpg";
  } else if (game === "gow") {
    imageElement.src = "https://videogames.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzNjAwNTg5MDA2NTEzNjQ4/god-of-war-ragnarok-kratos.jpg";
  }
  
  else if (game === "mko") {
    imageElement.src = "https://wiki.supercombo.gg/images/8/8d/Mk11-liu-splash.png";
}
}
