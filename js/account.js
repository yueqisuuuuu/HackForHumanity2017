
/*
function saveName(){
    var newName =  document.getElementByClassName("newName").innerHTML;
    var save = document.getElementById("name");
    save.innerHTML = "";
    save.innerHTML = newName;
}

function changeName(){
    var oldName = document.getElementById("name");
    var name = document.getElementById("name").innerHTML;
    var nameInput = document.createElement("input");
    nameInput.className = "newName";
    nameInput.value = name;
    oldName.innerHTML = "";
    oldName.appendChild(nameInput);
    var saveButton = document.createElement ("button");
    saveButton.innerHTML = "save";
    saveButton.className = "saveButton";
    oldName.appendChild(saveButton);
    document.getElementByClassName("saveButton").onclick = function(){saveName();}
}
*/

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
