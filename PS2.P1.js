function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

let fib = fibs();
let nextFib = fib.next();
function* getEvenFibs() {
    let counter = 0;
    while (counter <= 5) {
        if (nextFib.value % 2 === 0) {
            yield nextFib.value;
            counter++;
            nextFib = fib.next();
        }
        nextFib = fib.next();
    }
}

let evenFib = getEvenFibs();
let nextEvenFib = evenFib.next();
while(nextEvenFib.value !== undefined) {
    console.log(nextEvenFib.value);
    nextEvenFib = evenFib.next();
    nextFib = fib.next();
}



//
// function* getEvenFibs() {
//     let counter = 0;
//     while(counter <= 5) {
//         if (nextFib.value % 2 === 0) {
//             counter++;
//             yield nextFib.value;
//         }
//     }
// }
//

//
//
//
//
//
//
//
