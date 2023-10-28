function clickBody() {
    console.log("test")
    var div = document.createElement('div');
    div.classList.add("shooting-star");
    div.style.setProperty("--top-offset", Math.random()*80 + "vh")
    document.getElementById("meteor-shower").appendChild(div);
};
window.onload = function() {
    document.documentElement.addEventListener("click", clickBody);
}
