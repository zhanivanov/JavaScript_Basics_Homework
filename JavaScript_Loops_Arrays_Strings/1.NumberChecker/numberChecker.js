/**
 * Created by Zhan on 25.7.2014 г..
 */
function printNumbers(n){
    var numsArr=[];
    var counter=0;
    for(var i=1;i<=n;i++){
        if(i%4==0||i%5==0){
            continue;
        }
        else{
            numsArr[counter]=i;
            counter++;
        }
    }
    if(counter){
        return numsArr;
    }
    else{
        return 'no';
    }
}



console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));