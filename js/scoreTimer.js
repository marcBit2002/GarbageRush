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
    if (score < 0) {
        score = 0;
        
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

//Estableixo la música de fons dins del joc
window.onload = setBackgroundMusic("../assets/sound/background_music2.mp3");


function setBackgroundMusic(fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.setAttribute("autoplay", "true");
    sonido.setAttribute("loop", "true");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
}
//Timer que mostra un modal Swal (SweetAlert) que reinicia el joc o retorna a la pantalla d'inici
export function setTimer(timeleft) {
    var downloadTimer = setInterval(function () {
        if (timeleft < 0) {
            clearInterval(downloadTimer);
            let sound = createEffectSound("../assets/sound/time.mp3");
            sound.play();
            swal({
                title: "Se ha acabado el tiempo!",
                text: "Tu puntuación ha sido: " + score,
                closeOnEsc: false,
                dangerMode: true,
                closeOnClickOutside: false,
                buttons: {
                    jugar: { text: "Volver a jugar", className: "playAgainButton" },
                    salir: { text: "Salir", className: "exitButton" },
                },

            })
                .then((value) => {
                    switch (value) {
                        case "jugar":
                            setTimer(60);
                            score = 0;
                            document.getElementById("puntuacion").innerHTML = "PUNTUACIÓN: 0";
                            break;
                        default:
                            window.location = "../index.html";
                            break;
                    }
                })
        } else {
            document.getElementById("tiempo").innerHTML = "TIEMPO: " + timeleft + " seg";

        }
        timeleft -= 1;

    }, 1000);
}


