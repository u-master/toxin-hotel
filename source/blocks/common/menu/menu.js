
module.exports = {
    menu_submenuButton_click: function (idSubmenu) {
        idSubmenu = "#" + idSubmenu;
        const submenu = document.querySelector(idSubmenu);
        if (submenu.style.visibility === "hidden")
            submenu.style.visibility = "visible";
        else
            submenu.style.visibility = "hidden";
    }
};