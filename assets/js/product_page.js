const margin_photo_value = 10;
let thumbnail_photo_width;

function on_load() {
    let main_image = document.getElementsByClassName("product__thumbnail_photos__outer")[0];
    let rect = main_image.getBoundingClientRect();

    thumbnail_photo_width = (main_image.offsetWidth-(margin_photo_value*3))/4;
    let images = document.getElementsByClassName("product__thumbnail_photos_container");
    for(let i = 0; i < images.length; i++) {
        images[i].setAttribute("style", `margin-right: ${margin_photo_value}px; width : ${thumbnail_photo_width}px;`);
    }

    let scroll_left = document.getElementsByClassName("scroll_left")[0];
    scroll_left.setAttribute("style", `left: ${rect.left + window.scrollX - scroll_left.offsetWidth/2}px; top: ${rect.top + window.scrollY + images[0].offsetHeight/2 - scroll_left.offsetHeight/2}px;`);
    let scroll_right = document.getElementsByClassName("scroll_right")[0];
    scroll_right.setAttribute("style", `left: ${rect.left + main_image.offsetWidth + window.scrollX - scroll_right.offsetWidth/2}px; top: ${rect.top + window.scrollY + images[0].offsetHeight/2 - scroll_right.offsetHeight/2}px;`);
}

window.onresize = function(event) {
    on_load();
};

function on_mouse_over() {
    let x = (event.x - event.target.x) / event.target.offsetWidth *100;
    let y = (event.y - event.target.y) / event.target.offsetHeight *100;
    event.target.setAttribute("style", `transform-origin: ${x}% ${y}%;`);
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

function quantity_inc() {
    let quantity_counter_elem = document.getElementById("quantity_counter");
    let quantity_value = quantity_counter_elem.getAttribute("value");
    quantity_counter_elem.setAttribute("value", +quantity_value + 1);
}

function quantity_dec() {
    let quantity_counter_elem = document.getElementById("quantity_counter");
    let quantity_value = quantity_counter_elem.getAttribute("value");
    if(quantity_value > 1)
        quantity_counter_elem.setAttribute("value", +quantity_value - 1);
}

function swipe_left() {
    let parent_elem = event.target.parentElement;
    if (parent_elem.getAttribute("scroll_position") > 4) {
        parent_elem.setAttribute("scroll_position", +parent_elem.getAttribute("scroll_position") - 1);
        document.getElementById("product__thumbnail_photos").setAttribute("style", `transform: translate3d(${(parent_elem.getAttribute("scroll_position") - 4) * (thumbnail_photo_width+margin_photo_value)}px, 0px, 0px);`);
    }
    else if (parent_elem.getAttribute("photo_amount") != 4)
        swipe_right();
}

function swipe_right() {
    let parent_elem = event.target.parentElement;
    if (parent_elem.getAttribute("scroll_position") < parent_elem.getAttribute("photo_amount")) {
        parent_elem.setAttribute("scroll_position", +parent_elem.getAttribute("scroll_position") + 1);
        document.getElementById("product__thumbnail_photos").setAttribute("style", `transform: translate3d(${(parent_elem.getAttribute("scroll_position") - 4) * (-(thumbnail_photo_width+margin_photo_value))}px, 0px, 0px);`);    
    }
    else if (parent_elem.getAttribute("photo_amount") != 4)
        swipe_left();
}

function swap_photo() { 
    document.getElementsByClassName("product__single_photo")[0].children[0].setAttribute("src", event.target.getAttribute("src"));
}

function show_review_write_panel() {
    let element = document.getElementsByClassName("write_review__container")[0];
    element.setAttribute("style", element.getAttribute("style") == "display: flex;" ? "display: none;" : "display: flex;")
}

function select_rating() {
    let stars = event.target.parentElement.parentElement.children;
    let i = 0;
    do {
        stars[i].setAttribute("class", "icon-star");
        stars[i].setAttribute("value", "1");
        stars[i].children[0].setAttribute("src", "assets/images/icons/star.svg");

    } while(stars[i++].getAttribute("id") != event.target.parentElement.getAttribute("id"));
    for (let j = i; j < 5; j++) {
        stars[j].setAttribute("class", "icon-star-empty");
        stars[j].setAttribute("value", "0");
        stars[j].children[0].setAttribute("src", "assets/images/icons/empty_star.svg");
    }
   
}

function highlight_rating_stars() {
    let stars = event.target.parentElement.parentElement.children;
    let i = 0;
    do {
        stars[i].setAttribute("class", "icon-star");
        stars[i].children[0].setAttribute("src", "assets/images/icons/star.svg");
    } while(stars[i++].getAttribute("id") != event.target.parentElement.getAttribute("id"));
    for (let j = i; j < 5; j++) {
        stars[j].setAttribute("class", "icon-star-empty");
        stars[j].children[0].setAttribute("src", "assets/images/icons/empty_star.svg");
    }
}

function remove_highlight() {
    let stars = event.target.parentElement.parentElement.children;
    for (let i = 0; i < 5; i++) {
        let state = +stars[i].getAttribute("value");
        stars[i].setAttribute("class", state ? "icon-star" : "icon-star-empty");
        stars[i].children[0].setAttribute("src", state ? "assets/images/icons/star.svg" : "assets/images/icons/empty_star.svg");
    }
}


