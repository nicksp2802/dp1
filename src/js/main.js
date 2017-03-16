/**
 * Created by NickSp on 15.03.2017.
 */

//for main page

var idParent = document.querySelector("#sidebar"),
    sidebarChild1 = document.querySelector("#invitation1"),
    sidebarChild2 = document.querySelector("#blocks"),
    sidebarChild3;

var linkOfBlog0 = document.querySelector("#title-of-blog0"),
    dateOfBlog0 = document.querySelector("#date-of-blog0");
linkOfBlog0.innerText = blogtexts [0];
dateOfBlog0.innerText = blogtexts [1];
var linkOfBlog1 = document.querySelector("#title-of-blog1"),
    dateOfBlog1 = document.querySelector("#date-of-blog1");
linkOfBlog1.innerText = blogtexts [3];
dateOfBlog1.innerText = blogtexts [4];
var linkOfBlog2 = document.querySelector("#title-of-blog2"),
    dateOfBlog2 = document.querySelector("#date-of-blog2");
linkOfBlog2.innerText = blogtexts [6];
dateOfBlog2.innerText = blogtexts [7];
var linkOfBlog3 = document.querySelector("#title-of-blog3"),
    dateOfBlog3 = document.querySelector("#date-of-blog3");
linkOfBlog3.innerText = blogtexts [9];
dateOfBlog3.innerText = blogtexts [10];

var numOfBlog = document.querySelector("#right-block");
numOfBlog.addEventListener("click", clickreaction);
function clickreaction(e) {
    var blogtitle, blogdate, blogtext;
    idParent.removeChild(sidebarChild1);
    idParent.removeChild(sidebarChild2);
    var indexOfBlog = e.path[1].id[8];
    blogtitle = blogtexts [indexOfBlog * 3];
    blogdate = blogtexts [indexOfBlog * 3 + 1];
    blogtext = blogtexts [indexOfBlog * 3 + 2];
    sidebarChild3 = document.createElement('div');
    sidebarChild3.innerHTML = "<h3 align='center'><strong>" +
        blogtitle + "</strong></h3>\n<h6 align='center'>" +
        blogdate + "</h6>\n<p>" + blogtext + "</p>";
    idParent.appendChild(sidebarChild3);
}

