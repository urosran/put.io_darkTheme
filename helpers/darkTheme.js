const main = document.getElementById("main");
const header = document.querySelector("header");
const icon = document.querySelector("icon");
const aside = document.querySelector("aside");
const listItem = document.querySelectorAll(".list-item");
const fileList = document.getElementsByClassName("file-list-header");
const app = document.getElementById("app");
const content =  document.getElementById("content");
const footer = document.querySelector("footer");
const checkbox = document.getElementsByClassName("checkbox-container");
const btn = document.getElementsByClassName("btn");
const body = document.querySelector("body");

body.style.color="white";
app.style.background="black";
app.style.color="white";
main.style.background = "black";
main.style.color = "white";
header.style.background = "black";
aside.style.background = "black";
content.style.background="black";
listItem.forEach(item => item.style.background = "black");
listItem.forEach(item => {
   item.addEventListener("mouseover", function() {
        item.style.background = "black";
    })
});
footer.style.background = "black";
checkbox[0].style.background = "black";
fileList[0].style.background = "black";
btn[0].style.color = "white";
