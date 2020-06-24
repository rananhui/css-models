// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("CLICK !!!!");
// })


var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.innerHTML = "";
    ul.appendChild(li);

    var li1 = document.createElement("li");
    li1.appendChild(document.createTextNode(input.value));
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    li2.appendChild(document.createTextNode(input.value));
    ul.appendChild(li2);

    var li3 = document.createElement("li");
    li3.appendChild(document.createTextNode(input.value));
    ul.appendChild(li3);

    var li4 = document.createElement("li");
    li4.appendChild(document.createTextNode(input.value));
    ul.appendChild(li4);

    var li5 = document.createElement("li");
    li5.appendChild(document.createTextNode(input.value));
    ul.appendChild(li5);

    var li6 = document.createElement("li");
    li6.appendChild(document.createTextNode(input.value));
    ul.appendChild(li6);

    var li7 = document.createElement("li");
    li7.appendChild(document.createTextNode(input.value));
    ul.appendChild(li7);

    var li8 = document.createElement("li");
    li8.appendChild(document.createTextNode(input.value));
    ul.appendChild(li8);

    var li9 = document.createElement("li");
    li9.appendChild(document.createTextNode(input.value));
    ul.appendChild(li9);
   // input.value = "";
}


function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeyPress(){
    if (inputLength() > 0 && event.keyCode == 13){
        createListElement();
    }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);
