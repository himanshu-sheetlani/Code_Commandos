let slider=document.querySelector("#tickBox");
let notes=document.querySelector('.notes');
let code=document.querySelector(".code");
let cdnt= document.querySelector("#cdnt");
let body=document.querySelector("body")
let textArea=document.getElementById("textArea");
let ul=document.querySelector("#format");
let text= textArea.innerText

function myFunction() {
    if ( slider.checked ){
        notes.style.display = "none";   
        code.style.display = "flex";
        cdnt.innerText="Code";
        ul.style.display="none";
        body.style.backgroundColor="black";
        cdnt.style.color="white";
    }else{ 
        notes.style.display = "flex";    
        code.style.display = "none";
        cdnt.innerText="Note";
        ul.style.display="flex";
        body.style.backgroundColor="white";
        cdnt.style.color="black"
    }
}

function bold(){
    textArea.style.fontWeight = "bold"; 
}

function italic(){
    textArea.style.fontStyle = "italic"; 
}

function underline(){
    textArea.style.fontStyle.textDecoration = "solid"
}

function alignLeft(){
    textArea.style.textAlign = "left";
}

function alignRigth(){
    textArea.style.textAlign = "right";
}

function aligncenter(){
    textArea.style.textAlign = "center";
}

function uppercase(){
    textArea.style.textTransform = "uppercase"; 
} 

function lowercase(){
    textArea.style.textTransform = "lowercase";  
} 

function capitalize(){
    textArea.style.textTransform = "capitalize";  
}

