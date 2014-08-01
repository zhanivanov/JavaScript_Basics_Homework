/**
 * Created by Zhan on 1.8.2014 г..
 */
var button = document.getElementById('btnHideOddRows');
var rows = document.getElementsByTagName('tr');
button.onclick = function(){
    for(var i in rows){
        if(i%2!=0||i==0){
            rows[i].style.display = "none";
        }
    }
};