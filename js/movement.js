const drag = document.getElementById("basura");
const map2 = document.getElementById("map2");
window.addEventListener('DOMContentLoaded', (evt) => {
    console.log('DOM fully loaded and parsed');
});
drag.addEventListener('mousedown', mousedown);

function mousedown(e) {

    let prevX = e.clientX;
    let prevY = e.clientY;

    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);

    //posicio actual del mouse

    function mousemove(e) {
        //nova posicio actual del mouse
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;
    
        //Colisions and movement
        //Left
        if (drag.offsetLeft >=0) {
            drag.style.left = drag.offsetLeft - newX + "px";
        } else {
            drag.style.left = 0;
        }
        //Top
        if (drag.offsetTop >=0) {
            drag.style.top = drag.offsetTop - newY + "px";
        } else {
            drag.style.top = 0;
        }
            //left +playerwithd > mapwidht
        //tornem a indicar l'actual posicio del mouse
        prevX = e.clientX;
        prevY = e.clientY;
    }
    
    function mouseup() {
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
    }
}

