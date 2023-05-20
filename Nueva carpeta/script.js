
let link1 = document.getElementById("lgaleria1");
let link2 = document.getElementById("lgaleria2");
let link3 = document.getElementById("lgaleria3");
let gal1 = document.getElementById("galeria1");
let gal2 = document.getElementById("galeria2");
let gal3 = document.getElementById("galeria3");


//link1.addEventListener("click", document.getElementById("galeria1").checked = false);
link1.onclick = function(){
    gal1.checked = false;
}