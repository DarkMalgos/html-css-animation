function show_fight_menu(){
    var fi = document.getElementById("fight-option");
    fi.style.display = "block";
}

var f = document.getElementById("fight");
f.addEventListener('click', show_fight_menu)

function show_bag(){
    var bm = document.getElementById("bag_menu");
    bm.style.display = "block";
    var c = document.getElementById("cancel-bag");
    c.style.display = "block";
}

var b = document.getElementById("bag");
b.addEventListener('click', show_bag);

function show_team(){
    var bm = document.getElementById("team");
    bm.style.display = "block";
    var t = document.getElementById("cancel-team");
    t.style.display ="block";
}

var t = document.getElementById("pokemon");
t.addEventListener('click', show_team);

function run_restart() {
    location.reload();
}

var t = document.getElementById("run");
t.addEventListener('click', run_restart);

function cancel_bag(){
    var bm = document.getElementById("bag_menu");
    bm.style.display = "none";
}

var c = document.getElementById("cancel-bag");
c.addEventListener('click', cancel_bag);

function cancel_team(){
    var bm = document.getElementById("team");
    bm.style.display = "none";
}
var c = document.getElementById("cancel-team");
c.addEventListener('click', cancel_team);