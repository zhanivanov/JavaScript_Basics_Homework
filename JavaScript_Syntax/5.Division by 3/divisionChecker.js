/**
 * Created by Zhan on 16.7.2014 г..
 */
function divisionBy3(value){
    var output=[],
        stringNumber=value.toString();
    for(var i= 0;i<stringNumber.length;i++){
        output.push(+stringNumber.charAt(i));
    }
    for(var i= 0,sum=0;i<output.length;sum+=output[i++]);

    if(sum%3==0){
        return true;
    }
    else{
        return false;
    }
}

if(divisionBy3(1)==true){
    console.log("the number is divided by 3 without remainder");
}
else{
    console.log("the number is not divided by 3 without remainder")
}