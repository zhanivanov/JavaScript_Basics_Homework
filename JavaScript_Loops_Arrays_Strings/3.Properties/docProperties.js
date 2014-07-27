/**
 * Created by Zhan on 25.7.2014 г..
 */
function displayProperties(){
    var properties=[];
    for(var prop in document){
        properties.push(prop);
    }
    properties.sort();
    properties.join('\n');
    return properties;
}

console.log(displayProperties());