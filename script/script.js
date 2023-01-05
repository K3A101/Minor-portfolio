console.log("Hello yall");

// Switch between light and dark modus
var toggleButton = document.querySelector("section:nth-of-type(5) button");
const background = document.querySelector("section:nth-of-type(5)");
toggleButton.addEventListener("click", wisselTussenModus);


function wisselTussenModus(){
    var img = document.querySelector("section:nth-of-type(5) img");
    
    img.classList.toggle("switch");
    if (img.classList.contains("switch")) {
        toggleButton.innerHTML = "Light mode"
    } else {
        toggleButton.innerHTML = "Dark mode"
    }
}