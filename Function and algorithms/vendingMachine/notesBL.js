
var array = [1000, 500, 100, 50, 10, 5, 2, 1];
var arr = [];
function change(amount) {
    let sum=0;
    for (let i = 0; i < 8; i++) {
        if (amount >= array[i]) {
            arr[i] = parseInt(amount / array[i]);
            amount = amount - (arr[i] * array[i])
        }
    }
    for (let j = 0; j < 8; j++) {
        if (arr[j]) {
            console.log(`${array[j]}: ${arr[j]}`);
            sum+=arr[j];
        }
    }
    console.log(`Total number of notes: ${sum}`);
}

//change(667);
module.exports = { change }
