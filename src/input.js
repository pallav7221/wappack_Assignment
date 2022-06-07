let allNotes = [];

let notesBox = document.createElement("div");
notesBox.setAttribute("id","allNotes");
function notes(){
    let note = document.getElementById("notesBox").value;

    allNotes.push(note);

    notesBox.innerHTML="";
    allNotes.forEach(ele=>{
        let para = document.createElement("p");
        para.innerText = ele;
        para.setAttribute("id","notesPara")

        notesBox.append(para);
    })
    document.getElementById("root").append(notesBox);
}
export default notes;
