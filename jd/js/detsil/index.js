document.getElementById("dd").onmouseover = function () {
        document.getElementById("prom_one").style.display = "none";
        document.getElementsByClassName("prom_one_hid")[0].style.display = "block";
}

document.getElementById("dd").onmouseout = function () {
    document.getElementById("prom_one").style.display = "block";
    document.getElementsByClassName("prom_one_hid")[0].style.display = "none";
}


document.getElementById("tips_icon").onmouseover = function () {
        document.getElementsByClassName("tips")[0].style.display = "block";
}

document.getElementById("tips_icon").onmouseout = function () {
    document.getElementsByClassName("tips")[0].style.display = "none";
}