function on_mouse_over() {
    let x = (event.x - event.target.x) / event.target.offsetWidth *100;
    let y = (event.y - event.target.y) / event.target.offsetHeight *100;
    event.target.setAttribute("style", `transform-origin: ${x}% ${y}%;`);
    console.log();
    
}


function open_product_tab(evt, cityName) {
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("product_info__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("product_info__tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }