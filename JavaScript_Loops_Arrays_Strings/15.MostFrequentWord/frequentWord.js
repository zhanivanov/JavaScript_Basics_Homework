/**
 * Created by Zhan on 26.7.2014 г..
 */
function findMostFreqWord(string){
    var splitString = string.toLocaleLowerCase().split(/[\W]+/);
    var tempCounter;
    var counter=0;
    var result;
    for(var i=0;i<splitString.length;i++) {
        tempCounter = 0;
        for (var j = 0; j < splitString.length; j++) {
            if (splitString[i] === splitString[j]) {
                tempCounter++;
            }
        }
        if (tempCounter > counter) {
            result = {};
            counter = tempCounter;
            result[splitString[i]] = counter;
        }
        else if (tempCounter == counter) {
            result[splitString[i]] = counter;
        }
    }
    var keys = Object.keys(result),
        i, len = keys.length;

    keys.sort();

    for (i = 0; i < len; i++)
    {
        k = keys[i];
        console.log(k + ' -> ' + ' '+result[k]+' times');
    }
}





findMostFreqWord('in the middle of the night');
console.log();
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
console.log();
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');