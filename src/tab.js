let tabs = document.querySelectorAll('.tabs__toggle'),
	contents = document.querySelectorAll('.tabs__content')

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		contents.forEach((content) => {
			content.classList.remove('is-active')
		})
		tabs.forEach((tab) => {
			tab.classList.remove('is-active')
		})

		contents[index].classList.add('is-active')
		tabs[index].classList.add('is-active')
	})
})

$(document).ready(function () {
	$('.destinations__carusel').slick({
		arrows: true,
	})
})

const requestBtn = document.querySelector('#request-btn')

const modal = document.querySelector('#custom-modal')

const modalRequest = document.querySelector('#modal-request')
const requestCloseBtn = document.querySelector('#request-close-btn')
const submitBtn = document.querySelector('#modal-request-submit')

const modalThanks = document.querySelector('#modal-thanks')
const thanksCloseBtn = document.querySelector('#request-close-btn-thanks')

requestBtn.addEventListener('click', () => {
	addClass(modal)
	addClass(modalRequest)
})

requestCloseBtn.addEventListener('click', () => {
	removeClass(modal)
})

submitBtn.addEventListener('click', () => {
	removeClass(modalRequest)
	addClass(modalThanks)
	setTimeout(() => {
		removeClass(modal)
		removeClass(modalThanks)
	}, 5000)
})

thanksCloseBtn.addEventListener('click', () => {
	removeClass(modalThanks)
	removeClass(modal)
	removeClass(modalRequest)
})

function removeClass(selector) {
	selector.classList.remove('active')
}

function addClass(selector) {
	selector.classList.add('active')
}

const burger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')

burger.addEventListener('click', () => {
	burger.classList.toggle('is-active')
	navbar.classList.toggle('active')
})
