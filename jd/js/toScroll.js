window.onscroll = function () {
        var top = document.documentElement.scrollTop;

        if (top >= 700) {
            document.getElementsByClassName('jd_fx')[0].style.display = "block";
            document.getElementsByClassName("elevator_list")[0].style.position = "fixed"
            document.getElementsByClassName("elevator_list")[0].style.top = "70px"
        } else {
            document.getElementsByClassName('jd_fx')[0].style.display = "none";
            document.getElementsByClassName("elevator_list")[0].style.position = "absolute"
            document.getElementsByClassName("elevator_list")[0].style.top = "0"
        }
}
