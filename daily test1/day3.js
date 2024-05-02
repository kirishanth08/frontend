
// interconnection

var array1 = [1, 2, 3, 4];
var array2 = [3, 4, 5, 6];
var  inter = [];

for (let i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    inter.push(array1[i]);
  }
}
console.log(inter);