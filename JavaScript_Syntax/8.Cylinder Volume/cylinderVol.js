/**
 * Created by Zhan on 16.7.2014 г..
 */
function calcCylinderVol(radius,height){
    return Math.PI*(radius*radius)*height;
}

var radius=12,
    height=3;

console.log(calcCylinderVol(radius,height).toFixed(3));