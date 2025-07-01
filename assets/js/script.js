const my_menu_icon = document.querySelector(".my_menu_icon");
const my_menu = document.querySelector(".my_menu");

my_menu_icon.addEventListener("click",() => {
    my_menu_icon.classList.toggle("fa-bars");
    my_menu_icon.classList.toggle("fa-times");

    my_menu.classList.toggle("hidden");
});



