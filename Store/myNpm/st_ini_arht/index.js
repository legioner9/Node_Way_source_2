const Arht = require ( 'st_arht' );

const atOut_1  = Arht.SetArchetype.FunctionARHT.AtOut_1
const atOut_2  = Arht.SetArchetype.FunctionARHT.AtOut_2
const atOut_fm  = Arht.SetArchetype.FunctionARHT.AtOut_fm

// duplicate atOut_fm as MANE export
const arht = Arht.SetArchetype.FunctionARHT.AtOut_fm

module.exports = {

    atOut_1,
    atOut_2,
    atOut_fm,
    arht,

};
