ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.927004, 30.414413],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        /// Добавляем свою иконку
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([59.927004, 30.414413], {
            hintContent: 'Комфорт Плюс: газовые котлы и колонки',
            balloonContent: 'Комфорт Плюс: газовые котлы и колонки',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/logo-map-w.png',
            // Размеры метки.
            iconImageSize: [38, 38],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-19, -19],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);


    // Отключаем лишний скрол
    var events = ['scrollZoom','drag','dblClickZoom','multiTouch'];

    myMap.behaviors.disable(events);

    var activeMapButton = new ymaps.control.Button({
        data: {
            content: "Акт. карту"
        },
        options: {
            position: {
                right: 10,
                top: 50
            },
            maxWidth: [200]
        }
    });

    activeMapButton.events.add('click', function (e) {

        var target = e.get('target');
        var text = 'Акт. карту';

        if ( target.data.get('content') == text ) {
            text = 'Деакт. карту';
            myMap.behaviors.enable(events);
        } else {
            myMap.behaviors.disable(events);
        }

        target.data.set('content', text);

        t = target;

    });

    myMap.controls.add(activeMapButton);

});