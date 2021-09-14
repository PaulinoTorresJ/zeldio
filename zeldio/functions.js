
/**********************
 *     FUNCTIONS       *
 **********************/

var dev = false;

function keyPressed() {
  if (keyCode === UP_ARROW) {
    dev = !dev;
    
     if (dev) {
      document.getElementById("uiDev").style.display = "block";
    } else {
      document.getElementById("uiDev").style.display = "none";
    } 
  }
}

 /* 
function keyPressed() {
  if (keyCode === 109) {
    if (ocultarDev === true) {
      document.getElementById("uiDev").style.display = "none";
      ocultarDev = false;
    } else {
      document.getElementById("uiDev").style.display = "block";
      ocultarDev = true;
    }
  }
  if (keyCode === 189) {
    if (ocultarDev === true) {
      document.getElementById("uiDev").style.display = "none";
      ocultarDev = false;
    } else {
      document.getElementById("uiDev").style.display = "block";
      ocultarDev = true;
    }
  }
}
 */