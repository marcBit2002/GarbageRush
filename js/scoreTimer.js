let score = 0;
export function checkTrash(dragObject, dropObject) {
    let correct;
    if (dragObject.className === "basuraAzul") {
        if (dropObject.id === "contenedorAzul") {
            score++;
            correct = true;
        } else {
            score--;
            correct = false;
        }
    } else if (dragObject.className === "basuraVerde") {
        if (dropObject.id === "contenedorVerde") {
            score++;
            correct = true;
        } else {
            score--;
            correct = false;
        }
    } else if (dragObject.className === "basuraAmarillo") {
        if (dropObject.id === "contenedorAmarillo") {
            score++;
            correct = true;
        } else {
            score--;
            correct = false;
        }
    } else if (dragObject.className === "basuraMarron") {
        if (dropObject.id === "contenedorMarron") {
            score++;
            correct = true;
        } else {
            score--;
            correct = false;
        }
    }
    let sonido;
    if (correct) {
        sonido = createEffectSound("../assets/sound/correct.mp3");
        sonido.play();
    } else {
        sonido = createEffectSound("../assets/sound/incorrect.mp3");
        sonido.play();
    }
    return score;
}

function createEffectSound(fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
}

// var totalTime = 60;
// window.onload = updateClock;
// function updateClock() {
//     document.getElementById('tiempo').innerHTML = "TIEMPO: " + totalTime;

//     if (totalTime == 0) {
//         alert("Tu puntuación ha sido: " + score);
//     } else {
//         totalTime -= 1;
//         setTimeout("updateClock()", 1000);
//     }
// }


