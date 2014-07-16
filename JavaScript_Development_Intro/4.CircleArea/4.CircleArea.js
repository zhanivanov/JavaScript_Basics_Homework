/**
 * Created by Zhan on 15.7.2014 г..
 */
function circleArea(r){
    return Math.PI*(r*r);
}
document.getElementById("area-1").innerHTML=circleArea(7);
document.getElementById("area-2").innerHTML=circleArea(1.5);
document.getElementById("area-3").innerHTML=circleArea(20);