const Fs = require ( 'fs' );
const Path = require ( 'path' );

const dataFileToArr = ( d, debug ) => {
    if ( debug ) debugger
    return d.toString ().split ( '\n' ).map ( item => item
        .replace ( /\s/g, '_' )
        .replace ( /\?/g, '&' )
    );
};

const create_file = ( parent_path, adding, dev ) => {

    // create parent_path/adding file

    const create_file = Path.join ( parent_path, adding );

    Fs.writeFile ( create_file, '', ( err ) => {
        // error
        if ( err ) {
            console.error ( err );
        }
        // success
        if ( dev ) console.log ( `"${ create_file }" file is create` );
    } );
};

const create_dir = ( parent_path, adding, dev ) => {

    // create parent_path/adding file

    const create_dir = Path.join ( parent_path, adding );

    Fs.writeFile ( create_dir, '', ( err ) => {
        // error
        if ( err ) {
            console.error ( err );
        }
        // success
        if ( dev ) console.log ( `"${ create_dir }" file item.md is create` );
    } );
    return create_dir;
};

const cloneDirStructFromArr = ( parent_path, arr_init, dev ) => {
    arr_init.map ( item => {

       // create /item.md

        const create_item = Path.join ( parent_path, item + '.md' );

        Fs.writeFile ( create_item, '', ( err ) => {
            if ( err ) {
                console.error ( err );
            }
            //файл записан успешно
            if ( dev ) console.log ( `${ create_item } file item.md is create` );
        } );


        // create .dir
        const create_dir = Path.join ( parent_path, item + '.dir' );
        if ( dev ) console.log ( `${ create_dir } it' our "create_dir"` );

        if ( !Fs.existsSync ( create_dir ) ) {
            Fs.mkdir ( create_dir, err => {
                if ( err ) {
                    console.error ( err );
                }
            } );
        }

        // create .dir/_src

        const create_src = Path.join ( create_dir, '_src' );

        if ( dev ) console.log ( `${ !Fs.existsSync ( create_src ) } it' our !Fs.existsSync ( create_src )` );

        if ( !Fs.existsSync ( create_src ) ) {
            Fs.mkdir ( create_src, err => {
                if ( err ) {
                    console.error ( err );
                }
            } );
        }

        // 3.create .dir/www.md

        const create_www = Path.join ( create_dir, 'www.md' );
        Fs.writeFile ( create_www, '', ( err ) => {
            if ( err ) {
                console.error ( err );
            }
            //файл записан успешно
            if ( dev ) console.log ( `${ create_www } file www.md is create` );
        } );

        // 4.create .dir/ReadMe.md

        const create_readme = Path.join ( create_dir, 'ReadMe.md' );
        Fs.writeFile ( create_readme, '', ( err ) => {
            if ( err ) {
                console.error ( err );
            }
            //файл записан успешно
            if ( dev ) console.log ( `${ create_readme } file ReadMe.md is create` );
        } );

    } );
};

const DirMappingCloneFileToDir_2 = ( par ) => {
    const arr_dir = Fs.readdirSync ( par );
    const dev = DirMappingCloneFileToDir_2.mode === 'debug' || global.mode === 'debug';

    const res = arr_dir.map ( item => {

        if ( dev ) debugger
        const insp_arr = [ item.indexOf ( '__' ) ];
        if ( insp_arr[0] !== 0 ) {
            // it's mySpec to Clone
            if ( dev ) console.log ( `${ item } it's not mySpec to Clone` );
            return item;
        }

        const path_to_list = Path.join ( par, item );
        if ( dev ) console.log ( `${ path_to_list } = "path_to_list"` );

        Fs.readFile ( path_to_list, ( err, data ) => {
            if ( err ) {
                console.error ( err );
                return;
            }

            if ( dev ) console.log ( `${ data } = "file data"` );

            const res_arr = dataFileToArr ( data, dev );

            if ( dev ) {
                console.log ( `${ res_arr } = "res_arr"` );
                debugger
            }

            cloneDirStructFromArr ( par, res_arr, dev );

        } );

        // if ( dev ) console.log ( `${ item } it' our MD file` );
        // // 1.create ( par + item) Dir
        // const create_dir = Path.join ( par, item + '.dir' );
        // if ( dev ) console.log ( `${ create_dir } it' our create_dir` );
        //
        // if ( !Fs.existsSync ( create_dir ) ) {
        //     Fs.mkdir ( create_dir, err => {
        //         if ( err ) {
        //             console.err ( err );
        //         }
        //     } );
        // }
        //
        // // 2.create (__dirname + item)/_src
        //
        // const create_src = Path.join ( create_dir, '_src' );
        //
        // if ( dev ) console.log ( `${ !Fs.existsSync ( create_src ) } it' our !Fs.existsSync ( create_src )` );
        // if ( !Fs.existsSync ( create_src ) ) {
        //     Fs.mkdir ( create_src, err => {
        //         if ( err ) {
        //             console.err ( err );
        //         }
        //     } );
        // }
        //
        // // 3.create (__dirname  + item)/www.md
        //
        // const create_www = Path.join ( create_dir, 'www.md' );
        // Fs.writeFile ( create_www, '', ( err ) => {
        //     if ( err ) {
        //         console.error ( err );
        //     }
        //     //файл записан успешно
        //     if ( dev ) console.log ( `${ create_www } file is create` );
        // } );
        //
        // // 4.create (__dirname + item)/ReadMe.md
        //
        // const create_ReadMe = Path.join ( create_dir, 'ReadMe.md' );
        //
        // Fs.writeFile ( create_ReadMe, '', ( err ) => {
        //     if ( err ) {
        //         console.error ( err );
        //     }
        //     //файл записан успешно
        //     if ( dev ) console.log ( `${ create_ReadMe } file is create` );
        // } );

    } );
};

DirMappingCloneFileToDir_2.help = `ModuleFunc = () => {}`;

DirMappingCloneFileToDir_2.call = () => console.log ( DirMappingCloneFileToDir_2 );

DirMappingCloneFileToDir_2.mode = 'production';

module.exports = DirMappingCloneFileToDir_2;
