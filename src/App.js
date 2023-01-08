
// eslint-disable-next-line no-unused-vars
function pageNavigation(evt, navLink) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabLinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(navLink).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

