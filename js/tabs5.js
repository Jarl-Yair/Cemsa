
function openTab6(evt6, Tab2Num6) {
    var k, tabcontent6, tablinks6;
    tabcontent6 = document.getElementsByClassName("tabcontent6");
    for (k = 0; k < tabcontent6.length; k++) { 
      tabcontent6[k].style.display = "none";
    }
    tablinks6 = document.getElementsByClassName("tablinks6");
    for (k = 0; k < tablinks6.length; k++) {
      tablinks6[k].className = tablinks6[k].className.replace(" active", "");
    }
    document.getElementById(Tab2Num6).style.display = "block";
    evt6.currentTarget.className += " active";
  
  }
document.getElementById("defaultopen6").click();
