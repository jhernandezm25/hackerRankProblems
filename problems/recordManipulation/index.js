'use strict';

const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}
function manipulateStudentRecord(obj, operation, prop, newValue) {
    console.log('operation',operation)
    console.log('obj',obj)
    console.log('prop',prop)
    console.log('newValue',newValue)
  // write your code here
  if (operation === 'edit') {
      if(obj[prop]){
          obj[prop] = newValue
      }
      
      return obj
  } else if (operation === 'delete') {
    delete obj[prop]
    return obj
  }
  
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const obj = {};

  for (let i = 0; i < n; ++i) {
    const params = readLine().trim().split(' ');
    const k = params[0];
    const v = params[1];
    obj[k] = v;
  }

  const params = readLine().trim().split(' ');
  const result = manipulateStudentRecord(obj, params[0], params[1], params[2]);

  Object.keys(result).sort().forEach(k => {
    ws.write(`${k} ${result[k]}\n`);
  });
  ws.end();
}