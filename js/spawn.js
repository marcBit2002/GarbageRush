export let checkScore;
export function setCheckScoreFalse() {
    checkScore = false;
}
function getRandom(min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNum;
}

function createImg(nameClass, urlImg) {
    const trashImage = document.createElement("div");
    trashImage.setAttribute("id", "basura");
    trashImage.setAttribute("class", nameClass);
    trashImage.style.backgroundImage = "url(" + urlImg + ")";
    trashImage.style.backgroundSize = "cover";
    trashImage.style.backgroundPosition = "center";
    trashImage.style.height = "190px";
    trashImage.style.width = "170px";
    trashImage.style.position = "absolute";
    trashImage.style.cursor = "pointer";
    trashImage.style.zIndex = "100";
    return trashImage;
}


function selectRandomImg(nameClass) {
    let images;
    let path = "../assets/img/";
    let yellowImage = [path + "plastic.png"];
    let blueImage = [path + "paper.png", path + "blue.png"];
    let greenImage = [path + "bottle.png"];
    let brownImage = [path + "bannana.png"];
    if (nameClass === "basuraAzul") {
        images = blueImage;
    } else if (nameClass === "basuraVerde") {
        images = greenImage;
    } else if (nameClass === "basuraAmarillo") {
        images = yellowImage;
    } else {
        images = brownImage;
    }
    let random = Math.floor(Math.random() * images.length);
    return images[random];
}

function selectRandomClass() {
    let nameClass = ["basuraAzul", "basuraVerde", "basuraMarron", "basuraAmarillo"];
    let random = Math.floor(Math.random() * nameClass.length);
    return nameClass[random];
}

export function createTrash() {
    let map = document.getElementById("map");
    let trashImage;
    let nameClass = selectRandomClass();
    let urlImg = selectRandomImg(nameClass);
    trashImage = createImg(nameClass, urlImg);

    let mapWidth = map.offsetWidth;
    let mapHeight = map.offsetHeight;

    let randomTop = getRandom(0, (mapHeight - 190) / 2);
    let randomLeft = getRandom(0, mapWidth - 170);

    trashImage.style.left = randomLeft + "px";
    trashImage.style.top = randomTop + "px";
    map.appendChild(trashImage);
    checkScore = true;
}

