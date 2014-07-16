/**
 * Created by Zhan on 16.7.2014 г..
 */
function checkDigit(value){
    var num=(value%1000)/100;
    if(parseInt(num)==3){
        return true;
    }
    else{
        return false;
    }
}


var value=123356;

console.log(checkDigit(value));