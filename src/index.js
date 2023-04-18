
import {landing, menu, aboutUs} from './home';
import './style.css';

landing()
menu()
aboutUs()

const test = document.querySelectorAll('li')

test.forEach((element) => { element.addEventListener('click', (e) => {
    console.log(e.target.dataset.id)
    })
})

console.log("working?")