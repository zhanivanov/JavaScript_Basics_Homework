/**
 * Created by Zhan on 16.7.2014 г..
 */
function isPrime(value){
    for(var i=2;i<value;i++){
        if(value%i==0){
            return false;
            break;
        }
    }
    return true;
}

console.log(isPrime(value));