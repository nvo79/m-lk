$(function () {
    $(".toggle-menu-button").on("click", function () {
        $(this).toggleClass("is-open");
        $(".header-site-menu").toggleClass("is-show");
    });
});
