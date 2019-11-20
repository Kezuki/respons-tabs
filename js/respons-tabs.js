new MyTabs({
    mainElem: '.jsRespons-tabs22',
    /* activeClass: 'respons-tabs__menu-item_active', */
    adaptive: true,
    breakPoint: '768'
});


function MyTabs(obj) {
    var _this = this;
    var breakPoint = obj.breakPoint || 768;

    _this.tab = document.querySelectorAll(obj.mainElem + ' .respons-tabs__menu-item');
    _this.text = document.querySelectorAll(obj.mainElem + ' .respons-tabs__text-item');
    _this.shift = function () {
        // переключение активного класса в табах
        for (i = 0; i < _this.tab.length; i++) {
            _this.tab[i].classList.remove(obj.activeClass);
        }
        this.classList.add(obj.activeClass);


        // переключение текста
        for (k = 0; k < _this.text.length; k++) {
            _this.text[k].style.display = "none";
        }

        var attrHref = this.dataset.key;
        var tab = document.querySelectorAll(obj.mainElem + ' [data-value="' + attrHref + '"]');

        for (k = 0; k < tab.length; k++) {
            tab[k].style.display = "block";
        }
    }

    _this.responsiveTabs = function () {

        // уменьшаем
        if (innerWidth <= breakPoint) {

            // проверка состояния дом чтобы не запускать выполнение цикла при любом ресайзе
            if (document.querySelectorAll(obj.mainElem + ' .respons-tabs__menu' + ' .respons-tabs__text-item').length == 0) {

                for (var i = 1; i <= document.querySelectorAll(obj.mainElem + ' .respons-tabs__menu-item').length; i++) {
                    var key = document.querySelector(obj.mainElem + ' [data-key=respons-tab_' + i + ']');
                    var value = document.querySelector(obj.mainElem + ' [data-value=respons-tab_' + i + ']')
                    key.after(value);
                }
            }
        } else {
            // увеличиваем 
            // проверка состояния дом чтобы не запускать выполнение цикла при любом ресайзе
            if (document.querySelectorAll(obj.mainElem + ' .respons-tabs__text' + ' .respons-tabs__text-item').length == 0) {

                for (i = 1; i <= document.querySelectorAll(obj.mainElem + ' .respons-tabs__menu-item').length; i++) {
                    var text = document.querySelector(obj.mainElem + '> .respons-tabs__text');
                    var value = document.querySelector(obj.mainElem + ' [data-value=respons-tab_' + i + ']')
                    text.append(value);
                }
            }
        }
    };

    // tab click function 
    for (i = 0; i < _this.tab.length; i++) {
        _this.tab[i].addEventListener('click', _this.shift);
    }


    // адаптив 

    if (obj.adaptive === true) {
        _this.responsiveTabs()
        window.onresize = _this.responsiveTabs;
    }
}