const del = require('del')

// module.exports = function clean(cb) {
//     return del('build').then(() => {
//         cb()
//     })
// }

module.exports = function clean() {
    return del('build').then(() => {

    })
}