import image from "./logo.js";
import notes from "./input.js"
import("./style.css");

let pic = image();
console.log(4);

document.getElementById("logoPic").append(pic);


let box = document.createElement("div");

let input = document.createElement("input");
input.type="text";
input.placeholder = "Enter your Thoughts";
input.setAttribute("id", "notesBox");

let button = document.createElement("button");
button.addEventListener("click",notes);
button.innerText = "Add Notes";
button.setAttribute("id", "buttonNotes")

box.append(input, button);

document.getElementById("notes").append(box);


