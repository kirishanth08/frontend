// palindrome

var name1 = "Madam";
var name2 = "Peace";

function palin(str) {
  const len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
console.log(palin(name1));
console.log(palin(name2));