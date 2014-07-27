/**
 * Created by Zhan on 25.7.2014 г..
 */
function findMaxSequence(nums){
    var currentSequence = 1,
        longestSequence = 1,
        maxSeqNum = nums[0],
        tempArr=[],
        result=[],
        isSequence=false,
        lastValue=false;

    for (var i = 0; i < nums.length-1; i++) {
        if (nums[i] < nums[i+1]) {
            isSequence=true;
            tempArr.push(nums[i]);
            if (tempArr.length >= result.length) {
                result=[];
               for(var j=0;j<tempArr.length;j++){
                   result.push(tempArr[j]);
               }
                if(i==nums.length-2){
                    result.push(nums[i+1]);
                }
            }
        }
        else {
            if(nums[i]>nums[i-1]){
                result.push(nums[i]);

            }
            tempArr = [];

        }
    }
    if(isSequence){
        return result;
    }
    else{
        return 'no';
    }

}


console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));

