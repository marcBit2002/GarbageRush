let score = 0;
export function checkTrash(dragObject, dropObject) {
    if (dragObject.className === "basuraAzul") {
        if (dropObject.id === "contenedorAzul") {
            score++;
        } else {
            score--;
        }
    } else if (dragObject.className === "basuraVerde") {
        if (dropObject.id === "contenedorVerde") {
            score++;
        } else {
            score--;
        }
    } else if (dragObject.className === "basuraAmarillo") {
        if (dropObject.id === "contenedorAmarillo") {
            score++;
        } else {
            score--;
        }
    } else if (dragObject.className === "basuraMarron") {
        if (dropObject.id === "contenedorMarron") {
            score++;
        } else {
            score--;
        }
    }
    return score;
}

// // window.onload = updateClock;
// var totalTime = 60;
// window.onload = updateClock;
// export function updateClock() {
//     document.getElementById('tiempo').innerHTML = "TIEMPO: " + totalTime;

//     if (totalTime == 0) {
//         alert("Tu puntuación ha sido: " + score);
//     } else {
//         totalTime -= 1;

//         setTimeout("updateClock()", 1000);
//     }
// }