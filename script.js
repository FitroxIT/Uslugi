const BUTTON = document.querySelector('#button')
const WSTEP = document.querySelector('#wstep')
const PYTANIE1 = document.querySelector('#pytanie1')
const PYTANIE2 = document.querySelector('#pytanie2')
const PYTANIE3 = document.querySelector('#pytanie3')
const WYNIK = document.querySelector('#wynik')
const WYNIKTXT = document.querySelector('#wyniktxt')
const PONOW = document.querySelector('#ponow')
let wynik = ''

BUTTON.addEventListener('click', () => {
    WSTEP.classList.add('hidden')
    PYTANIE1.classList.remove('hidden')
    PYTANIE1.classList.add('container')
})

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
        wynik += e.target.value
        console.log(wynik)
    })
})

document.querySelectorAll('.dalej').forEach(button => {
    button.addEventListener('click', () => {
        PYTANIE1.classList.add('hidden')
        PYTANIE2.classList.add('container')
        PYTANIE2.classList.remove('hidden')
    })
})

document.querySelectorAll('.dalej2').forEach(button => {
    button.addEventListener('click', () => {
        PYTANIE2.classList.add('hidden')
        PYTANIE3.classList.add('container')
        PYTANIE3.classList.remove('hidden')
    })
})

document.querySelectorAll('.dalej3').forEach(button => {
    button.addEventListener('click', () => {
        PYTANIE3.classList.add('hidden')
        WYNIK.classList.add('container')
        WYNIK.classList.remove('hidden')

        console.log(wynik) 

        if(wynik == 'niesprzedarzogolnopolski' || wynik == 'niesprzedarzlokalny'){
            WYNIKTXT.innerHTML = 'Sklep internetowy'
        }else if(wynik == 'niezlecenialokalny'){
            WYNIKTXT.innerHTML = 'Strona firmowa + Wizytówka GOOGLE'
        }else if(wynik == 'niezleceniaogolnopolski'){
            WYNIKTXT.innerHTML = 'Strona firmowa + Pozycjonowanie(SEO)'
        }else if(wynik == 'niemarkaogolnopolski' || wynik == 'niemarkalokalny'){
            WYNIKTXT.innerHTML = 'Strona firmowa + Facebook (Social Media)'
        }else if(wynik == 'taksprzedarzlokalny' || wynik == 'taksprzedarzogolnopolski'){
            WYNIKTXT.innerHTML = 'Pozycjonowanie (SEO) / Audyt sklepu'
        }else if(wynik == 'takzlecenialokalny'){
            WYNIKTXT.innerHTML = 'Wizytówka GOOGLE + Promocja wizytówki (Ads)'
        }else if(wynik == 'takzleceniaogolnopolski'){
            WYNIKTXT.innerHTML = 'Pozycjonowanie (SEO)'
        }else if(wynik == 'takmarkaogolnopolski' || wynik == 'takmarkalokalny'){
            WYNIKTXT.innerHTML = 'Facebook (Prowadzenie + Ads)'
        }
        /*
        else{
            PONOW.remove()
            WYNIKTXT.innerHTML = 'Nie posiadamy jeszcze rekomendacji na wybrane kierunki, z tego powodu najmociej przepraszam i zachęcam do ponownego wyboru'
            const BUTTON = document.createElement('button')
            BUTTON.classList.add('button')
            BUTTON.innerHTML = 'Spóbuj ponownie'
            WYNIK.appendChild(BUTTON)

            BUTTON.addEventListener('click', ()=>{
                wynik = ''
                WYNIK.classList.add('hidden')
                PYTANIE1.classList.remove('hidden')
                PYTANIE1.classList.add('container')
                BUTTON.remove()
            })


        }
            */

        
    })
})

PONOW.style.backgroundColor = 'rgb(91, 147, 219)'

PONOW.addEventListener('click', ()=>{
    wynik = ''
    WYNIK.classList.add('hidden')
    PYTANIE1.classList.remove('hidden')
    PYTANIE1.classList.add('container')
})


//wysyłanie formularza

const FORMULARZ = document.querySelector('#formularz')

FORMULARZ.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = new FormData(FORMULARZ)

    await fetch('https://formsubmit.co/ajax/jachasdomino253@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
    })

    alert('Formulrz został wysłany')
    FORMULARZ.reset()
})