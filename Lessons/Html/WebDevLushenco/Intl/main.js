'use strict';

const intl = Intl;
const out_1 = new Intl.NumberFormat().format(2345234.234) // "2 345 234,234"
const out_2 = new Intl.NumberFormat('de-DE').format(2345234.234) // "2.345.234,234"
const out_3 = new Intl.NumberFormat("zh-HK").format(2345234.234) // "2,345,234.234"
const out_4 = new Intl.NumberFormat('ja-JP',{
    style:'percent'

}).format(0.234) // "23%"
const out_5 = new Intl.NumberFormat('ru-Ru',{
    style:'currency',
    currency:'UAH'
}).format(23545.234) // "23 545,23 ₴"

const out_6 = new Intl.NumberFormat('ja-JP',{
    style:'currency',
    currency:'JPY'
}).format(23545.234) // "￥23,545"

const out_7 = new Intl.NumberFormat('ru-RU',{
    style:'currency',
    currency:'JPY'
}).format(23545.234) // "23 545 ¥"

const out_8 = new Intl.NumberFormat('th-TH',{
    style:'unit',
    unit:'kilometer-per-hour'
}).format(89.23) // "89.23 กม./ชม."

const out_9 =new Intl.NumberFormat('en-US',{
    style:'unit',
    unit:'liter',
    unitDisplay:'long'
}).format(534.634) //"534.634 liters"


debugger
