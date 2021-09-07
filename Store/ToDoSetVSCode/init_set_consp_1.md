## [Редактор кода Visual Studio Code](https://habr.com/ru/post/490754/)

##  [Самый подробный гайд по настройке и установке плагинов для начинающих](https://habr.com/ru/post/490754/)

### Autosave

"files.autoSave": "afterDelay",

### Запуск на слабой машине

    "C:\Users\79059\AppData\Local\Programs\Microsoft VS Code\Code.exe" --disable-gpu


### [VS Code: вам не нужно это расширение](https://techrocks.ru/2020/08/06/vs-code-extensions-vs-settings/)




    %APPDATA% = C:\Users\79059\AppData\Roaming\
    %APPDATA%\Code\User\settings.json



### Edit default terminal    

![](src/wsW4ig2.png)

![](src/XXy9VGm.png)

## VSCode for js

### [Как настроить VS Code для увеличения продуктивности](https://techrocks.ru/2019/03/31/vs-code-customization/)

### Запуск из командной строки
Хорошо бы иметь возможность запускать VS Code из терминала. Для этого нажмите CMD + SHIFT + P, введите shell command и выберите Install code command in path. После чего перейдите в любой проект из терминала и, находясь в выбранной директории, введите «code .», чтобы запустить проект с помощью VS Code.

### Pragmata 

    "editor.fontFamily": "'Pragmata Pro Mono',Consolas, 'Courier New', monospace"

### 1. Auto Import

### Bracket Pair Colorizer

### Markdown All in One

### Instant Markdown 

http://localhost:8090

### Markdown TOC

### Colorful Comments

- Red (!)
- Blue (?)
- Green (*)
- Yellow (^)
- Pink (&)
- Purple (~)
- Mustard (todo)
- Grey (//)

    "colorful-comments.tags": [
    {
        "tag": "!",
        "color": "#FF2D00",
        "strikethrough": false,
        "backgroundColor": "transparent",
        "bold": false,
        "italic": false
    },
    {
        "tag": "?",
        "color": "#0076FF",
        "strikethrough": false,
        "backgroundColor": "transparent",
        "bold": false,
        "italic": false
    },
    {
        "tag": "//",
        "color": "#474747",
        "strikethrough": true,
        "backgroundColor": "transparent",
        "bold": false,
        "italic": false
    },
    {
        "tag": "^",
        "color": "#EAF622",
        "strikethrough": false,
        "backgroundColor": "transparent",
        "bold": false,
        "italic": false
    },
    {
        "tag": "*",
        "color": "#28FF00",
        "strikethrough": false,
        "backgroundColor": "transparent",
        "bold": false,
        "italic": false
    },
    {
        "tag": "&", 
        "color": "#FF06A0",
        "strikethrough": false,
        "backgroundColor": "transparent",
        "bold": false,
        "italic": false
    },
    {
        "tag": "~",
        "color": "#BE00FF",
        "strikethrough": false,
        "backgroundColor": "transparent",
        "bold": false,
        "italic": false
    },
    {
        "tag": "todo",
        "color": "#FF8C00",
        "strikethrough": false,
        "backgroundColor": "transparent",
        "bold": false,
        "italic": false
    }
    ]

### 2. Add jsdoc comments

### 3. ESDoc MDN

![](src/ESDoc-MDN.png)

### [4. CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)

### [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)


### keybindings.json 
%APPDATA% = C:\Users\79059\AppData\Roaming\
%APPDATA%\Code\User\keybindings.json

### Как перезапустить VScode после редактирования конфигурации расширения?



```json  
[
    {
        "key": "shift+f1",
        "command": "workbench.action.reloadWindow",
        "when": "editorTextFocus"
    }
  ]
```
### Как отключить мини-карту VS Code в режиме Windowed?

    "editor.minimap.enabled": false

### Go to MDN


### Html Css



