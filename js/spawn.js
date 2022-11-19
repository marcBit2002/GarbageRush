// Return a random number between two rangs
function getRandom(min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNum;
}

//Choose random images from assets
let min = 0;
let max = 3;
let randomNumber = getRandom(min, max);
let path = "../assets/img/";
let yellowImage = ["bottle.png"];
let blueImage = [];
let greenImage = [];
let brownImage = [];
// yellowImage.push("../assets/img/bottle.png");
yellowImage[0] = "../assets/img/bottle.png";
yellowImage[1] = "../assets/img/paper.png";
yellowImage[2] = "../assets/img/bannana.png";
yellowImage[3] = "../assets/img/plastic.png";


// const trashImage = document.createElement("img");
// trashImage.setAttribute("id", "basura");
// trashImage.src = image[randomNumber];
// map.appendChild(trashImage);

export function createTrash() {
    let map = document.getElementById("map");

    const trashImage = document.createElement("div");
    trashImage.setAttribute("id", "basura");
    trashImage.style.backgroundColor = "red";
    trashImage.style.height = "150px";
    trashImage.style.width = "150px";
    trashImage.style.position = "absolute";
    trashImage.style.cursor = "pointer";
    // trashImage.style.backgroundImage = "url('../assets/img/bottle.png')";
    trashImage.style.zIndex = "100";
    // trashImage.style.backgroundImage = "url(image[randomNumber])";

    let mapWidth = map.offsetWidth;
    let mapHeight = map.offsetHeight;

    let randomTop = getRandom(0, (mapHeight - 150) / 2);
    let randomLeft = getRandom(0, mapWidth - 150);

    trashImage.style.left = randomLeft + "px";
    trashImage.style.top = randomTop + "px";
    map.appendChild(trashImage);
}