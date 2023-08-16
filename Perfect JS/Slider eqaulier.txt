        $(window).ready(function() {
            const elements = document.querySelectorAll(".owl-item>.benefits-items");
            var h_height = 0;
            elements.forEach(function(element) {
                    // element.style.height;
                    if (element.offsetHeight > h_height) {
                        h_height = element.offsetHeight;
                    }
                    element.style.height = `${h_height}px`;
                    console.log(element.style.height);
            })
        });