// Write your code here!
//no longer has DOM node

const main = document.querySelector("main");
main.remove();

//'newHeader' variable that points to node 'h1#victory'

const newHeader = document.createElement('h1');
newHeader.id = "victory";

//variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

newHeader.textContent ='Allan Kiprop is the champion'