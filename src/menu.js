
const container = document.querySelector('#content')

const copy = "Looking for authentic Thai cuisine that will satisfy your cravings? Look no further than our Thai restaurant! Our menu features a wide variety of traditional Thai dishes prepared with the freshest ingredients. Try our famous Pad Thai or Tom Yum soup for a taste of Thailand. We also offer delicious curries like Green Curry and Massaman Curry, as well as refreshing salads like Papaya Salad. And don't forget to indulge in our Mango Sticky Rice dessert. Our cozy dining area with traditional Thai artwork and decor provides the perfect setting for a memorable dining experience. Come visit us today and satisfy your cravings with our delicious Thai dishes!"

function aboutUs() {
    const menuHeader = document.createElement('h2')
    const image = document.createElement('img')
    const imageBand = document.createElement('div')
    const imgBand = document.createElement('img')
    menuHeader.textContent = "MENU"
    imageBand.classList.add('image-band')
    imageBand.appendChild(menuHeader)
    container.appendChild(image)
    container.insertAdjacentElement("afterend", imageBand)
    imageBand.appendChild(imgBand)
}

function runMenu() {
    aboutUs()
}

export default runMenu

// function food() {
//     const menu = document.querySelector('#content')
//     const title = document.createElement('h2');
//     title.textContent = "hey"   
//     menu.appendChild(title);
// }

// export default food;