const buttons = document.querySelectorAll("button");
    //console.log(buttons);

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            const choixDuUser = buttons[i].innerHTML;
            //console.log(choixDuUser);
            const numeroHasard = [Math.floor(Math.random()*buttons.length)];
            const choixRobot = buttons[numeroHasard].innerHTML;
            //console.log(`${choixDuUser} VS ${choixRobot}`)
            /* Logique du jeu */
            var result = "";
            if(choixDuUser === choixRobot){
                result = "Égalité"
            } else if (
            //La roche bat le ciseaux
            (choixDuUser === "Roche" && choixRobot === "Ciseaux") ||
            //La roche se fait battre par le papier
            (choixDuUser === "Papier" && choixRobot === "Roche") ||
            //Le papier se fait battre par des ciseaux
            (choixDuUser === "Ciseaux" && choixRobot === "Papier")
        ){
            result = "Gagné";
        } else {
            result = "Perdu";
        }
        document.querySelector(".result").innerHTML = `
        Joueur: ${choixDuUser} <br/>
        Robot: ${choixRobot} <br/>
        ${result}!
        `
        });
}