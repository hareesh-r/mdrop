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
	loop:true,
	margin:10,
	autoplay:true,
	responsive:{
	  0:{
		items:1
	  },
	  600:{
		items:3
	  },
	  1000:{
		items:5
	  }
	}
  })