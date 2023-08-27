const feautersDropdown = document.querySelector('.feauters-dropdown')
const feautersContent = document.querySelector('.feauters-content')
const feautersBtn = document.querySelector('.feautersBtn')
const arrowDown = document.querySelector('.arrow-down')
const arrowUp = document.querySelector('.arrow-up')

const companyDropdown = document.querySelector('.company-dropdown')
const companyContent = document.querySelector('.company-content')
const companyBtn = document.querySelector('.companyBtn')
const arrowDownSecond = document.querySelector('.arrow-down2')
const arrowUpSecond = document.querySelector('.arrow-up2')

const feautersBtnMobile = document.querySelector('.feautersBtnMobile')
const feautersContentMobile = document.querySelector('.feauters-content-mobile')
const arrowDownMobile = document.querySelector('.arrow-down-mobile')
const arrowUpMobile = document.querySelector('.arrow-up-mobile')

const companyBtnMobile = document.querySelector('.companyBtnMobile')
const companyContentMobile = document.querySelector('.company-content-mobile')
const arrowDownMobileSecond = document.querySelector('.arrow-down2-mobile')
const arrowUpMobileSecond = document.querySelector('.arrow-up2-mobile')

const mobileMenu = document.querySelector('.mobile-menu')
const openMenu = document.querySelector('.mobile-open-menu')
const closeMenu = document.querySelector('.mobile-close-menu')

const openMenuOnClick = () => {
    mobileMenu.classList.remove('hidden')
    openMenu.classList.add('hidden')
    closeMenu.classList.remove('hidden')
}

const closeMenuOnClick = () => {
    mobileMenu.classList.add('hidden')
    openMenu.classList.remove('hidden')
    closeMenu.classList.add('hidden')
}

const feautersMobileOnClick = () => {
    feautersContentMobile.classList.toggle('hidden')
    arrowDownMobile.classList.toggle('hidden')
    arrowUpMobile.classList.toggle('hidden')
}

const companyMobileOnClick = () => {
    companyContentMobile.classList.toggle('hidden')
    arrowDownMobileSecond.classList.toggle('hidden')
    arrowUpMobileSecond.classList.toggle('hidden')
}

const feautersOnClick = () => {
    feautersDropdown.classList.toggle('show')
    feautersContent.classList.toggle('show')
    feautersContent.style.top = '32px'
    arrowDown.classList.toggle('hidden')
    arrowUp.classList.toggle('hidden')
}

const companyOnClick = () => {
    companyDropdown.classList.toggle('show')
    companyContent.classList.toggle('show')
    companyContent.style.top = '32px'
    arrowDownSecond.classList.toggle('hidden')
    arrowUpSecond.classList.toggle('hidden')
}

openMenu.addEventListener('click', openMenuOnClick)
closeMenu.addEventListener('click', closeMenuOnClick)
feautersBtn.addEventListener('click', feautersOnClick)
companyBtn.addEventListener('click', companyOnClick)
feautersBtnMobile.addEventListener('click', feautersMobileOnClick)
companyBtnMobile.addEventListener('click', companyMobileOnClick)