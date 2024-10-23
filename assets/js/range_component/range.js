



class Range {

    Range_gorizontal (
        id, // селектор элемента
        data,  // обект с настройками 
        store_variable, // переменная куда буду схоранять значение | ссылка на метод в храниилище
    ) {
        let hesh = new Date()
        hesh = hesh.getTime()
        let input_id = 'input_'+hesh; // уникальный input id

        // расчитываю step, входное значение в процентах
        data._step = data._max / ((data._step / 100 ) * data._max);
        
        $(id).html(`
            <input class="_range" id="${input_id}" type="range" min="${data._min}" value="${data._val}" max="${data._max}" >
            <div class="range__items"></div>
            <div class="range__labels calc__row"></div>  
            <div class="tooltip"><span></span></div>
        `);

        
        // ПОЛОСКИ  начало

        function renderSpan() { // отрисовывает полоски
            if(!data._line_span.active) {
                $(`${id} > .range__items`).hide();
                return 
            }
            // определяю  активные ли они
            let active_class = '';
            let valStep = data._max / data._step;
            let span_line = '';
            $(id).find('.range__items').html('');
            for( let i = 0; i <= data._step; i++) {

                let val_input = $(id).find('input').val();
                
                if( val_input >= valStep*i) {
                    active_class = 'active';
                } else {
                        active_class = '';
                }
                // рисую полоски 
                span_line += ` <span class="range__item ${active_class}" value="${valStep*i}"><i style="height: " ></i></span> `;
            }
            $(id).find('.range__items').html(span_line);  
                
        } renderSpan();

        $(id).find(`#${input_id}`).on( "input", function() {
           
            // обновляю элементы 
            renderSpan();
            renderToolTip();
            render_labels();
        });
        // обрабатываю клики по нижним полоскам (span)
        $(id).on( "click", "span", function() {
            $(id).find(`#${input_id}`).val($(this).attr('value')) // сохраняю записанное значение

            // активирую и дезактивирую нижние элементы
            $(id).find('.range__item').removeClass("active");
            $(this).addClass("active");

            // обновляю элементы 
            renderSpan();
            renderToolTip();
            render_labels();
            
        });
        // ПОЛОСКИ конец
        
        
        // ВЫВОД ЦИФР НАЧАЛО
        function render_labels() {
            if(!data._labels.active) { 
                $(`${id} > .range__labels`).hide();
                return 
            }
            let labels = Math.round(data._max / data._labels.mount_labels)+1;
            if(data._max / data._labels.mount_labels) {

            }
            let label_size = data._labels.mount_labels;
            let labels_text = '';
            let active_class = '';

            for(let i = 0; i < labels; i++) {

                let val_input = $(id).find(`#${input_id}`).val();
                
                if( val_input >= label_size*i) {
                    active_class = 'active';
                } else {
                        active_class = '';
                }

                labels_text += `<span class="${active_class}" value="${label_size*i}">${label_size * i}м.</span>`;
            }
            
            $(id).find('.range__labels').html(labels_text);
        }
        renderToolTip();
        render_labels();
        // ВЫВОД ЦИФР КОНЕЦ

        function renderToolTip () {
            if(!data._toolTip.active) { 
                $(`${id} > .tooltip`).hide();
                return 
            }
            let step = data._max / 100;

            let input_val = $(id).find(`#${input_id}`).val();
            let padding = (input_val / step) ;
            $(`${id} > .tooltip`).find('span').html(input_val);
            $(`${id} > .tooltip`).css("left", `${padding}%`);
            
        }
        
    }

    range_vertical(id, data ) {

        let active_value = data._active_value;
        // расчитываю step, входное значение в процентах
        data._step = data._max / ((data._step / 100 ) * data._max);
        // console.log('data._step ',data._step);

        // отрисовываю компонент
        $(id).html(`
            <div class="range_vertical__input">
                <div class="tooltip noselect"><span class=""></span> </div>
                    <div class="range_vertical__input--value"></div>
                </div>
                <div class="range_vertical__input--field">
                <div class="range_vertical__items"></div>
            </div>
        `);

        function render_items() {
            let items = ``;
            let active_class = active_value || 0;
       
            for(let i = 0; i < data._values.length; i++) {
                //  console.log('active_value ',data._values[active_value])
                //  console.log('data._values[i] ',data._values[i])
                 let _active_value = data._values[active_value];
                 let _data_value = data._values[i]
                // проверка на активный элемент
                if(_active_value >= _data_value) {
                    active_class = 'range_vertical__item--active';
                } else  active_class = '';
                items += `
                    <div class="range_vertical__item ${active_class}" value="${i}">
                        <div class="range_vertical__line"></div>
                        <div class="range_vertical__label">${data._values[i]}</div>
                    </div>
                `;
            }

            $(id).find('.range_vertical__items').html(items);
        } render_items();

        // function render_range() {
        //     let col_vlues = data._values.length; // узнаю клоичество шагов
        //     let stap = 100 / col_vlues;  // узнаю в процентах высоту одного шага 
        //     let _active_value = Number(active_value)+1; // узнаю какой сейчас актинвый шаг
            
        //     console.log('_active_value ', _active_value)
        //     console.log('stap ', stap * (_active_value+1))
        //     $(id).find('.range_vertical__input--value').css( "height",  stap * _active_value +'%' )
        // } render_range();
      
        // обрабатываю клики по нижним полоскам (span)
        $(id).on( "click", ".range_vertical__item", function() {

            active_value = $(this).attr('value');
            // console.log('val revert',$(this).attr('value'))
            // $(id).find(`#${input_id}`).val($(this).attr('value')) // сохраняю записанное значение

            // активирую и дезактивирую нижние элементы
            $(id).find('.range_vertical__item').removeClass("range_vertical__item--active");
            $(this).addClass("range_vertical__item--active");

            // обновляю элементы 
            render_items();
            renderToolTip();
        });
        // ПОЛОСКИ конец
    

        function renderToolTip () {
            if(!data._toolTip.active) { 
                $(`${id} > .tooltip`).hide();
                return 
            }
            let _active_value = data._values[active_value];
            let step = 100 / (data._values.length-1);
            let padding = 0;

            if(active_value == 0 ){ 
                padding = 0;
            } else {
                padding = step * (active_value);
            }
            
      
            $(id).find('.tooltip').find('span').html(_active_value);
            $(id).find('.tooltip').css("bottom", `${step}%`);
        } renderToolTip()
        
            $(id).on( "mousedown", '.tooltip', function() { 
                let old_data = [];
                $( id ).on( "mousemove", '.tooltip', function( event ) {
               
            
            
                    if(old_data == 0) { old_data.push(event.pageY)}
                    console.log('old_data ',event.pageY)
                    if(event.pageY > old_data) {
                        console.log('меньше ',event.pageY > old_data);
                    } else if (event.pageY <= old_data) {
                        console.log('больше event.pageY < old_data ',event.pageY < old_data);
                    }
                    $( id ).find("span").text(event.pageY); 
                    old_data.push(event.pageY);
                    var msg = "Handler for `mousemove` called at ";
                    msg += event.pageX + ", " + event.pageY;

                })
                console.log('mousemove')
               
                //console.log( "<div>" + msg + "</div>" );
            }); 
      
    }
}
