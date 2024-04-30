var button1 = document.getElementById("but1")
var button2 = document.getElementById("but2")
var button3 = document.getElementById("but3")
var button4 = document.getElementById("but4")


function changeshape(){
  button1.style.backgroundColor = "rgb(192, 192, 192)"
  count++;
  document.getElementById('count').textContent = count;
  document.getElementById('but1').addEventListener('click', changeshape);
}
function deletion(){
  button2.style.backgroundColor = "rgb(192, 192, 192)"
}
function reddish(){
  button3.style.backgroundColor = "rgb(192, 192, 192))"
  var div = document.getElementById("mpt")
  div.style.backgroundColor="red"
}
function chanblue(){
  button4.style.backgroundColor = "rgb(192, 192, 192)"
  var div = document.getElementById("mpt")
  div.style.backgroundColor="blue"

}

