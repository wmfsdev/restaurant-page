
function aboutUs() {
    const menuDisplay = document.querySelector('.image-band')
    const menu = document.createElement('p')
    menu.textContent = "MENU"
    menuDisplay.appendChild(menu)
}

function menuPage() {
    aboutUs()
}

export default menuPage