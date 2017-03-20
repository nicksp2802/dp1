/**
 * Created by NickSp on 17.03.2017.
 */

var idParent = document.querySelector("#sidebar"),
    sidebarChild = document.querySelector("#sidebarIn");
var idOfWork0 = document.querySelector("#bestwork0"),
    idOfWork1 = document.querySelector("#bestwork1"),
    idOfWork2 = document.querySelector("#bestwork2"),
    idOfWork3 = document.querySelector("#bestwork3"),
    idOfWork4 = document.querySelector("#bestwork4");

//var numOfWork = document.querySelector("#right-block");
idParent.addEventListener("click", clickreaction);
function clickreaction(e) {

    idParent.removeChild(sidebarChild);
    var indexOfWork = e.path[2].id[8];
//    console.log(e.path[2].id[8])
    if (indexOfWork == 0) {
        document.location.href = "http://www.lemky.org.ua";
 //       var newWin = window.open("http://www.lemky.org.ua");

    }
    else {
        var worktitle = article [indexOfWork * 2],
            worktext = article [indexOfWork * 2 + 1];

        sidebarChild = document.createElement('div');
        sidebarChild.innerHTML = "<h3 align='center'><strong>" +
            worktitle + "</strong></h3>\n<p>" + worktext + "</p>";
        idParent.appendChild(sidebarChild);
    }
}
