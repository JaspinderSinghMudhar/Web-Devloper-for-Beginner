var buttonTop = document.getElementById("buttonTop");

buttonTop.className = "myElement myButton myStyle";

buttonTop.className = "myElement";

buttonTop.className += " myButton myStyle";

buttonTop.classList.add("myElement");

buttonTop.classList.add("myButton", "myStyle");

buttonTop.setAttribute("class", "myElement");

buttonTop.setAttribute("class", buttonTop.getAttribute("class") + " myButton myStyle");

buttonTop.classList.remove("myElement", "myButton", "myStyle");