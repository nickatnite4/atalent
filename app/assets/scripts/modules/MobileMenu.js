class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".menu__menu-icon")
        this.menuContent = document.querySelector(".menu__content")
        if (this.menuIcon) {
            this.events()
        }
        console.log("Mobile Menu constructor called.");
    }
    events() {
        
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
        console.log("events fired off");
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("menu__content--is-visible")
        this.menuIcon.classList.toggle("menu__menu-icon--close-x")
    }
}

export default MobileMenu