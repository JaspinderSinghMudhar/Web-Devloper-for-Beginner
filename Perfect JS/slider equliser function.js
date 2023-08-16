function height_equalizer(selected_element) {
    const elements = document.querySelectorAll(`${selected_element}`);
    var h_height = 0;
    elements.forEach(function(element) {
        // element.style.height;
        if (element.offsetHeight > h_height) {
            h_height = element.offsetHeight;
        }
        element.style.height = `${h_height}px`;
        console.log(element.style.height);
    })
}





console.log(element.clientHeight)
console.log(element.offsetHeight)
console.log(element.scrollHeight)