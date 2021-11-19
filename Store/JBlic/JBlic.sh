#!/bin/bash

#. "$HOME/.bashrc"

filename="$HOME/"

echo -e "${HLIGHT}---start file: $filename---${NORMAL}" # start file

#e_exer "Questions? See far!" "$filename" "$LINENO"

#up_lib_git ${FUNCNAME[0]}

rm -rf ~/.config/JetBrains/PHPStorm2021.1/eval
rm ~/.config/JetBrains/WebStorm2021.1/options/other.xml
rm -rf ~/.local/share/JetBrains/consentOptions
rm -rf ~/.java/..userPrefs

unset filename