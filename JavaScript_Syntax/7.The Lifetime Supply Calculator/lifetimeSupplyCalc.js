/**
 * Created by Zhan on 16.7.2014 г..
 */
function calcSupply(age,maxAge,favFood){
    return ((maxAge-age)*365)*favFood;
}

var age=20;
var maxAge=87;
var favFood=2;
console.log(calcSupply(age,maxAge,favFood)+"kg of chocolate would be enough untill I am "+maxAge+" years old")