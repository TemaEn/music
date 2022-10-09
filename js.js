'use strict';

const animItems = document.querySelectorAll('._anim-items'); // классы с анимированными элементами

if (animItems.length > 0) {
	document.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight; // получаем высоту объекта
			const animItemOffset = offset(animItem).top; // позиция элемента относительно верха страницы
			const animStart = 6; // коэф, регулирующий момент старта анимации (1/4 высоты объекта, или 1/4 высоты браузера, если объект больше высоты браузера)

			// настройка момента старта
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) { // запрещаем повторную анимацию
					animItem.classList.remove('_active');
				}
			}
		}
	}
	// функция считающая позицию элемента относительно верха страницы (или cлева)
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300)
}