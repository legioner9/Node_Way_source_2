const vm = require('vm');
// Measure the memory used by the main context.
vm.measureMemory({ mode: 'summary' })
    // This is the same as vm.measureMemory()
    .then((result) => {

        console.log('summary:',result);
    });

const context = vm.createContext({ a: 1 });
vm.measureMemory({ mode: 'detailed', execution: 'eager' })
    .then((result) => {
        // Reference the context here so that it won't be GC'ed
        // until the measurement is complete.
        console.log(context.a);
        // {
        //   total: {
        //     jsMemoryEstimate: 2574732,
        //     jsMemoryRange: [ 2574732, 2904372 ]
        //   },
        //   current: {
        //     jsMemoryEstimate: 2438996,
        //     jsMemoryRange: [ 2438996, 2768636 ]
        //   },
        //   other: [
        //     {
        //       jsMemoryEstimate: 135736,
        //       jsMemoryRange: [ 135736, 465376 ]
        //     }
        //   ]
        // }
        console.log('detailed:',result);
    });
