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

function validate_quantity_number() {
}