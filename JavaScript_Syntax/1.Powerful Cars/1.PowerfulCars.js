/**
 * Created by Zhan on 16.7.2014 г..
 */
function kwConversion(value){
    return Math.round(value/0.746*100)/100;
}

var value=parseInt(window.prompt("Enter kw to convert"));
document.getElementById("result").innerHTML=kwConversion(value);