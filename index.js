document.addEventListener("DOMContentLoaded", function () {
    var arrowUp = document.getElementById("arrow-up");

    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight / 4) {
            arrowUp.style.display = "block";
        } else {
            arrowUp.style.display = "none";
        }
    });

    arrowUp.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});