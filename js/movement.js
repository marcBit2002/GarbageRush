const drag = document.getElementById("basura");

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
    
        //definir l'actual left and top
        // const rect = drag.getBoundingClientRect();
    
        //restem l'actual - la nova posicio del mouse
        // drag.style.left = rect.left - newX + "px";
        // drag.style.top = rect.top - newY + "px";

        drag.style.left = drag.offsetLeft - newX + "px";
        drag.style.top = drag.offsetTop - newY + "px";
    
        //tornem a indicar l'actual posicio del mouse
        prevX = e.clientX;
        prevY = e.clientY;
    }
    
    function mouseup() {
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
    }
}

