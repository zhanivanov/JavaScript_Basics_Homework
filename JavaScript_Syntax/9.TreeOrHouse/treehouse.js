/**
 * Created by Zhan on 16.7.2014 г..
 */
function treeHouseCompare(a,b){
    var houseArea=(a*a)+((a*b)/2);
    var treeArea=((b/3)*b)+(Math.PI*(((2*b)/3))*(((2*b)/3)));
    var result;
    if(houseArea>treeArea){
        return result={house:houseArea.toFixed(2)};
    }
    else{
        return result={tree:treeArea.toFixed(2)};
    }
}


var a=3;
var b=3;

console.log(treeHouseCompare(a,b));