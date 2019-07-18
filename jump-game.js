function canJump(nums) {
    let dpPositions = new Array(nums.length).fill(false);
    //First one is always true
    dpPositions[0] = true;

    for(let j = 1; j < nums.length; j++){
        for(let i = 0; i < j; i++){
            //check if it is possible to reach i step and if you can reach j from i
            if(dpPositions[i] && i + nums[i] >= j){
                dpPositions[j] = true;
                break;
            }
        }
    }

    return dpPositions[dpPositions.length -1];

}
