var textArea = document.getElementById('text-area');

window.onmousemove = handleMouseMove;
function handleMouseMove(event) {
    event = event || window.event; // IE-ism
    mousePos = {
        x: event.clientX,
        y: event.clientY
    };
    textArea.innerHTML += 'X: ' + mousePos.x + '; Y: ' + mousePos.y + '; Time: ' + new Date() + '\n';
}