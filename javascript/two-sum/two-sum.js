const twoSum = function(nums, target) {
  
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }  
  };

numarray = [2,7,11,15]
targetint = 9

let output = twoSum(numarray, targetint)

console.log(output)