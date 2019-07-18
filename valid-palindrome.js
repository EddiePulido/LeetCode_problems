function isPalindrome(s) {
    let pali = s.replace(/[\W_-]/g, '');
    let left = 0
    let right = pali.length-1

    while(left < right){
        if(pali[left].toLowerCase() != pali[right].toLowerCase()){
            return false;
        }
        left++;
        right--
    }

    return true;

}