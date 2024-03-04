// Exercise 1: 

function writeDing() {
    console.log('Ding!');
}

let timerId = setTimeout(writeDing, 3000); // Removed the parentheses after writeDing

// Exercise 2:

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

function compareByLength(a, b) {
    return a.length - b.length;
}

words.sort(compareByLength);
console.log(words); // ["nice", "short", "medium", "lengthy", "delicious"]


// Exercise 3:

const longWords = words.filter(word => word.length >= 7);
console.log(longWords); // ["lengthy", "delicious"]

// Exercise 4

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const colors = ['red', 'green', 'blue', 'purple'];

function log(elem, idx) {
    console.log(`Index: ${idx} / Element Value: ${elem}`);
}

forEach(colors, log);



// Exercise 5:

function step1(cb) {
    setTimeout(function () {
        console.log('STEP 1 COMPLETE');
        cb()
    }, 750);
}

function step2(cb) {
    setTimeout(function () {
        console.log('STEP 2 COMPLETE');
        cb()
    }, 500);
}

function step3(cb) {
    setTimeout(function () {
        console.log('STEP 3 COMPLETE');
        cb()
    }, 250);
}


step1(function () {
    step2(function () {
        step3(function () {
            console.log('FINISHED');
        });
    });
});


