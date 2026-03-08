var noBTN = document.querySelectorAll(".drum").length;
for (var i = 0; i < noBTN; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ch = this.innerHTML;
        makeSound(ch);

        buttonAnimatin(ch);
    })
}
    document.addEventListener("keydown", function(event) {
        makeSound(event.key);
        buttonAnimatin(event.key);
    })

    function makeSound(key) {
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        
            case "a":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            
            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        
            case "d":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        
            case "j":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
        
            case "k":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        
            default:
                break;
        }
    }

function buttonAnimatin(ch){
    document.querySelector("." + ch).classList.add("pressed");
    
    setTimeout(function() {
        document.querySelector("." + ch).classList.remove("pressed");
    }, 100);
}

