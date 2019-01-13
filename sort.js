const fs = require('fs');

let words = fs.readFileSync('./input.csv', 'utf-8');
words = words.replace(/(\r\n\t|\n|\r\t)/gm, "");
let array1;

if (words == null){
  array1 = null;
} else {
  array1 = words.split(',').sort(function(a, b) {
    if (a.toUpperCase() < b.toUpperCase()) {return -1;}
    if (a.toUpperCase() > b.toUpperCase()) {return 1;}
    return 0;
  }).reverse().join(',');
  array1 += '\n';
}

fs.writeFileSync('./output.csv', array1);
console.log(array1); //keep the console log for the Dockerfile to see output