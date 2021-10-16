
"use strict";
// Спойлер
window.acc=(e)=>{
   let q=document.querySelectorAll("._acc"),
       w=document.querySelectorAll("._accD");
     q.forEach((e2,l)=>{
        if(e==e2){   
            
           if(!e.classList.contains("_active")){
               e.classList.add("_active");
               w[l].classList.remove("_hidden");
           }else{
               e.classList.remove("_active");
               w[l].classList.add("_hidden");
           }
       }
   })
};
// Меню Бургер
const iconMenu = document.querySelector('.icon-menu');
const bodyMenu = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener (
		"click", function (e) {
	document.body.classList.toggle('_lock');
	iconMenu.classList.toggle('_active');
	bodyMenu.classList.toggle('_active');
});
}
// Плавная прокрутка
const menuLinks = document.querySelectorAll('.menu__link[data-goto]'); /* Ищем menu__item где есть data-goto*/
if (menuLinks.length > 0){/*Если есть проходим по их списку и по клику вызываем функцию onMenuLinkClick */
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});
	
	function onMenuLinkClick (e) {
		const menuLink = e.target; /* Выбираем целевой объект на который мы кликнули то есть наш пункт меню (ссылка)*/
		/*Проверить заполнен ли data-goto атрибут и существует ли объект, на который он ссылается */
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
			//- document.querySelector('header').offsetHeight; должна быть высота шапки, но ее здесь нет
			// так как main-block фулл скриновый				
			//gotoBlock.getBoundingClientRect().top это Y-координата блока относительно окна браузера
			//scrollY это новый вариант pageYOffset это количество прокрученных пикселей

			// Закрывать меню Бургер при клике
			// Если меню Бургер активно
			if(iconMenu.classList.contains('_active')) {
			// Удалить все добавленные ранее классы
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				bodyMenu.classList.remove('_active');
			}
         
			window.scrollTo({ /*Прокрутить к верху блока, указанного в data-goto в html плавно*/
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault(); /*Чтобы отключить href для ссылки*/
		}
	}
}

function testWebP(callback) {
var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

}

testWebP(function (support) {
if (support == true) { document.querySelector('body').classList.add('webp'); }else{ document.querySelector('body').classList.add('no-webp'); }

});

function _ibg(){
let _ibg=document.querySelectorAll("._ibg"); for (var i = 0; i < _ibg.length; i++) { if(_ibg[i].querySelector('img')){ _ibg[i].style.backgroundImage = 'url('+_ibg[i].querySelector('img').getAttribute('src')+')'; } }

}

_ibg();