
import run from './home';
import runMenu from './menu';
import './style.css';

run()

const test = document.querySelectorAll('li')

test.forEach((element) => { element.addEventListener('click', (e) => {
    const page = document.querySelector('.image-band')
    while (page.firstChild) {
        page.removeChild(page.lastChild)
    }
    if (element.dataset.id === "1") {
        runMenu()
    }
    console.log(element.dataset.id)
    console.log(e.target.dataset.id)
    })
})

console.log("working?")