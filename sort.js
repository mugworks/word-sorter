const fs = require('fs');

let words = fs.readFileSync('./input.csv', 'utf-8');
words = words.replace(/(\r\n\t|\n|\r\t)/gm, "");
// let words = 'a,A,P,**,*,c,';
let array1;

if (words == null){
  array1 = null;
} else {
  array1 = words.split(',').sort().reverse().join(',');
  array1 += '\n';
}

fs.writeFileSync('./output.csv', array1);
console.log(array1);