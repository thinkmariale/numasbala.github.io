function bigImg(x) {
    var img_num = Math.floor((Math.random() * 9));
    //console.log(img_num);
    x.src = "images/logos/numasbala_logo_white.png"
    if(img_num == 0) {
        x.src = "images/logos/numasbala_logo_red.png"
    }
    else if(img_num == 1) {
        x.src = "images/logos/numasbala_logo_blue.png"
    }
    else if(img_num == 2) {
        x.src = "images/logos/numasbala_logo_rred.png"
    }
    else if(img_num == 3) {
        x.src = "images/logos/numasbala_logo_orangeb.png"
    }
    else if(img_num == 4) {
        x.src = "images/logos/numasbala_logo_lightblue.png"
    }
    else if(img_num == 5) {
        x.src = "images/logos/numasbala_logo_purple.png"
    }
    else if(img_num == 6) {
        x.src = "images/logos/numasbala_logo_white.png"
    }
    else if(img_num == 7) {
        x.src = "images/logos/numasbala_logo_lightblueb.png"
    }
    else if(img_num == 8) {
        x.src = "images/logos/umasbala_logo_greenb.png"
    }
}

function normalImg(x) {
    x.src = "images/logos/numasbala_logo_black.png"
}
