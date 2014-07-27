/**
 * Created by Zhan on 25.7.2014 г..
 */
function findMinAndMax(value) {
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;

    for(var i=0;i<value.length;i++){
        if(value[i]<min){
            min=value[i];
        }
        if(value[i]>max){
            max=value[i];
        }
    }

    return result = {'Min->':min, 'Max->':max};
}


console.log(findMinAndMax([1,2,1,15,20,5,7,31]));
console.log(findMinAndMax([2,2,2,2,2]));
console.log(findMinAndMax([500,1,-23,0,-300,28,35,12]));