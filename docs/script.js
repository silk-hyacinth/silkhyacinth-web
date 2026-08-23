function clickBody() {
    var star = document.createElement('div');
    star.classList.add("shooting-star");
    star.style.setProperty("--top-offset", Math.random() * 80 + "vh");
    star.addEventListener("animationend", function() {
        star.remove();
    });
    document.getElementById("meteor-shower").appendChild(star);
}

window.onload = function() {
    document.documentElement.addEventListener("click", clickBody);
}
