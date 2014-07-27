/**
 * Created by Zhan on 26.7.2014 г..
 */
function checkBrackets(string){
    var flag=0;
    for(var i=0;i<string.length;i++){
        if(string.charAt(i)==='('){
            flag++;
        }
        else if(string.charAt(i)===')'){
            flag--;
        }
    }
    if(flag){
        return 'incorrect';
    }
    else{
        return 'correct'
    }
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));