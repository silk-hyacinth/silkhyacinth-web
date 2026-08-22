function clickBody() {

    console.log("test");
    var div = document.createElement('div');
    div.classList.add("shooting-star");
    div.style.setProperty("--top-offset", Math.random()*80 + "vh")


    document.getElementById("meteor-shower").appendChild(div);


    var container_div = document.getElementById('meteor-shower');
    var count = container_div.getElementsByClassName('star').length;

    console.log(count)
    if(count<20) {
        for(let i = 0; i < 3; i++){
            var newstar = document.createElement('div');
            newstar.classList.add('star');
            document.getElementById("meteor-shower").appendChild(newstar);
        }
    }
    else {
        setTimeout(d, 500)
    }
};

function d() {
    var container_div = document.getElementById('meteor-shower');
    for (let i = 0; i < container_div.getElementsByClassName('star').length; i++) {
        container_div.getElementsByClassName('star')[0].remove();
    }
}

window.onload = function() {
    document.documentElement.addEventListener("click", clickBody);
}
