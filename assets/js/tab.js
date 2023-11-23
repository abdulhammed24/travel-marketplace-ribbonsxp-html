function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabItem");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tablink-filter", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tablink-filter";
}
