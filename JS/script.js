var buttons = document.getElementsByClassName("buttons__button");
var i;

for(i=0; i< buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}