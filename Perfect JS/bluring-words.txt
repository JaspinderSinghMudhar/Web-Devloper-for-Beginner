// Header Animation Start 
var element_change_element = document.getElementById('element-change-element');
var example = ["Manufacturing", "Banking", "Retail", "Restaurants", "Enterprise", "Healthcare", "Hospitality", "WAREHOUSE"];

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

function XXX() {
    console.log('timeout');
}

textSequence(0);

function textSequence(i) {

    if (example.length > i) {
        setTimeout(async function() {
            document.getElementById("element-change-element").innerHTML = example[i].toUpperCase();
            for (var x = 10; x < 100; x++) {
                element_change_element.style.opacity = parseFloat(`0.${x}`);
                await sleep(4);
                element_change_element.style.opacity = 1;
            }
            textSequence(++i);
        }, 4000); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

}