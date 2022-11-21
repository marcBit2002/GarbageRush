let score = 0;
export function checkTrash(dragObject, dropObject) {
    if (dragObject.className === "basuraAzul") {
        if (dropObject.id === "contenedorAzul") {
            score ++;
        } else {
            score --;
        }
    } else if (dragObject.className === "basuraVerde") {
        if (dropObject.id  === "contenedorVerde") {
            score ++;
        } else {
            score --;
        }
    } else if (dragObject.className === "basuraAmarillo") {
        if (dropObject.id  === "contenedorAmarillo") {
            score ++;
        } else {
            score --;
        }
    } else if (dragObject.className === "basuraMarron") {
        if (dropObject.id  === "contenedorMarron") {
            score ++;
        } else {
            score --;
        }
    }
    return score;
}