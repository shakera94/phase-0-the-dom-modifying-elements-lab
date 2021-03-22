// Write your code here!
const main = document.getElementById("main");
main.remove()

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Shakera is the champion"

document.getElementsByTagName("body")[0].appendChild(newHeader.innerHTML)