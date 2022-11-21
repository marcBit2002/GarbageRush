let score = 0;
export function checkTrash(dragObject, dropObject) {
    if (dragObject.className === "basuraAzul") {
        if (dropObject.id === "contendorAzul") {
            score ++;
        } else {
            score --;
        }
    } else if (dragObject === "basuraVerde") {
        if (dropObject.id  === "contenedorVerde") {
            score ++;
        } else {
            score --;
        }
    } else if (dragObject === "basuraAmarillo") {
        if (dropObject.id  === "contendorAmarillo") {
            score ++;
        } else {
            score --;
        }
    } else if (dragObject === "basuraMarron") {
        if (dropObject.id  === "contendorMarron") {
            score ++;
        } else {
            score --;
        }
    }
    return score;
}