enum_colors_fences = [ // цвета ограждения 
    {
        id: 0,
        title: 'Green',
        value: '#008000'
    },
    {
        id: 1,
        title: 'Reed',
        value: '#73140b'
    },
    {
        id: 2,
        title: 'Gray',
        value: '#d2d2d2',
    },
];

const data_calc = { // основные данные
    general_parameters: { // ообщие параметры
        colors: enum_colors_fences,
        size_perimetr: {
            title: 'Длина периметра (м).',
            descrition: 'Длина периметра (м).',
            value: {
                val: 0,
                min: 0,
                step: 5,
                max: 500
            }
        },
        height_fance: {
            title: 'Высота забора (мм.)',
            descrition: 'Высота забора (мм.)',
            values: [
                1530,
                1730,
                2030,
                2430,
            ]
        },
        active_parametrs: { // сюда сохраняю выбранные значения
            collor_active_index: 0,
            size_perimetr: 350,
            height_fance: 1.8,
        }
    },
    size_panel: { // Размер панели
        type_fance: [
            {
                title: '3Д забор',
                descrition: 'Панель с V- образными изгибами',
                img: '',
                params: {
                    height: {
                        title: 'Высота (мм.)',
                        value: {
                            min: 1530,
                            max: 2430,
                            stap: [1530, 1730, 2030, 2430]
                        }
                    },
                    bar_diameter: {
                        title: 'Диаметр прутка (мм).',
                        value: {
                            stap: [3, 3.6, 4, 5, 6]
                        }
                    },
                    cell_size: { // 
                        title: 'Размер ячейки (мм).',
                        value: {
                            tap: ['55x200']
                        }
                    },
                },
            },
            {
                title: '2Д Ограда',
                descrition: 'Устойчивость к горизонтальным нагрузкам',
                img: '',
                params: {
                    height: {
                        title: 'Высота (мм.)',
                        value: {
                            min: 1530,
                            max: 2430,
                            stap: [1530, 1730, 2030, 2430]
                        }
                    },
                    bar_diameter: {
                        title: 'Диаметр прутка (мм).',
                        value: {
                            stap: ['6/5/6', ' 8/6/8']
                        }
                    },
                    cell_size: { // 
                        title: 'Размер ячейки (мм).',
                        value: {
                            stap: ['55x200']
                        }
                    },
                },
            },
            {
                title: 'Техограда',
                descrition: 'Модульное профильное ограждение',
                img: '',
                params: {
                    height: {
                        title: 'Высота (мм.)',
                        value: {
                            min: 1530,
                            max: 2430,
                            stap: [1530, 1730, 2030, 2430]
                        }
                    },
                    type_fences: {
                        value: 'Безопасная ', //'c выпуском'
                    },
                    size_verticle: {
                        title: 'Расстояние вертикальными рейками (мм.) (шаг заполнения)',
                        stap: [100, 125, 150]
                    }
                }
            },
        ],
        sction_size: [
            {
                value: 2500,
            },
        ],
        colors: enum_colors_fences,

    },
    version_pillar: {// Вариант исполнения столба

    },

}