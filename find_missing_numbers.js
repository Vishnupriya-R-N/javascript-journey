function missingNumber(nums){
let total=nums.length*(nums.length+1)/2;
let sum=0;
for(let i=0;i<nums.length;i++){
    sum+=nums[i];
}
let missing=total-sum;
return missing;
}
console.log(missingNumber([0,1,3]));

//sum= 0+1+3=4
//total=3*(3+1)/2
//12/2 = 6
//total-sum=6-4=2
