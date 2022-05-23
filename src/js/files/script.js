// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



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


var elem = document.querySelector('.reviews__wrap');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.reviews__item',
  columnWidth: '.reviews__item',
  percentPosition: true,
  gutter: 30
});