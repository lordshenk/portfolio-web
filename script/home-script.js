let body = document.getElementsByTagName("body")[0];
let menuBtn = document.getElementsByClassName("menu-btn")[0];
let menuExpand = document.getElementsByClassName("menu-expand")[0];
let itemMenu = document.querySelectorAll(".menu-expand a");
let workDetail = document.getElementsByClassName("work-detail");
let blogDetail = document.getElementsByClassName("blog-detail");

let handleClickMenuBtn = () => {
    menuExpand.classList.toggle("expand");
};
let handleClickMenu = (e) => {
    if (e.target.classList[0] === "menu-btn" || e.target.classList[0] === "menu-btn-img") return;
    menuExpand.classList.remove("expand");
};
let handleClickArticle = () => {
    let path = window.location.pathname;
    let href = window.location.href;
    let indexOfPath = href.indexOf(path);

    location.href = `${href.substring(0, indexOfPath)}/pages/article.html`;
};

for (let i of workDetail) {
    i.addEventListener("click", handleClickArticle);
}
for (let i of blogDetail) {
    i.addEventListener("click", handleClickArticle);
}
menuBtn.addEventListener("click", handleClickMenuBtn);
body.addEventListener("click", handleClickMenu);
