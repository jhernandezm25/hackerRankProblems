'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
    let count = 0;
    let toChaotic = false
    for (let i = 0; i < q.length; i++) {
        let countByElement = 0;
        for (let y = i + 1; y < q.length && !toChaotic; y++) {
            if (q[i] > q[y]) {
                countByElement++
                if (countByElement > 2) {
                    console.log('Too chaotic')
                    toChaotic = true
                }
            }
        }
        count += countByElement
    }
    if (!toChaotic) {
        console.log(count)
    }
}


function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
