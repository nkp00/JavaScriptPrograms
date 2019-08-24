/*program will take three command-line arguments: m (month), d (day), and y (year).
 For m use 1 for January, 2 for February, and so forth. 
For output print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth.
*/


function day(date, month, year) {
    d = date;
    m = month;
    y = year;
    y0 = y - parseInt((14 - m) / 12);
    x = (y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt(y0 / 400));
    m0 = m + 12 * parseInt((14 - m) / 12) - 2;
    d0 = ((d + x + parseInt(31 * m0 / 12)) % 7);
    array = ['Sunday', 'Monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'saturday'];
    console.log(array[d0]);
    return "";
}
module.exports = { day }