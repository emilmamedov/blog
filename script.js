document.querySelector('.hamburger').addEventListener('click', function(event) {
    const mobMenu = document.querySelector('.mob_menu');
    if (mobMenu) {
        mobMenu.classList.toggle('active');
    }
    // Останавливаем всплытие события, чтобы оно не сработало на document
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    const mobMenu = document.querySelector('.mob_menu');
    if (mobMenu && mobMenu.classList.contains('active')) {
        // Убираем класс active, если клик вне меню
        mobMenu.classList.remove('active');
    }
});

document.querySelectorAll('.footer__row-title').forEach(title => {
    title.addEventListener('click', function() {
        const wrapper = this.closest('.footer__row-wrapper');
        
        // Закрываем все остальные аккордеоны
        document.querySelectorAll('.footer__row-wrapper').forEach(otherWrapper => {
            if (otherWrapper !== wrapper) {
                otherWrapper.classList.remove('open');
            }
        });

        // Переключаем текущий аккордеон
        if (wrapper) {
            wrapper.classList.toggle('open');
        }
    });
});
