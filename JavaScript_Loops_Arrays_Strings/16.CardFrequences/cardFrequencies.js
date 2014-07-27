/**
 * Created by Zhan on 26.7.2014 г..
 */
function findCardFrequency(string){
    var splittedArray = string.split(" ");
    var counter=0;
    var result=[];
    var flag=false;
    var numPattern = /[a-zA-Z0-9]+/;
    for(var i=0;i<splittedArray.length;i++){
        for(var j=0;j<splittedArray.length;j++){
            if(splittedArray[i].match(numPattern).toString()===splittedArray[j].match(numPattern).toString()){
                counter++;
            }
        }
        var percentage = (counter/splittedArray.length)*100;
        for(var a=0;a<result.length+1;a++){
            if(result[a]===(splittedArray[i].match(numPattern)+' -> '+percentage.toFixed(2)+'%').toString()){
                flag=true;
                continue;
            }
        }
        if(!flag){
            result.push(splittedArray[i].match(numPattern)+' -> '+percentage.toFixed(2)+'%');
            flag=false;
        }
        counter=0;
    }
    for(var k=0;k<result.length;k++){
        console.log(result[k])
    }

}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log();
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log();
findCardFrequency('10♣ 10♥');




