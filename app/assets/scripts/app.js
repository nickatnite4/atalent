import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

new RevealOnScroll(document.querySelectorAll(".concentration__subjects"), 71)

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}
