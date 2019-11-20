# respons-tabs


to init 

####Javascript　

```javascript

new MyTabs({ 
    mainElem: '.YOUR_CLASS',  
    activeClass: 'YOUR_CLASS_active',  
    adaptive: true,  
    breakPoint: '768'  
});
```

####HTML code

```html
<section class="respons-tabs YOUR_CLASS">
        <div class="respons-tabs__menu">
            <div data-key="respons-tab_1" class="respons-tabs__menu-item YOUR_CLASS_active"></div>
            <div data-key="respons-tab_2" class="respons-tabs__menu-item"></div>
            <div data-key="respons-tab_3" class="respons-tabs__menu-item"></div>
            <div data-key="respons-tab_4" class="respons-tabs__menu-item"></div>
            <div data-key="respons-tab_5" class="respons-tabs__menu-item"></div>
        </div>
        <div class="respons-tabs__text">
            <div data-value="respons-tab_1" class="respons-tabs__text-item"></div>
            <div data-value="respons-tab_2" class="respons-tabs__text-item" style="display: none"></div>
            <div data-value="respons-tab_3" class="respons-tabs__text-item" style="display: none"></div>
            <div data-value="respons-tab_4" class="respons-tabs__text-item" style="display: none"></div>
            <div data-value="respons-tab_5" class="respons-tabs__text-item" style="display: none"></div>
        </div>
</section>
```
