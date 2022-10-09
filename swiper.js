// инициализация Свайпера
const myImageSlider = new Swiper('.slider__container', {
	// НАСТРОЙКИ
	// пагинация
	pagination: {
		el: '.swiper-pagination',
		//БУЛЛЕТЫ 
		//Точки
		clickable: true,
		dynamicBullets: false, // соседние точки уменьшаются/увеличиваются
	},

	//Скролл (полоска)
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true // возможность перетаскивать ползунок
	},

	simulateTouch: true, // переключение перетаскиванием мыши
	grabCursor: true, // меняет стрелку на руку
	slideToClickedSlide: true, // свайп по щелчку на изображении

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// управление с помощью колеса мыши
	mousewheel: {
		sensitivity: 1, // чувствительность машины
		eventsTarget: '.slider__container' // класс объекта, на котором будет срабатывать прокрутка колесом (если много слайдеров, будут прокурчиваться все)
	},

	// автовысота
	autoHeight: true, // подстаривает слайдер под размер контента

	// кол-во показанных слайдов
	slidesPerView: 1.4, // можно указывать десятичные числа. (auto - автоматическая ширина + css)

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// отступ между слайдами в px
	spaceBetween: 40,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 0,

	// скорость прокрутки слайдов
	speed: 300,

	loop: true,

	// брейкпоинты (адаптив, ширина)
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 1.2,
			spaceBetween: 28,
		},
		992: {
			slidesPerView: 1.4,
			spaceBetween: 40,
		}
	},

});