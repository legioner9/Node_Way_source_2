# From  Education\htmlbook.ru\content\

## favicon 
<link type="image/png" sizes="256x256" rel="icon" href="…/favicon-256x256.png">

## description (описание)
<meta name="description" content="Сайт об HTML и создании сайтов"> 
## keywords (ключевые слова)
<meta name="Keywords" content="HTML, META, метатег, тег, поисковая система">
## redirect 
<meta http-equiv="refresh" content="5; URL=http://www.htmlbook.ru">
if url empty only refresh every 5 second
1em is equal to the font size of its parent 

## relative units
em - the height of current item (css::font-size)
ex - the height of current symbol x 
px - pixels

## absolute units 
in - inch (2.54 cm)
cm - centimeter
mm - millimeter
pt - inch/72
pc - inch/6 = 12*pt

## .htaccess in S_1

`DirectoryIndex index.html index.htm` - run files by default

`Options -Indexes` - if that .htaccess in folder - user will receive `error 403`

`ErrorDocument 404 /err404.html` - err404.html in root dir

## color 16 bit S_1
<body bgcolor="#FA8E47">
