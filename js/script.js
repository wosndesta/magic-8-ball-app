
const emptyDiv = document.getElementById("emptyDiv")
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
    
let br = document.createElement("br");

//Create a label for your input field telling your user to "Ask me anything!"
let label = document.createElement("label");
label.textContent = "Ask me anything!";
form.appendChild(label);
form.appendChild(br.cloneNode());

//Create an input field for users to ask a question
inputOne = document.createElement("input");
inputOne.type = "TEXT";
inputOne.name = "myInput";
inputOne.value = "Values of my Input";
form.appendChild(inputOne);

form.appendChild(br.cloneNode());
form.appendChild(br.cloneNode());

//Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
let button = document.createElement("input");
button.setAttribute("type", "submit");
button.setAttribute("value", "Ask");
form.appendChild(button);



emptyDiv.appendChild(form)


let divOne = document.createElement("div");
divOne.setAttribute("id","divMagic");
emptyDiv.appendChild(divOne);








