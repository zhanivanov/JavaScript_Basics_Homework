/**
 * Created by Zhan on 26.7.2014 г..
 */
function sortArray(array) {
    var tempValue;
    for(var i=0;i<array.length;i++){
        for(var j=i;j<array.length;j++){
            if(array[i]>array[j]){
                tempValue=array[i];
                array[i]=array[j];
                array[j]=tempValue;
            }
        }
    }
    return array;
}



console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));