let uploadBtn = document.querySelector(".fa-arrow-up-from-bracket");
let myTable = document.querySelector(".myTable");
let mainDiv = document.querySelector(".main");
let myInput = document.querySelector(".main input");

uploadBtn.addEventListener('click', function(){
    document.getElementById("file").click();
})

myInput.onchange = function(ev){ 
    uploadImage(ev.target.files);
}


mainDiv.ondragover = ev => ev.preventDefault();

let counter=1;
mainDiv.addEventListener("ondrop", function(ev){
    ev.preventDefault();
    uploadImage(ev.dataTransfer.files);
})

function uploadImage(files){
    if(files.length == 0){
        myTable.style.display="none";
    } 
    [...files].forEach(file=>{
    let reader = new FileReader();
    reader.onloadend = function(ev){
        ev.preventDefault();
        let tr =`<tr>
                    <th scope="row">${counter++}</th>
                    <td>
                        <img src="${ev.target.result}" alt="image" width="150px">
                    </td>
                    <td>${file.name}</td>
                    <td>${file.size}</td>
                </tr>`;
    myTable.lastElementChild.innerHTML += tr;
    }
    reader.readAsDataURL(file);
})  
}
