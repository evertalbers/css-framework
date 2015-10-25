document.querySelector("#menu-icon").addEventListener("click", function () {
    document.querySelector("ul.menu").classList.toggle("show");
    document.querySelector("#menu-icon").classList.toggle("active");
});
document.querySelector(".toggle-margin").addEventListener("click", function () {
    document.querySelector("#grid + p + button + button + .flex").classList.toggle("margin");
});
document.querySelector(".toggle-padding").addEventListener("click", function () {
    document.querySelector("#grid + p + button + button + .flex").classList.toggle("padding");
});
document.querySelector(".toggle-fixed").addEventListener("click", function () {
    document.querySelector("body").classList.toggle("fixed");
});