if [ -f ~/.bash_aliases ]; then

. ~/.bash_aliases

fi

echo 'start .bashrc in root'


lla() {
    echo -e '
    RUN ls -l -a
    '
    ls -l -a
}






# nano ~/.bashrc
# .bashrc
#показ ветки в командной строке

# THIS CLI decorator (not for gitbash)
# parse_git_branch() {
#     if ! git rev-parse --git-dir > /dev/null 2>&1; then
#         return 0
#     fi
#     git_branch=$(git branch 2>/dev/null| sed -n '/^\*/s/^\* //p')
#     echo "[$git_branch]"
# }

# PS1="${debian_chroot:+($debian_chroot)}\[\033[01;36m\]\u@\h\[\033[00m\]:\[\033[01;32m\]\w\[\033[00m\]\[\033[01;31m\]\$(parse_git_branch)\[\033[00m\]$ "

. ~/git-completion.bash
. ~/git-prompt.sh

# path to Node_Way
# nw = "/F/Node_projects/Node_Way"

# log__(){
#     echo $nw
# }

___(){ 
    echo -e "__help from ~/.bashrc is Run

lla :: ls -l -a

rel__ :: rel__ ~/.bashrc and ~/.custom_aliases
copy_bash :: copy ~/.bashrc to Node_Way/Store/WinUser/BashRc_instead/.bashrc

cat__ :: to catigorize _Education _Jobs _Md Lake LFlow
test__ :: a_d1t Autotest

a_d1 :: create [[ arg, arg + '.md','ReadMe.md',['_src',0] ]]
a_d1t Autotest::
/f/Node_projects/Node_Way/node_modules/st_ex1/SetDirFile/CreateDirFile/CreateTechDirHot_1/Test_auto

gpp :: [git push \$1] | [git push \$2]
gmt :: [git merge \$1] | [git difftool]
qals :: show git aliases
gha :: git checkout
ghp :: git cherry-pick



echo_arg :: echo arg
log__ :: InnerInfo log
    "
}

echo_arg() {
    echo "$@"
}


a_d1(){
echo -e "bash m_d1 is RUN
create [[ $@, $@ + '.md','ReadMe.md',['_src',0] ]]
"

	node /F/Node_projects/Node_Way/node_modules/st_ex1/SetDirFile/CreateDirFile/CreateTechDirHot_1/Test/main_test.js $(pwd) "$@"
	
} 

a_d1t(){
    echo -e 'bash m_d1t is RUN
a_d1 Autotest::
/f/Node_projects/Node_Way/node_modules/st_ex1/SetDirFile/CreateDirFile/CreateTechDirHot_1/Test_auto'

    cd /f/Node_projects/Node_Way/node_modules/st_ex1/SetDirFile/CreateDirFile/CreateTechDirHot_1/Test_auto
    node clear.js
    a_d1    

    echo 'a_d1 Autotest DONE'	

}

test__(){
    echo -e 'test__ is RUN'

a_d1t
echo 'a_d1t Autotest DONE'

echo 'test__ DONE'

}

rel__(){
    echo 'RUN rel__ ~/.bashrc and ~/.custom_aliases'

    . ~/.bashrc
    source ~/.custom_aliases

    echo 'rel__ DONE'

}

cat__(){
    echo 'RUN cat__ :: to catigorize _Education _Jobs _Md'

    node /F/Node_projects/Node_Way/1_test_ini_module_Education.v.0.1.7.2.js
    node /F/Node_projects/Node_Way/2_test_ini_module_Jobs.v.0.1.7.2.js
    node /F/Node_projects/Node_Way/NBase/test_ini_module__Md.v.0.1.7.2.js
    node /F/Node_projects/Node_Way/NBase/test_ini_module_Lake.v.0.1.7.2.js
    node /F/Node_projects/Node_Way/NBase/test_ini_module_LFlow.v.0.1.7.2.js



    echo 'cat__ DONE'
}

copy_bash(){
    echo 'RUN copy_bash  :: copy ~/.bashrc to Node_Way/Store/WinUser/BashRc_instead/.bashrc'

    cp  /C/Users/79059/.bashrc /F/Node_projects/Node_Way/Store/WinUser/BashRc_instead/.bashrc
    cp  /C/Users/79059/.bash_aliases /F/Node_projects/Node_Way/Store/WinUser/BashRc_instead/.bash_aliases

    echo 'copy_bash DONE'

}

gpp(){
    echo  -e 'RUN::gpp

git push bare $1
git push bare $2

    '

    # cd F:\\Node_projects\\Node_Way\\NBase\\_Md\\_Index\\_Git\\Containers\\Use_this\\Git_helix\\segm.I.v.1.0.0\\proj.3.0.0\\set.3.0.0_copy\\set.2.0.0

    git push bare $1
    git push bare $2



}

# gmt(){
#         echo  -e '  

# git merge $1
# git mergetool

#     '
#     git merge $1
#     git mergetool
# }

gmmt(){
    echo  -e 'RUN::gmmt

git merge $1
git mergetool

    '
    git merge $1
    git mergetool
}





# export -f _node

alias welcome='echo "Welcome $USER."'

# Version Control
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gb="git branch"
alias gha="git checkout"
alias gp="git push -u origin master"
alias gl="git log --pretty=format:\"%h %s\" --graph"
alias gw="git show --stat --oneline HEAD"
alias gg="git log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
alias gk="gitk --all&"

# pseudoalias gpp= "[git push \$1] | [git push \$2]"
# pseudoalias gmd= "[git merge \$1] | [git difftool]"


alias grb="git rebase"
alias ghp="git cherry-pick"

alias grbc="git rebase --continue"

alias gmt="git mergetool"
alias gm="git merge"


qals(){
    echo 'RUN qals :: show git aliases'
    echo -e '
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gb="git branch"
alias gha="git checkout"
alias gp="git push -u origin master"
alias gl="git log --pretty=format:\"%h %s\" --graph"
alias gw="git show --stat --oneline HEAD"
alias gg="git log --graph --abbrev-commit --decorate --date=relative --all"
alias gk="gitk --all&"

# pseudoalias gpp= "[git push \$1] | [git push \$2]"
# pseudoalias gmd= "[git merge \$1] | [git difftool]"


alias grb="git rebase"
alias ghp="git cherry-pick"

alias grbc="git rebase --continue"

alias gmt="git mergetool"
alias gm="git merge"
    
    '

}




# Directory
alias diskusage="df -h"
alias folderusage="du -ch"
alias totalfolderusage="du -sh"

# Various
alias opencustomaliases="code  ~/.custom_aliases"
alias updatecustomaliases="source ~/.custom_aliases"
alias updatethenupgrade="sudo apt-get update && sudo apt-get upgrade"

# Несколько команд
function lazyman() {
    git add .
    git commit -a -m "$1"
    git push -u origin master
}

# alias iffile = "[ -f $1 ] && echo Файл_существует || echo Файл_не_существует"

# function iffile() {
# [ -f arg ] && echo Файл_существует || echo Файл_не_существует
# }

# alias iffi = "/C/Bash_scripts/iffile.sh"

# --------------------footer---------------------

# [merge]
#     tool = kdiff3
# [mergetool "kdiff3"]
#     path = C:/Program Files/KDiff3/kdiff3.exe
#     trustExitCode = false