
var celdas = document.getElementsByTagName("td");
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
    
}
function redirect(){
    var imgBar = document.getElementById("bar");
    var logo = document.getElementById("logo");
    if(imgBar.style.display === "none")
    {
        imgBar.style.display = "inline-block";
        logo.style.display = "none";
    }
    else
    {
        logo.style.display = "inline-block";
        imgBar.style.display = "none";
    }
}