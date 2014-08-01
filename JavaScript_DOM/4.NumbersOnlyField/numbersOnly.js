/**
 * Created by Zhan on 1.8.2014 г..
 */
var input = document.getElementById('text-field');

function check(){
    var content = input.value;
    var regex = /\D/g;
    if(regex.test(content)){
        showError();
        input.value = content.replace(regex, '');
    }
}

function changeBackgroundColor(color) {
    input.style.backgroundColor = color;
}

function showError() {
    changeBackgroundColor('#F00');
    setTimeout(function(){changeBackgroundColor('#FFF');}, 200);
}