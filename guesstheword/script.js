"use script";
let textInput = document.getElementById("mytext");
let button = document.GetElementById("MyButton");
let output = document.GetElementsByClassName("output");
let incorrect = document.GetElementById("incorrect");

let letters = ['i','b','i','s'];
console.log(letters[1]);
console.log(letter.length);

button.addElementListener("click", function(){
  console.log("textinput: "+ textInput.value);

  for(let i = 0; i < letters.length; i++){
    if(textInput.value == letter[i]{
      output[i].innerHTML = letters[i];
    }
  }
});
