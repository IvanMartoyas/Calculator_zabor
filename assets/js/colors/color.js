// генерирует блок с выбором цветов
class Colors {
    renderColorPicker(id, data, index) {
        let color_index = data._active_index;
        let test = 'fasdfsdaf';

        $(id).html(`
            <div class="calc__row colors">
                <div class="colors__selected border-right calc__rowItem">
                    <div class="calc__title">Цвет ограждения</div>
                    <div class="calc__subTitle">Текущий цвет</div>
                    <div class="calc__row colors__selectItem">
                        <div class="colors__select"></div>
                        <div class="colors__value"></div>
                    </div>
                </div>
                <div class="calc__rowItem">
                    <div class="calc__title">Выбрать другой цвет</div>
                    <div class="calc__subTitle">Стандартные цвета</div>
                    <div class="calc__row colors__items"></div>
                </div>
            </div>
        `);

        // $(id).on('customevent', function(e) { });
        
        // заполняю список цветов для выбора
        data._colors_list.forEach((element , i) => {
            $(id).find('.colors__items').append(`<div class="colors__item" style="background-color: ${element.value}" id="${i}" title="${element.title}"></div>`)
            
        });
        
        // указываю активный цвет
        $(id).find('.colors__value').html(data._colors_list[color_index].title);
        $(id).find('.colors__select').attr('style', `background: ${data._colors_list[color_index].value}` );

        
        // делаю обрабодку кликов по цветам
        $(id).find('.colors__items').on('click', '.colors__item', function() {
            // возвращаю значение при изменении переменной
            $(id).trigger('_change',[$(this).attr('id')]);

            color_index = $(this).attr('id');
            let active_color = data._colors_list[$(this).attr('id')];
            
            $(id).find('.colors__select').attr('id', $(this).attr('id'));
            $(id).find('.colors__select').attr('style', `background: ${active_color.value}` );
            $(id).find('.colors__value').html(active_color.title);
        })
       
    }
}