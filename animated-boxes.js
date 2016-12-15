//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
  var pos = 0;
  // our box element
  var box = document.getElementById('box');
  var t = setInterval(move, 10);

  function move() {
    //check the movement doesn't go too far and clear the interval at 150
    if(pos >= 150) {
      clearInterval(t);
    }
    else {
      //increment by 1px each time
      pos += 1;
      box.style.left = pos+'px';
    }
  }
};
