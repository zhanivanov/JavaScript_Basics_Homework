/**
 * Created by Zhan on 26.7.2014 г..
 */
function findMostFreqNum(array){
    var tempCounter= 0,
        counter= 0,
        result={};
    for(var i=0;i<array.length;i++){
        tempCounter=0;
        for(var j=0;j<array.length;j++){
            if(array[i]===array[j]){
                tempCounter++;
            }
        }
        if(tempCounter>counter){
            result={};
            counter=tempCounter;
            result[array[i]]='('+counter+'times)';
        }
    }
    return result;
}


console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));