    mkdir workrepo
    cd workrepo
    git init
    cp -r [target_file_or_dir] .
    git add .
    git commit -m commit
    git archive -o ../myarchive.zip @
    cd ..
    rm -rf workrepo
.
    zip.sh foo.zip target_file_or_dir

zip.sh:

    #!/usr/bin/bash

    set -eu

    unset workdir
    onexit() {
    if [ -n ${workdir-} ]; then
        rm -rf "$workdir"
    fi
    }
    trap onexit EXIT

    workdir=$(mktemp --tmpdir -d gitzip.XXXXXX)


    cp -r "" "$workdir"

    pushd "$workdir"
    git init
    git add .
    git commit -m "commit for zip"
    popd

    git archive --format=zip -o "" --remote="$workdir" HEAD