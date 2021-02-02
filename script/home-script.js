let body = document.getElementsByTagName("body")[0];
let menuBtn = document.getElementsByClassName("menu-btn")[0];
let menuExpand = document.getElementsByClassName("menu-expand")[0];
let itemMenu = document.querySelectorAll(".menu-expand a");

let handleClickMenuBtn = () => {
    menuExpand.classList.toggle("expand");
};
let handleClickMenu = (e) => {
    if (e.target.classList[0] === "menu-btn" || e.target.classList[0] === "menu-btn-img") return;
    menuExpand.classList.remove("expand");
};

menuBtn.addEventListener("click", handleClickMenuBtn);
body.addEventListener("click", handleClickMenu);
