window.onscroll = function () {
    var top = document.documentElement.scrollTop;
        if (top >= 1168) {
            document.getElementsByClassName("tab-main2")[0].style.position = "fixed";
            document.getElementsByClassName("fx_l")[0].style.position = "fixed";
            document.getElementsByClassName("tab-main2")[0].style.top = "0";
            document.getElementsByClassName("fx_l")[0].style.top = "0";
            document.getElementsByClassName("fxb")[0].style.display = "block";
        } else {
            document.getElementsByClassName("tab-main2")[0].style.position = "";
            document.getElementsByClassName("fx_l")[0].style.position = "";
            document.getElementsByClassName("fxb")[0].style.display = "none";
        }

}
