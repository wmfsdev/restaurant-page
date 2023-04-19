
import home from './home';
import menuPage from './menu';
import contactPage from './contact';
import { backHome } from './home';
import './style.css';

home()

const test = document.querySelectorAll('li')

test.forEach((element) => { element.addEventListener('click', (e) => {
    const page = document.querySelector('.image-band')
    while (page.firstChild) {
        page.removeChild(page.lastChild)
    }
    if (element.dataset.id === "0") {
        backHome()
    } else if (element.dataset.id === "1") {
        menuPage()
    } else if (element.dataset.id === "2") {
        contactPage()
    }
    console.log(element.dataset.id)
    })
})

console.log("working?")