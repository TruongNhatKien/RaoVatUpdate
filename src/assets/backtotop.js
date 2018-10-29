// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }

    // if (document.body.scrollTop >= document.getElementById("collaborate").scrollHeight || document.documentElement.scrollTop >= document.getElementById("collaborate").scrollHeight) {
    //     document.getElementById("header-left").style.background = "#ffafa2";
    //     document.getElementById("header-right").style.background = "#ffafa2";
    //     if (document.body.scrollTop >= document.getElementById("createwt").scrollHeight || document.documentElement.scrollTop >= document.getElementById("createwt").scrollHeight) {
    //         document.getElementById("header-left").style.background = "#005744";
    //         document.getElementById("header-right").style.background = "#005744";
    //     }
    // } else {
    //     document.getElementById("header-left").style.background = "#61082B";
    //     document.getElementById("header-right").style.background = "#B4D0E7";
    // }


}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}