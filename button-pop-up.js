function show() {
  alert("Hi there");
}
//not sure all the JS will work together but hey!
//Calling the function on window.onload to make sure the HTML is loaded
window.onload = function() {
  var x = document.getElementById('demo');
  x.onclick = function() {
    document.body.innerHTML = Date();
  }
};
