/**
 * Created by Zhan on 26.7.2014 г..
 */
function findPalindromes(string){
    var stringArray = string.split(/,| | |\./);
    var result = [];
    for(var i=0;i<stringArray.length;i++){
        if(stringArray[i]===''){
            continue;
        }
        else if(stringArray[i].toLowerCase()===stringArray[i].split("").reverse().join("").toLowerCase()){
            result.push(stringArray[i]);
        }
    }
    return result;
}



console.log(findPalindromes('There is a man, his name was Bob.'));