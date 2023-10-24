/*=============== SHOW MENU ===============*/
const navClose = document.getElementById('navClose')
const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')

if(navToggle){
navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
})
}
if(navClose){
navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

navLink.forEach(n=>n.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
}))

/*=============== SHADOW HEADER ===============*/
window.addEventListener('scroll', ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('show-header') : header.classList.remove('show-header')
})

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contactForm')
const contactMessage = document.getElementById('contactMessage')

const sendEmail = (e) =>{
e.preventDefault()

emailjs.sendForm('service_hygbcl2','template_f72fy58','#contactForm','cEPMKTLbTZS-SVnmP')
.then(()=>{
    contactMessage.textContent = 'Message sent successfully ✅'

    setTimeout(()=>{
        contactMessage.textContent = ''
    }, 4000)

    contactForm.reset()
}, ()=>{
    contactMessage.textContent = 'Message not sent (service error) ❌'
})
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById('scrollUp')
window.addEventListener('scroll', ()=>{
    this.scrollY >= 350 ? scrollUp.classList.add('show-scrollup') : scrollUp.classList.remove('show-scrollup')
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
window.addEventListener('scroll', ()=>{
    const sections = document.querySelectorAll('section[id]')
    

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*='+ sectionId + ']')

            if(scrollY> sectionTop && scrollY<=sectionTop+sectionHeight){
                sectionClass.classList.add('active-link')
            } else{
                sectionClass.classList.remove('active-link')
            }
    })
})

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme ='ri-sun-line'

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = scrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home-profil, .about-image, .contact-mail', {origin: 'right'})
sr.reveal('.home-name, .home-info, .about-con, .section-title, .about-info, .contact-social, .contact-data', {origin: 'left'})
sr.reveal('.services-card, .projects-card', {interval: 100})

