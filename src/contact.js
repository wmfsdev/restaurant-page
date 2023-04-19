

function aboutUs() {
    const menuDisplay = document.querySelector('.image-band')
    const menu = document.createElement('p')
    menu.textContent = "CONTACT"
    menuDisplay.appendChild(menu)
}

function contactPage() {
    aboutUs()
}

export default contactPage