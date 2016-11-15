function show_fight_menu(){
    var fi = document.getElementById("fight-instruction");
    fi.style.backgroundImage = "url ('../images/fight/fight1.png')";
    fi.style.backgroundSize = "100% 100%";
    fi.style.top = "0";
    fi.style.left = "0";
    fi.style.zIndex = "40";
}

var f = document.getElementById("fight");
f.addEventListener('click', show_fight_menu)

function show_bag(){
    var bm = document.getElementById("bag_team");
    bm.style.width = "100%";
    bm.style.height = "650px";
    bm.style.background = "blue";
}

var b = document.getElementById("bag");
b.addEventListener('click', show_bag);