/**
 * Created by Zhan on 1.8.2014 г..
 */
var isLike = true;
var button = document.getElementById('button');
button.onclick = function(){
    if(isLike){
        button.innerHTML = "Unlike";
        isLike = false;
    }
    else{
        button.innerHTML = "Like";
        isLike = true;
    }
};