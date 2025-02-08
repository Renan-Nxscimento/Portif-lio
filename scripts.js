'use strict'

var x = window.matchMedia("(max-width: 1060px)")
var y = window.matchMedia("(max-width: 800px)")


//Ajustar texto
const textArea = document.querySelector('.a-text')
const linhaUm = document.querySelector('.row-one')
const linhaDois = document.querySelector('.row-two')
const linhaTres = document.querySelector('.row-three')
const linhaQuatro = document.querySelector('.row-four')
const linhaCinco = document.querySelector('.row-five')
const linhaSeis = document.querySelector('.row-six')
const linhaSete = document.querySelector('.row-seven')
const linhaOito = document.querySelector('.row-eight')
const linhaNove = document.querySelector('.row-nine')
const linhaDez = document.querySelector('.row-ten')
const linhaOnze = document.querySelector('.row-eleven')
const linhaDoze = document.querySelector('.row-twelve')

function ajustarTexto() {
    if (y.matches) {
        linhaUm.innerText = 'Olá! Me chamo Renan e sou um'
        linhaDois.innerText = 'desenvolvedor Front-End que'
        linhaTres.innerText = 'preza por um design simples,'
        linhaQuatro.innerText = 'intuitivo, funcional, e responsivo'
        linhaCinco.innerText = 'no desenvolvimento de páginas web.'
        linhaSeis.innerText = 'Tenho conhecimentos em Javascript,'
        linhaSete.innerText = 'CSS 3 e HTML 5 que vem sendo'
        linhaOito.innerText = ' estudados a mais de dois anos,'
        linhaNove.innerText = ' buscando sempre incrementar o que foi aprendido. Busco conseguir'
        linhaDez.innerText = 'um atendimento de excelência, entendendo necessidades e'
        linhaOnze.innerText = 'preferências do cliente para'
        linhaDoze.innerText = 'conseguir trabalhar da melhor'
        
        const newLine = document.createElement('span')
        newLine.classList.add('im-left', 'row-thirteen', 'hidden')
        const newText = document.createTextNode('forma possível.')
        newLine.appendChild(newText)
        textArea.appendChild(newLine)
    } else {
        return
    }
}

ajustarTexto()



//Alterar imagem dos projetos
const mercBack = document.querySelector('.mercBack')
const mercNext = document.querySelector('.mercNext')
const advBack = document.querySelector('.advBack')
const advNext = document.querySelector('.advNext')
const batBack = document.querySelector('.batBack')
const batNext = document.querySelector('.batNext')

let mercNumber = 1

let advNumber = 1

let batNumber = 1

function changeImage() {
    const mercImg = document.getElementById('mercImg')
    if (mercNumber === 1) {
        mercImg.style.backgroundImage = "url('img/Projects/Merchant/Mhome.png')"
    }
    else if (mercNumber === 2) {
        mercImg.style.backgroundImage = "url('img/Projects/Merchant/Mprod.png')"
    }
    else if (mercNumber === 3) {
        mercImg.style.backgroundImage = "url('img/Projects/Merchant/Mcart.png')"
    }
    else if (mercNumber === 4) {
        mercImg.style.backgroundImage = "url('img/Projects/Merchant/Mreview.png')"
    }

    const advImg = document.getElementById('advImg')
    if (advNumber === 1) {
        advImg.style.backgroundImage = "url('img/Projects/Advogh/Ahome.png')"
    }
    else if (advNumber === 2) {
        advImg.style.backgroundImage = "url('img/Projects/Advogh/Aone.png')"
    }
    else if (advNumber === 3) {
        advImg.style.backgroundImage = "url('img/Projects/Advogh/Atwo.png')"
    }
    else if (advNumber === 4) {
        advImg.style.backgroundImage = "url('img/Projects/Advogh/Athree.png')"
    }

    const batImg = document.getElementById('batImg')
    if (batNumber === 1) {
        batImg.style.backgroundImage = "url('img/Projects/The-Batman/Bhome.png')"
    }
    else if (batNumber === 2) {
        batImg.style.backgroundImage = "url('img/Projects/The-Batman/Bone.png')"
    }
    else if (batNumber === 3) {
        batImg.style.backgroundImage = "url('img/Projects/The-Batman/Btwo.png')"
    }
    else if (batNumber === 4) {
        batImg.style.backgroundImage = "url('img/Projects/The-Batman/Bthree.png')"
    }
    
}

mercBack?.addEventListener('click', () => {
    if (mercNumber > 1) {
        mercNumber--
    } else if (mercNumber === 1) {
        mercNumber = 4
    }
    changeImage()
})

mercNext?.addEventListener('click', () => {
    if (mercNumber < 4) {
        mercNumber++
    } else if (mercNumber === 4){
        mercNumber = 1
    }
    changeImage()
})



advBack?.addEventListener('click', () => {
    if (advNumber > 1) {
        advNumber--
    } else if (advNumber === 1) {
        advNumber = 4
    }
    changeImage()
})

advNext?.addEventListener('click', () => {
    if (advNumber < 4) {
        advNumber++
    } else if (advNumber === 4){
        advNumber = 1
    }
    changeImage()
})


batBack?.addEventListener('click', () => {
    if (batNumber > 1) {
        batNumber--
    } else if (batNumber === 1) {
        batNumber = 4
    }
    changeImage()
})

batNext?.addEventListener('click', () => {
    if (batNumber < 4) {
        batNumber++
    } else if (batNumber === 4){
        batNumber = 1
    }
    changeImage()
})



//Ajustar icones
var icons = document.querySelectorAll('.tec i')

function ajustarIcone() {
    if (y.matches) {
        icons.forEach(icon => {
            icon.classList.replace('fa-10x', 'fa-5x')
    })
    } if (x.matches) {
        icons.forEach(icon => {
            icon.classList.replace('fa-10x', 'fa-8x')
        })
    } else {
        return
    }
}

ajustarIcone()


//Header 
const home = document.getElementById('goHome')
const tecnologies = document.getElementById('goTec')
const about = document.getElementById('goAbout')
const projects = document.getElementById('goProject')
const contact = document.getElementById('goContact')

home.addEventListener ('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

tecnologies.addEventListener ('click', () => {
    if (x.matches) {
        window.scrollTo({
            top: 794,
            behavior: 'smooth'
        })
    } else {
        window.scrollTo({
            top: 1005,
            behavior: 'smooth'
        })
    }
})

about.addEventListener ('click', () => {
    if (x.matches) {
        window.scrollTo({
            top: 1590,
            behavior: 'smooth'
        })
    } else {
        window.scrollTo({
            top: 2010,
            behavior: 'smooth'
        })
    }
})

projects.addEventListener ('click', () => {
    if (x.matches) {
        window.scrollTo({
            top: 2435,
            behavior: 'smooth'
        })
    } else {
        window.scrollTo({
            top: 3015,
            behavior: 'smooth'
        })
    }
})

contact.addEventListener ('click', () => {
    if (x.matches) {
        window.scrollTo({
            top: 4020,
            behavior: 'smooth'
        })
    } else {
        window.scrollTo({
            top: 5025,
            behavior: 'smooth'
        })
    }
})

//Animações scroll
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const elementsLeft = document.querySelectorAll('.hidden')
elementsLeft.forEach((elementL) => myObserver.observe(elementL))

const elementsRight = document.querySelectorAll('.hidden-r')
elementsRight.forEach((elementR) => myObserver.observe(elementR))
