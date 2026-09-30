
function openCity4(evt4, cityName4) {
    var i, tabcontent4, tablinks4;
    tabcontent4 = document.getElementsByClassName("tabcontent4");
    for (i = 0; i < tabcontent4.length; i++) {
      tabcontent4[i].style.display = "none";
    }
    tablinks4 = document.getElementsByClassName("tablinks4");
    for (i = 0; i < tablinks4.length; i++) {
      tablinks4[i].className = tablinks4[i].className.replace(" active", "");
    }
    document.getElementById(cityName4).style.display = "block";
    evt4.currentTarget.className += " active";
  
}
document.getElementById("defaultopen4").click();