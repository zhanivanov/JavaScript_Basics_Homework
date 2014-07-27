/**
 * Created by Zhan on 25.7.2014 г..
 */
function findMaxSequence(nums) {
    var currentSequence = 1,
        longestSequence = 1,
        maxSeqNum = nums[0];

    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            currentSequence++;
            if (currentSequence >= longestSequence) {
                longestSequence = currentSequence;
                maxSeqNum = nums[i];
            }
        }
        else {
            currentSequence = 1;

        }
    }

    var result = [];
    for (var i = 0; i < longestSequence; i++) {
        result.push(maxSeqNum);
    }

    return result;
}


console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));
console.log(findMaxSequence([1, 1, 1, 3, 3, 2, 2, 2]));