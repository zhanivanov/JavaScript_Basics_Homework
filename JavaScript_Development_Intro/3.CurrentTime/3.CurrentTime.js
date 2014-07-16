/**
 * Created by Zhan on 15.7.2014 г..
 */
var date = new Date();
var hours=date.getHours();
var minutes=date.getMinutes();

if(minutes<10){
    console.log(hours+":"+0+minutes);
}
else{
    console.log(hours+":"+minutes);
}