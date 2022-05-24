// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Mega menu
    document.addEventListener('click' , documentActions);

    function documentActions(e) {
        const targetElement = e.target;
        const subMenus = document.querySelectorAll('._submenu-open');

        subMenus.forEach(function (item) {
            item.classList.remove('_submenu-open');
        });
        


        if (targetElement.parentElement.classList.contains('has-children')) {
            e.preventDefault();            
            targetElement.parentElement.classList.toggle('_submenu-open');
           
        }
        
    }
// Megamenu End


//Masonry reviews block

var elem = document.querySelector('.reviews__wrap');
var msnry = new Masonry( elem, {
  itemSelector: '.reviews__item',
  columnWidth: '.reviews__item',
  percentPosition: true,
  gutter: 30
});

//End masonry reviews block

// Animation 

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}


// End Animation