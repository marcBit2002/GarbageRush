const drag = document.getElementById("basura");
map = document.getElementById("map");
window.addEventListener('DOMContentLoaded', (evt) => {
    console.log('DOM fully loaded and parsed');
});
drag.addEventListener('mousedown', mousedown);

function mousedown(e) {

    //Posicio actual del mouse/cursor
    let prevX = e.clientX;
    let prevY = e.clientY;

    //Actives els events de mousemove i moseup
    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);

    function mousemove(e) {
        //Nova posicio actual del mouse
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        //Movement
        drag.style.left = drag.offsetLeft - newX + "px";
        drag.style.top = drag.offsetTop - newY + "px";
  

        //Colisions
        //Left
        if (drag.offsetLeft <= 0) {
            drag.style.left = 0;
        }
        //Top
        if (drag.offsetTop <= 0) {
            drag.style.top = 0;
        }
        //Right
        if (drag.offsetLeft + drag.offsetWidth > map.offsetWidth) {
            drag.style.left = map.offsetWidth - drag.offsetWidth + "px";
        }
        //Bottom
        if (drag.offsetTop + drag.offsetHeight > map.offsetHeight) {
            drag.style.top = map.offsetHeight - drag.offsetHeight + "px";
        }

        //Tornem a indicar l'actual posicio del mouse
        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup() {
        //Desactives els events mousemove i mouseup
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
    }
}

