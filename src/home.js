

const container = document.querySelector('#content')

function landing() {
    const title = document.createElement('h1');
    title.classList.add('h1')
    title.textContent = "EAT."   
    container.appendChild(title);
}

function menu() {
    const menu = document.createElement('ul')
    const array = []
    
    for (let i = 0 ; i < 3 ; i++) {
        const listElements = document.createElement('li')
        listElements.setAttribute(`data-id`, `${i}`)
        array.push(listElements)
        menu.appendChild(listElements)
    }
    menu.classList.add('menu')
    array[0].textContent = "HOME"
    array[1].textContent = "MENU"
    array[2].textContent = "CONTACT"
    
    container.appendChild(menu)
}

const copy = "Looking for authentic Thai cuisine that will satisfy your cravings? Look no further than our Thai restaurant! Our menu features a wide variety of traditional Thai dishes prepared with the freshest ingredients. Try our famous Pad Thai or Tom Yum soup for a taste of Thailand. We also offer delicious curries like Green Curry and Massaman Curry, as well as refreshing salads like Papaya Salad. And don't forget to indulge in our Mango Sticky Rice dessert. Our cozy dining area with traditional Thai artwork and decor provides the perfect setting for a memorable dining experience. Come visit us today and satisfy your cravings with our delicious Thai dishes!"

function aboutUs() {
    const about = document.createElement('p')
    const image = document.createElement('img')
    const imageBand = document.createElement('div')
    const imgBand = document.createElement('img')
    about.textContent = copy
    // about.classList.add('p')
    imageBand.classList.add('image-band')
    imageBand.appendChild(about)
    container.appendChild(image)
    container.insertAdjacentElement("afterend", imageBand)
    imageBand.appendChild(imgBand)
}


export {
    landing,
    menu,
    aboutUs
};