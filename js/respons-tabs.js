new MyTabs({
    mainElem: '.jsRespons-tabs22',
    activeClass: 'respons-tabs__menu-item_active',
    adaptive: true,
    breakPoint: '768'
});


function MyTabs(obj) {
    var _this = this;

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

    // tab click function 
    for (i = 0; i < _this.tab.length; i++) {
        _this.tab[i].onclick = _this.shift;
    }


    // адаптив 

    if (obj.adaptive === true) {

        // проверка параметра breakPoint
        if (obj.breakPoint === typeof obj.breakPoint !== 'number') {
            obj.breakPoint = 768
        }

        function responsiveTabs() {

            if (innerWidth <= obj.breakPoint) {

                // проверка состояния дом чтобы не запускать выполнение цикла при любом ресайзе
                if (document.querySelectorAll(obj.mainElem + ' .respons-tabs__menu' + ' .respons-tabs__text-item').length == 0) {

                    for (var i = 1; i <= document.querySelectorAll(obj.mainElem + ' .respons-tabs__menu-item').length; i++) {
                        $(obj.mainElem + ' [data-key=respons-tab_' + i + ']').after($(obj.mainElem + ' [data-value=respons-tab_' + i + ']'));
                    }
                }
            } else {

                // проверка состояния дом чтобы не запускать выполнение цикла при любом ресайзе
                if (document.querySelectorAll(obj.mainElem + ' .respons-tabs__text' + ' .respons-tabs__text-item').length == 0) {

                    for (i = 1; i <= document.querySelectorAll(obj.mainElem + ' .respons-tabs__menu-item').length; i++) {

                        $(obj.mainElem + '> .respons-tabs__text').append($(obj.mainElem + ' [data-value=respons-tab_' + i + ']'));
                        
                    }
                }
            }
        };

        responsiveTabs();

        $(window).on('resize', function () {
            responsiveTabs();
        });
    }
}