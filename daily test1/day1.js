
// uniquenumber


var array = [1, 2, 3, 3, 4, 5, 5];
var uvalues = [];

for (let i = 0; i < array.length; i++) {
  if (!uvalues.includes(array[i])) {
    uvalues.push(array[i]);
  }
}
console.log(uvalues); 
