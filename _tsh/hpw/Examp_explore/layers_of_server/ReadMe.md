## layers_of_server

Education/TSH_video/Timur_Video_vebinars/Up_mind/AbstractionLayers-master
README.md

10. Модули, слои, структура проекта, песочницы в JavaScript и Node.js
23 min

## Описание

Цель: научиться разделять слои абстракций и декомпозировать смешанный код.

## Файлы

* `badServer.js` - пример плохого стиля программирования, все в одном файле,
в одной функции, слои абстракции идут вперемешку.
* `goodServer.js` - пример более хорошего стиля программирования.

## Запуск

Из командной строки можно запустить `node badServer` и `node goodServer`,
для linux/unix систем, нужно использовать `sudo node badServer` и
`sudo node goodServer` потому, что HTTP сервер открывает `TCP 80` порт,
а для всех портов до `1024` нужно иметь специальные права.

## Задания

Нужно понять, что делает `badServer.js` и 

1. Data access layer (file stuctures)
2. Serializer/deserializer
3. HTTP server
3.1. Caching
3.2. Cookie parser
3.3. Buffer piping
3.4. Logging
3.5. Routing
4. Domain specific business logic
5. Dependency manipulations
6. Config
7. Templating

Вы можете выбрать минимум одно задание из предложенных, сделать себе форк этого
репозитория и написать код в своей ветке. Если кого-то задания окажутся
простыми, то переходите к дополнительным.

1. Пробросить в контекст приложения `setTimeout` и `setInterval` и использовать
их, выводя `console.log()` с таймера

2. Пробросить в контекст приложения библиотеку `util` и сделать вызовы
нескольких ее функций из приложения

