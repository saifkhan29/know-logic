const hamburger = document.querySelector('.navImg');
const navMain = document.querySelector('.navMain');
const cancel = document.querySelector('.navImg2')
const allLinks = document.querySelectorAll('ul li')
const navbar = document.querySelector('nav')

hamburger.addEventListener('click', () => {
    NavFunc();
    iconFunc();
    navbar.classList.add('pos_fixed')

})

cancel.addEventListener('click', () => {
    NavFunc();
    iconFunc();
    navbar.classList.remove('pos_fixed')

})



allLinks.forEach(function(singleLink) {
    singleLink.addEventListener('click' ,() => {
        NavFunc();
        iconFunc();
    })
})

const NavFunc = () => {
    if(navMain.classList.contains('show')){
        navMain.classList.remove('show')
        
    } else {
        navMain.classList.add('show')
        
    }

}

const iconFunc = () => {
    if(hamburger.classList.contains('hideHam')){
        hamburger.classList.remove('hideHam')
        cancel.classList.remove('navImg22')
    } else {
        hamburger.classList.add('hideHam')
        cancel.classList.add('navImg22')
    }

}