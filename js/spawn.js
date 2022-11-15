// Return a random number between two rangs
function getRandom(min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNum;
}

//Choose random images from assets
let min = 0;
let max = 3;
let randomNumber = getRandom(min, max);

let image = [];
image[0] = "../assets/img/bottle.png";
image[1] = "../assets/img/paper.png";
image[2] = "../assets/img/bannana.png";
image[3] = "../assets/img/plastic.png";

const map = document.getElementById("map");

// const trashImage = document.createElement("img");
// trashImage.setAttribute("id", "basura");
// trashImage.src = image[randomNumber];
// map.appendChild(trashImage);

const trashImage = document.createElement("div");
trashImage.setAttribute("id", "basura");
trashImage.style.backgroundColor = "red";
trashImage.style.height = "150px";
trashImage.style.width = "150px";
trashImage.style.position = "absolute";
trashImage.style.cursor = "pointer";
trashImage.style.zIndex = "100";
// trashImage.style.backgroundImage = "url('../assets/img/bottle.png')";
// trashImage.style.backgroundImage = "url(image[randomNumber])";

let mapWidth = map.offsetWidth;
let mapHeight = map.offsetHeight;

let randomTop = getRandom(0, (mapHeight - 150) / 2);
let randomLeft = getRandom(0, mapWidth - 150);

trashImage.style.left = randomLeft + "px";
trashImage.style.top = randomTop + "px";
map.appendChild(trashImage);





// //Posicionar imagenes aleatorias en un div
// var images = document.getElementsByTagName('div');
// // get map width and height
// var mapWidth = map.clientWidth;
// var mapHeight = map.clientHeight;

// for (var i = 0; i < images.length; i++) {
//     var thisImage = images[i];

//     // get random numbers for each element
//     randomTop = getRandom(0, (mapHeight - trashImage.clientHeight)/2);
//     randomLeft = getRandom(0, mapWidth - trashImage.clientWidth);

//     thisImage.style.top = randomTop + "px";
//     thisImage.style.left = randomLeft + "px";
// }