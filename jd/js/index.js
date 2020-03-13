document.getElementById("jd_t_icon").onclick = function () {
    document.getElementById("jd_t").style.display = "none";
    document.getElementById("jd_t_box").href = "#";
}

document.getElementById("box_hover").onmouseover = function () {
    this.style.backgroundColor = "#fff";
    this.style.border = "1px solid #ccc";
    this.style.borderBottom = "1px solid #fff";
    this.style.paddingLeft = "5px";
    this.style.paddingRight = "5px";
    this.style.height = "29px"
    this.style.lineHeight = "29px";
    document.getElementById("jd").style.display = "block";
}

document.getElementById("box_hover").onmouseout = function () {
    this.style.backgroundColor = "";
    this.style.border = "";
    this.style.paddingLeft = "6px"
    this.style.paddingRight = "6px"
    this.style.height = "30px"
    this.style.lineHeight = "30px";
    document.getElementById("jd").style.display = "none";
}


function addChild() {
    var div = document.createElement('div');
    div.className = "mt";
    div.id = "mt";
    div.innerHTML = '<div>\n' +
        '                                <img src="./images/jd_er.webp" alt="" width="70">\n' +
        '                            </div>\n' +
        '                            <div>\n' +
        '                                <h5>手机京东</h5>\n' +
        '                                <p>新人专享大礼包</p>\n' +
        '                                <p>\n' +
        '                                    <a href=""  class="iphone"></a>\n' +
        '                                    <a href="" class="android"></a>\n' +
        '                                    <a href="" class="ipad"></a>\n' +
        '                                </p>\n' +
        '                            </div>';

    document.getElementById("qrCode").appendChild(div);
}

for (var i = 0; i < 3; i++) {
    addChild();
}

document.getElementById('pc').onmouseover = function () {
    document.getElementById('qrCode').style.display = "block";
}

document.getElementById('pc').onmouseout = function () {
    document.getElementById('qrCode').style.display = "none";
}
document.getElementById("cw").onmouseover = function () {
    document.getElementById("cw_b").style.border = "1px solid #f10215"
    document.getElementById("cw_b").style.borderBottom = "1px solid #fff"
    document.getElementById("cw_n").style.display = "block";
}

document.getElementById("cw").onmouseout = function () {
    document.getElementById("cw_b").style.border = "1px solid #ccc";
    document.getElementById("cw_n").style.display = "none";
}

document.getElementById("fs_smallImg").onmouseover = function () {
    document.getElementById("small_l").style.display = "block"
    document.getElementById("small_r").style.display = "block"
}

document.getElementById("fs_smallImg").onmouseout = function () {
    document.getElementById("small_l").style.display = "none"
    document.getElementById("small_r").style.display = "none"
}

/*---------------------滚动搜索框------------------------*/
document.getElementsByClassName("cw")[1].onmouseover = function () {
    document.getElementsByClassName("cw_b")[1].style.border = "1px solid #f10215"
    document.getElementsByClassName("cw_b")[1].style.borderBottom = "1px solid #fff"
    document.getElementsByClassName("cw_n")[1].style.display = "block";
}

document.getElementsByClassName("cw")[1].onmouseout = function () {
    document.getElementsByClassName("cw_b")[1].style.border = "1px solid #ccc";
    document.getElementsByClassName("cw_n")[1].style.display = "none";
}


var listD = [
    {
        i: "自营",
        name: "欧莱雅（LOREAL）清润葡萄籽强韧修护面霜50ml（欧莱雅水绷带 女士面霜乳液 温和护肤补水保湿 强韧肌肤）",
        price: "190.00",
        fd: "找相似"
    }
]

for (var g = 0; g < 59; g++) {
    var ls = listD[0];
    listD.push(ls);
}

var vm = new Vue({
    el: "#app",
    data: {
        list: []
    },
    created() {
        this.add();
    },
    methods: {
        add() {
            this.list = listD;
        },
        enter(i) {
            document.getElementsByClassName("grid_item_hover")[i].style.display = "block";
        },
        mouseout(i) {
            document.getElementsByClassName("grid_item_hover")[i].style.display = "none";
        }

    }
});


/*function addGrid() {
        var li = document.createElement("li");
        li.innerHTML = '<a href="" class="grid_item" >\n' +
            '                    <div class="grid_item_img">\n' +
            '                        <img src="./images/gird_1.jpg.webp" alt="" width="150">\n' +
            '                    </div>\n' +
            '                    <div>\n' +
            '                        <p>\n' +
            '                        <div class="grid_item_txt">\n' +
            '                            <i>自营</i>\n' +
            '                            欧莱雅（LOREAL）清润葡萄籽强韧修护面霜50ml（欧莱雅水绷带 女士面霜乳液 温和护肤补水保湿 强韧肌肤）\n' +
            '                        </div>\n' +
            '                        </p>\n' +
            '                        <div class="grid_item_m">\n' +
            '                            <div>\n' +
            '                                <i>¥</i>\n' +
            '                                <span>190.00</span>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="grid_item_hover" id="grid_item_hover">\n' +
            '                        <div class="grid_item_delete">x</div>\n' +
            '                        <div class="grid_item_find">\n' +
            '                            <div class="find_box">\n' +
            '                                <i></i>\n' +
            '                                找相似\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </a>';
        document.getElementById("grid_list").appendChild(li);
};*/
