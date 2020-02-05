function table_is_empty(check_value) {
    if (!(document.getElementsByClassName("wish_list__table")[0].children[0].children.length > check_value)) {
        document.getElementsByClassName("wish_list__empty_message")[0].setAttribute("style", "display: inline-block;");
        document.getElementsByClassName("wish_list__table")[0].setAttribute("style", "display: none;");
    }
    else {
        document.getElementsByClassName("wish_list__empty_message")[0].setAttribute("style", "display: none;");
        document.getElementsByClassName("wish_list__table")[0].setAttribute("style", "");
    }
}

function on_load() {
    table_is_empty(1);
}

function remove_button_click() {
    let elem_to_remove = event.target.parentNode.parentNode.parentNode;  
    elem_to_remove.setAttribute("style", "opacity : 0");
    setTimeout(function(){elem_to_remove.remove();}, 500); 
    table_is_empty(2);
}