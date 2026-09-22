
    // Epic Separator Javascript Edition
    
    function openTab5(evt5, TabNum5) {
        var j, tabcontent5, tablinks5;
        tabcontent5 = document.getElementsByClassName("tabcontent5");
        for (j = 0; j < tabcontent5.length; j++) { 
          tabcontent5[j].style.display = "none";
        }
        tablinks5 = document.getElementsByClassName("tablinks5");
        for (j = 0; j < tablinks5.length; j++) {
          tablinks5[j].className = tablinks5[j].className.replace(" active", "");
        }
        document.getElementById(TabNum5).style.display = "block";
        evt5.currentTarget.className += " active";
      
      }
document.getElementById("defaultopen5").click();
    