var calMonth = (month, year) => {
    let ar = new Array(7);
    array = ["Sun", 'Mon', 'tue', 'wedn', 'thu', 'fri', 'sat'];
    array1 = [1, 3, 5, 7, 8, 10, 12];

    for (let i = 0; i < 7; i++) {
        ar[i] = new Array(7);
        ar[0][i] = (array[i]);
    }

    let m = month;
    let y = year;
    if (array1.includes(m))
        max = 31;
    else
        max=30;    
    if(m==2){
        if (leap(y))
            max = 29;
        else
            max = 28;
    }
    let y0 = y - parseInt((14 - m) / 12);
    let x = (y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt(y0 / 400));
    let m0 = m + 12 * parseInt((14 - m) / 12) - 2;
    let d0 = 0;
    let k = 1;

    for (let d = 1; d <= max; d++) {
        //let d = i;
        d0 = ((d + x + parseInt(31 * m0 / 12)) % 7);
        //console.log(d0);
        if (d0 == 6) {
        ar[k][d0] = d;
            k = k + 1;
        }
        else {
            ar[k][d0] = d;
        }


    }
    console.table(ar);
}

function leap(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        return 1;
    }
    else
        return 0;
}

module.exports = { calMonth }