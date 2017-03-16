/**
 * Created by NickSp on 16.03.2017.
 */

//for blog

var blogpage='';
var blogtitle, blogdate, blogtext;
for (var i = 0;i < 4;i++){
    blogtitle = blogtexts [i * 3];
    blogdate = blogtexts [i * 3 + 1];
    blogtext = blogtexts [i * 3 + 2];
    blogpage =blogpage+ "<a href='#' align='center' id='blogPageBlog"+i+"'><strong>" +
        blogtitle + "</strong></a>\n<h6 align='center'>" +
        blogdate + "</h6>\n<p>" + blogtext.substr(0, 200) + "...</p>\n";
};
var idParent = document.querySelector("#sidebar"),
    sidebarChild3;
sidebarChild3 = document.createElement('div');
sidebarChild3.id = "bloglist";
sidebarChild3.innerHTML =blogpage;
idParent.appendChild(sidebarChild3);
idParent.addEventListener("click", clickreaction);
function clickreaction(e) {
   var blogtitle, blogdate, blogtext;
   var bloglist = document.querySelector("#bloglist");
    idParent.removeChild(bloglist);

    var indexOfBlog = e.path[1].id[12];
    blogtitle = blogtexts [indexOfBlog * 3];
    blogdate = blogtexts [indexOfBlog * 3 + 1];
    blogtext = blogtexts [indexOfBlog * 3 + 2];
    sidebarChild3 = document.createElement('div');
    sidebarChild3.innerHTML = "<h3 align='center'><strong>" +
        blogtitle + "</strong></h3>\n<h6 align='center'>" +
        blogdate + "</h6>\n<p>" + blogtext + "</p>";
    idParent.appendChild(sidebarChild3);

}


