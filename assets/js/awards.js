const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const homeBtn = document.querySelector('.homeBtn');
menuBtn.onclick = () => {
	navbar.classList.add('show');
	menuBtn.classList.add('hide');
	body.classList.add('disabled');
};
cancelBtn.onclick = () => {
	body.classList.remove('disabled');
	navbar.classList.remove('show');
	menuBtn.classList.remove('hide');
};
homeBtn.onclick = () => {
	body.classList.remove('disabled');
	navbar.classList.remove('show');
	menuBtn.classList.remove('hide');
};
window.onscroll = () => {
	this.scrollY > 20
		? navbar.classList.add('sticky')
		: navbar.classList.remove('sticky');
};
$('.brand-carousel').owlCarousel({
	loop: true,
	margin: 10,
	autoplay: 300,
	smartSpeed: 300,
	slideSpeed: 300,
    paginationSpeed: 500,
    singleItem: true,
    navigation: true,
    scrollPerPage: true,
	responsive: {
		0: {
			items: 3
		},
		600: {
			items: 5
		},
		1000: {
			items: 7
		}
	}
})