var btnMenu = document.getElementById('btn-menu');
var menu = document.getElementsByClassName('menu')[0];

var MENU_VISIBLE = "menu-visible";
var MENU_INVISIBLE = "menu-invisible";

var flag = false;
btnMenu.onclick = function () {

	if (flag) {
		menu.classList.remove(MENU_VISIBLE);
		menu.classList.add(MENU_INVISIBLE);
		flag = false;
		btnMenu.style.cssText += "color: #60606E;";
	} else {
		menu.classList.remove(MENU_INVISIBLE);
		menu.classList.add(MENU_VISIBLE);
		btnMenu.style.cssText += "color: #7BEEC7;";
		flag = true;
	}

};

var filter = document.getElementsByClassName('filter');

var flag = false;
filter.onclick = function () {

	if (flag) {
		flag = false;
		btnMenu.style.cssText += "background-color: #7BEEC7;";
	} else {
		flag = true;
		btnMenu.style.cssText += "background-color: transparent;";
	}

};

$(function(){

  $('#container').mixItUp({
		selectors: {
			target:'.mix',
			filter:'.filter',
			sort:'.sort'
		},
		load: {
			filter:'all',
			sort:'myorder:desc'
		},
		
		animation: {
			duration:300,
     		animateResizeContainer: false,
     		effects: 'fade rotateX(-45deg) translateY(-10%)'
		},

  });
});
