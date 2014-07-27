/**
 * Created by Zhan on 25.7.2014 г..
 */
function compareChars(array1,array2){
    var isEqual=false;
    if(array1.length==array2.length){
        for(var i=0;i<array1.length;i++){
            if(array1[i]===array2[i]){
                isEqual=true;
            }
            else{
                isEqual=false;
                return 'Not Equal';
            }
        }
        if(isEqual){
            return 'Equal';
        }
    }
    else{
        return 'Not Equal';
    }
}


console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
console.log(compareChars(['3', '5', 'g', 'd'],['5', '3', 'g', 'd']));
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));