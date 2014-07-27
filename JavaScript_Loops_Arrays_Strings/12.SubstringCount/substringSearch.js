/**
 * Created by Zhan on 26.7.2014 г..
 */
function countSubstringOccur(arr){
    var substringValue = arr[0].toLowerCase();
    var stringValue = arr[1].toLowerCase();
    var counter=0;


    for(var i=0;i<stringValue.length-substringValue.length;i++){
        if(stringValue.substr(i,substringValue.length)==substringValue){
            counter++;
        }
    }


    return counter;
}



console.log(countSubstringOccur(['in', 'We are living in a yellow submarine. We don"t have anything else.' +
    ' Inside the submarine is very tight. So we are drinking all the day.' +
    ' We will move out of it in 5 days.']));
console.log(countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']));
console.log(countSubstringOccur(['but', 'But you were living in another world tryin" to get your message through.']));