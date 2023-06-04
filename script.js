document.querySelector("#menu-opener img").addEventListener("click", () => {
    let menu = document.querySelector("#menu-area")

    if (menu.style.width === "") {
        menu.style.width = "200px";
    } else if (menu.style.width === "200px") {
        menu.style.width = ""
    }
})