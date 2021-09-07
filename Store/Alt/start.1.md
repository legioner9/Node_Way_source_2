Добавление репозитория Sisyphus

1. Обновите из репозитория для своего дистрибутива пакеты rpm и apt

apt-get update
apt-get dist-upgrade

Установите утилиту apt-repo, если она ещё не установлена

apt-get install apt-repo

2. Подключите источники Sisyphus и выключите другие репозитории:

apt-repo rm all
apt-repo add sisyphus

3. Поставьте оттуда apt и обновите всю систему:

apt-get -o APT::Cache-Limit=$(( 1024 * 1024 * 1024 / 2 )) update
apt-get install apt
apt-get dist-upgrade

Оригинал: https://www.altlinux.org/Branches/Sisyphus