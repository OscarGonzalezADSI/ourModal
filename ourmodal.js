function ourAlert(status, message) {

    if(status == 'insert'){
        var color = "#3498db";
    }else if(status === 'update'){
        var color = "#f1c40f";
    }else if(status === 'delete'){
        var color = " #e74c3c";
    }else{
    	var color = "#FF0000";
    }

    let modal = document.createElement("div");
    let modalBody = document.createElement("div");
    let modalBodyText = document.createTextNode(message);
    let modalBodyBtnClose = document.createElement("button");
    let modalBodyBtnCloseText = document.createTextNode("Aceptar.");
    
    modal.setAttribute("class","modal-emergente");
    modalBody.setAttribute("class","modal-body");
    modalBodyBtnClose.setAttribute("id","cierre");
    
    modal.style.border = "2px solid "+color;
    modalBody.style.border = "2px solid "+color;
    modalBodyBtnClose.style.border = "2px solid "+color;
    
    modalBodyBtnClose.appendChild(modalBodyBtnCloseText);
    modalBody.appendChild(modalBodyText);
    modalBody.appendChild(modalBodyBtnClose);
    modal.appendChild(modalBody);
    document.body.appendChild(modal);
    
    let myModal = document.getElementsByClassName("modal-emergente");
    let btnCierre = document.getElementById("cierre");
    
    btnCierre.addEventListener("click",()=>{
       myModal[0].style.display = "none";
    });
}
