let prevButton = document.querySelector("#prev");
let nextButton = document.querySelector("#next");
let container = document.querySelector(".container")
let itens = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll("ul li")
let calculation = container.querySelector('.list')


let active = 0 ;
let firstPosition = 0 ;
let lastPosition = itens.length - 1 ;

// Botao Proximo Item
nextButton.onclick = () => {
    calculation.style.setProperty('--calculation', 1)
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    
    active = active + 1 > lastPosition ? 0 : active + 1
    itens[active].classList.add('active')


    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText = '0' + (active + 1)
    
}

// Botao Item Anterior
prevButton.onclick = () => {
    calculation.style.setProperty('--calculation', -1)
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    
    active = active - 1 < firstPosition ? lastPosition : active - 1
    itens[active].classList.add('active')


    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText = '0' + (active + 1)
}