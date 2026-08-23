var starsEnabled = true;

function clickBody() {
    if (!starsEnabled) {
        return;
    }

    var star = document.createElement('div');
    star.classList.add("shooting-star");
    star.style.setProperty("--top-offset", Math.random() * 80 + "vh");
    star.addEventListener("animationend", function(event) {
        if (event.animationName !== "fall") {
            return;
        }
        star.remove();
    });
    document.getElementById("meteor-shower").appendChild(star);
}

function toggleStars(event) {
    event.stopPropagation();
    starsEnabled = !starsEnabled;
    document.getElementById("meteor-shower").classList.toggle("stars-off", !starsEnabled);
    this.classList.toggle("off", !starsEnabled);
}

window.onload = function() {
    document.documentElement.addEventListener("click", clickBody);

    var toggle = document.getElementById("stars-toggle");
    if (toggle) {
        toggle.addEventListener("click", toggleStars);
    }
}
