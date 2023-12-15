document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById("typing");
    const originalHTML = element.innerHTML;
    element.innerHTML = "<span id='content'></span><span class='blinking-cursor'>|</span>";
    let contentElement = document.getElementById("content");
    let i = 0;
    let skip = 0;

    function typeWriter() {
        if (i < originalHTML.length) {
            if (originalHTML[i] === '<') {
                skip = originalHTML.indexOf('>', i);
            }

            if (skip > i) {
                contentElement.innerHTML = originalHTML.substring(0, skip + 1);
                i = skip + 1;
                skip = 0;
            } else {
                contentElement.innerHTML = originalHTML.substring(0, i + 1);
                i++;
            }
            setTimeout(typeWriter, 200);
        }
    }

    if (originalHTML[i] === '<') {
        skip = originalHTML.indexOf('>', i);
        contentElement.innerHTML = originalHTML.substring(0, skip + 1);
        i = skip + 1;
    } else {
        contentElement.innerHTML = originalHTML[0];
        i = 1;
    }
    setTimeout(typeWriter, 5);
});
