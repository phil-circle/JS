function printTime() {
  var d = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+" : "+mins+" : "+secs;
}
setInterval(printTime, 1000);
