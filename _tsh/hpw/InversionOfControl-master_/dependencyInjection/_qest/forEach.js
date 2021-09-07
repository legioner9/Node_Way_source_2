const fn = ( item, index, array ) => {
    console.log ( item, index, array );
};

[ 0, 2, 5 ].forEach ( fn );

// 0 0 [ 0, 2, 5 ]
// 2 1 [ 0, 2, 5 ]
// 5 2 [ 0, 2, 5 ]
