/**
 * Created by Zhan on 16.7.2014 г..
 */
function convertDigitToWord(value){
    if(value<1||value>9){
        return console.log("Number out of range!");
    }
    var digitsAsWords=['one','two','three','four','five','six','seven','eight','nine'];
    return digitsAsWords[value-1];
}


var value=4;
console.log(convertDigitToWord(value));