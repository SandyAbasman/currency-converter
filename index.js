let convertButton = document.getElementById("convertNow")
let modal = document.getElementById("modal")


convertButton.addEventListener("click", function(){
    if(modal.classList.contains("modal-container")){
        modal.classList.remove("modal-container")
        modal.classList.add("modal-container-visible")
    }else if (modal.classList.contains("modal-container-visible")){
            modal.classList.remove("modal-container-visible")
            modal.classList.add("modal-container")
        }
    
})
