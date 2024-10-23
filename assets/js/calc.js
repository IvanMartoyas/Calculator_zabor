
$( document ).ready(function() {

    // Общие параметры начало
    // Длина периметра начало 
    $("#size_perimetr").find('.calc__title').text(data_calc.general_parameters.size_perimetr.title);
    $("#size_perimetr").find('.calc__fild').val(data_calc.general_parameters.active_parametrs.size_perimetr);
    $("#size_perimetr").find('.calc__content').find('input').attr('min', data_calc.general_parameters.size_perimetr.value.min);
    $("#size_perimetr").find('.calc__content').find('input').attr('max', data_calc.general_parameters.size_perimetr.value.max);
    // $("#size_perimetr").find('.calc__content').find('input').attr('step', data_calc.general_parameters.size_perimetr.value.step);
    
    let size_perimetr_input_number = $("#size_perimetr").find('.calc__fild');
    let size_perimetr_input_range = $("#size_perimetr").find('.calc__content').find('input');

    // сихронизация данных
    size_perimetr_input_number.on( "input", function() {
        data_calc.general_parameters.active_parametrs.size_perimetr = $(this).val();
        $('.size_perimetr').find('input').val($(this).val());
        size_perimetr_input_range.val($(this).val());
    });
    size_perimetr_input_range.on( "input", function() {
        data_calc.general_parameters.active_parametrs.size_perimetr = $(this).val();
        size_perimetr_input_number.val($(this).val());
    });
    // Длина периметра конец

    // Высота забора конец
    $("#height_fance").find('.calc__title').text(data_calc.general_parameters.height_fance.title);
    $("#height_fance").find('.calc__fild').val(data_calc.general_parameters.active_parametrs.height_fance);

    const range = new Range();
    range.Range_gorizontal('.size_perimetr', {
        _min: data_calc.general_parameters.size_perimetr.value.min,
        _max: data_calc.general_parameters.size_perimetr.value.max,
        _step: data_calc.general_parameters.size_perimetr.value.step,
        _val: data_calc.general_parameters.active_parametrs.size_perimetr,
        _line_span: {
            active: true,
        },
        _labels: {
            active: true,
            mount_labels: 125
        },
        _toolTip: {
            active: true
        }
    })

    // сохраняю значение
    $('.size_perimetr').on( "input", "input", function() {
        console.log('input submit ',$(this).val())
        $("#size_perimetr").find('.calc__fild').val($(this).val());
    })
    
    
    range.Range_gorizontal('#range_1', {
        _min: 0,
        _max: 1000,
        _step: 15,
        _val: 400,
        _line_span: {
            active: true,
        },
        _labels: {
            active: true,
            mount_labels: 250
        },
        _toolTip: {
            active: true
        }
    })

    
    // range.range_vertical('.range_vertical', {
    //     _values: data_calc.general_parameters.height_fance.values,
    //     _active_value: 1,
    //     _line: {
    //         active: true,
    //     },
    //     _toolTip: {
    //         active: true
    //     }
    // })
})

    // colors начало
    const general_parameters_colors = new Colors();
    general_parameters_colors.renderColorPicker(
        '#general_parameters_colors', {
            _active_index: data_calc.general_parameters.active_parametrs.collor_active_index || 0,
            _colors_list: data_calc.general_parameters.colors,
        },
    )
    $('#general_parameters_colors').on('_change', function(e, index) { 
        data_calc.general_parameters.active_parametrs.collor_active_index = index;

        // вывожу в статистику занчение цветов
        let color_active_GP = data_calc.general_parameters.colors[data_calc.general_parameters.active_parametrs.collor_active_index];
        $("#statistic_color_fance").attr('style', `background: ${color_active_GP.value}` );
    });
    
 
    // colors конец

    // statistic
    $("#statistic_size_preimetr").html( data_calc.general_parameters.active_parametrs.size_perimetr + ' метров');
    $("#statistic_height_fance").html(data_calc.general_parameters.active_parametrs.height_fance +  ' метра');
    let color_active_GP = data_calc.general_parameters.colors[data_calc.general_parameters.active_parametrs.collor_active_index];
    $("#statistic_color_fance").attr('style', `background: ${color_active_GP.value}` );
    // .html( + ' метра');
// Общие параметры конец

