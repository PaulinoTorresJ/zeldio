
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
