let burgerLinks = document.querySelector('.links')
let burgerModal = document.querySelector('.burger-modal')
let closeOutline = document.querySelector('.close-outline')
let lines = document.querySelectorAll('.for-opacity')           
let burgerBtn = document.querySelector('.burger-btn')
let linksli = document.querySelectorAll('#links-li')
let main = document.querySelectorAll('.main')

function removeBurger() {
        setTimeout(() => {
                burgerModal.classList.remove('active-burger')
                burgerLinks.classList.remove('active-burger-items')
                closeOutline.classList.remove('active-opacity')
                for (let i of lines) {
                        i.classList.remove('disactive-opacity')
                }
        }, 500);
}

burgerBtn.onclick = () => {
        burgerModal.classList.toggle('active-burger')
        burgerLinks.classList.toggle('active-burger-items')
        closeOutline.classList.toggle('active-opacity')
        for (let i of lines) {
                i.classList.toggle('disactive-opacity')
        }



        // window.onclick = () => {
        //         if (event.target != burgerModal) {
        //                 burgerModal.classList.remove('active-burger')
        //         }
        // }
        for (let j of linksli) {
                j.onclick = () => {
                        removeBurger()
                }
        }
}



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)

    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const mediaQuery = window.matchMedia('(width: 1366px)')
if (mediaQuery.matches) {
        let uzCard = document.querySelector('.uzcard')
        let humoCard = document.querySelector('.humocard')

        uzCard.onclick = () => {
                uzCard.style.animationPlayState = 'running'
                humoCard.style.animationPlayState = 'running'
        }

        humoCard.onclick = () => {
                uzCard.style.animationPlayState = 'running'
                humoCard.style.animationPlayState = 'running'
        }
}

let descrip = document.querySelector('.description-book')
let descripWrap = document.querySelector('.description-book__wrapper')
let buyBook1 = document.querySelector('#book-item1')
let buyBook2 = document.querySelector('#book-item2')
let buyBook3 = document.querySelector('#book-item3')
let closeDescrip = document.querySelector('#close-descrip')

let descripImg = document.querySelector('#descripImg')
let descripTitle = document.querySelector('#descrip-title')
let descripPage = document.querySelector('#descrip-page')
let descripYear = document.querySelector('#descrip-year')
let descripText = document.querySelector('#descrip-text')

let book1 = [
        {
                img: './static/images/book1.jpg',
                name: '«Кечиккан кабутарлар»',
                yaer: ' 2018 год',
                pages: '152 Страниц',
                text: 'В пьесе любимая жена Отабека становиться жертвой лицимерия. Райхона была очаровательной девушкой которая любит жизнь, у нее были большие мечты. Когда Отабек узнал, что его жена стала жертвой несправедливости он почувствовал ответственность перед ее духом. Он решает бороться с этой несправедливостью чтобы восторжествовала правосудие.По окончании работ использование автомобилей  «Дамаз» в качестве общественного транспорта, не отвечающего требованиям безопасности пассажиров, будет запрещено по всей стране, справедливость восторжествует.'

        }
]
let book2 = [
        {
                img: './static/images/book2.jpg',
                name: '«Юрак йиглайди»',
                yaer: ' 2021 год',
                pages: '412 страниц',
                text: 'Бахтиёр Шарипов, публицист, сумевший создать стиль и остроту в жанре Фильетона, который не использовали другие журналисты, не является концом своей третьей книги, которую он ссылается на наше правительство. По словам писателя Нортухта Килич, мы ждем новых работ от «Мастера современных сказок».Фильетоны и изделия Бахтиера Шарипова отличаются от других тем, что находят отклик в обществе. Самое главное - устраняются недостатки которые подчеркнул писатель Бахтиер Шарипов. Это приносит пользу стране и обществу.'
        }
]
let book3 = [
        {
                img: './static/images/book3.jpg',
                name: '«Фалак Тарозуси»',
                yaer: ' 2016 год',
                pages: '168 страниц',
                text: 'На протяжении многих лет Бахтиёр Шарипов активно участвует в республиканской прессе со своей публицистикой, фильетонами, актуальными и проблемными статьями. Журналистские статьи и кадры из авторского сборника «Фалак тарозуси» или «Весы неба» посвящены актуальным проблемам, с которыми вы сталкиваетесь в нашем месте жительства, в нашей повседневной жизни, и мы думаем, что они не оставят равнодушным читателя.'
        }
]


let audioCont = document.querySelector('.audio-container')
let lineHeight = document.querySelector('#lineHeight')

buyBook1.onclick = () => {
        audioCont.style.display = 'block'
        lineHeight.style.lineHeight = '40px'
        descripWrap.classList.add('active-descrip')
        descrip.style.transform = 'translateY(0%)'
        for (let i of book1) {
                descripTitle.innerHTML = i.name
                descripPage.innerHTML = i.pages
                descripYear.innerHTML = i.yaer
                descripText.innerHTML = i.text
                descripImg.setAttribute('src', i.img)

        }
}
buyBook2.onclick = () => {
        audioCont.style.display = 'none'
        lineHeight.style.lineHeight = '60px'
        descrip.style.transform = 'translateY(0%)'
        for (let i of book2) {
                descripTitle.innerHTML = i.name
                descripPage.innerHTML = i.pages
                descripYear.innerHTML = i.yaer
                descripText.innerHTML = i.text
                descripImg.setAttribute('src', i.img)
        }
}
buyBook3.onclick = () => {
        audioCont.style.display = 'none'
        lineHeight.style.lineHeight = '60px'
        descrip.style.transform = 'translateY(0%)'
        for (let i of book3) {
                descripTitle.innerHTML = i.name
                descripPage.innerHTML = i.pages
                descripYear.innerHTML = i.yaer
                descripText.innerHTML = i.text
                descripImg.setAttribute('src', i.img)
        }
}
closeDescrip.onclick = () => {
        descrip.style.transform = 'translateY(100%)'
        paymentModal.style.transform = 'translateY(100%)'
}

descrip.onclick = () => {
        if (event.target != descripWrap && event.target == descrip) {
                descrip.style.transform = 'translateY(100%)'
        }
}



let openPaymentModal = document.querySelector('#open-payment-modal')
let paymentModal = document.querySelector('.payment-container')
let paymentwrap = document.querySelector('.payment-modal')
let payTime = document.querySelector('.payment-modal-time')
openPaymentModal.onclick = () => {
        descrip.style.transform = 'translateY(100%)'
        paymentModal.style.transform = 'translate(0%)'
}
payTime.onclick = () => {
        paymentModal.style.transform = 'translateY(100%)'
}
paymentModal.onclick = () => {
        if (event.target == paymentModal) {
                paymentModal.style.transform = 'translateY(100%)'
        }
}


let OptCard = document.querySelector('.opt-card')
let selectCard = document.querySelector('#selectCard')
let eyeSvg = document.querySelector('.eye-svg')
let eyeSvgCount = true

let cardNumber = document.querySelector('.card-number__item')





eyeSvg.onclick = () => {

        if (eyeSvgCount == true) {
                eyeSvg.removeAttribute('src')
                eyeSvg.setAttribute('src', './images/eye-off-outline.svg')
                cardNumber.removeAttribute('type')
                cardNumber.setAttribute('type', 'password')
                eyeSvgCount = false
        }
        else if (eyeSvgCount == false) {
                eyeSvg.removeAttribute('src')
                eyeSvg.setAttribute('src', './images/eye-outline.svg')
                cardNumber.removeAttribute('type')
                cardNumber.setAttribute('type', 'number')
                eyeSvgCount = true
        }
}


selectCard.onchange = () => {
        if (event.target.value == 'uzcard') {
                OptCard.removeAttribute('src')
                OptCard.setAttribute('src', './images/Uzcard-logo.png')
        }
        else if (event.target.value == 'unionpay') {
                OptCard.removeAttribute('src')
                OptCard.setAttribute('src', './images/unionpay.png')
        }

        else if (event.target.value == 'visa') {
                OptCard.removeAttribute('src')
                OptCard.setAttribute('src', './images/visa-logo.png')
        }
}


let payFrom = document.querySelector('#payment-form')

payFrom.onsubmit = () => {
        // e.preventDefault()
}

let telNumber = document.querySelector('#telNumber')
telNumber.onfocus = () => {
        telNumber.value = 998
}

let headerBtn = document.querySelector(".header-btn")
let newsBtn = document.querySelector(".news-btn")
let paymentBtn = document.querySelector(".payment-btn")
newsBtn.onclick = () => {
        audioCont.style.display = 'block'
        lineHeight.style.lineHeight = '40px'
        descripWrap.classList.add('active-descrip')
        descrip.style.transform = 'translateY(0%)'
        for (let i of book1) {
                descripTitle.innerHTML = i.name
                descripPage.innerHTML = i.pages
                descripYear.innerHTML = i.yaer
                descripText.innerHTML = i.text
                descripImg.setAttribute('src', i.img)

        }
}
headerBtn.onclick = () => {
        paymentModal.style.transform = 'translate(0%)'
}
paymentBtn.onclick = () => {
        paymentModal.style.transform = 'translate(0%)'
}




