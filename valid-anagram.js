function isAnagram(s, t) {
    if(s.length !== t.length){
        return false;
    }

    // return s.split('').sort().join("") == t.split('').sort().join("")

    const sCharCounts = {};
    const tCharCounts = {};

    //Fill sCharCounts
    for(let i=0; i< s.length; i++){
        const sChar = s[i];
        //increases value of key by one if it exists OR sets it to one
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
    }

    for(let i=0; i < t.length; i++){
        const tChar = t[i];

        if(!sCharCounts[tChar]){
            return false;
        }else{
            sCharCounts[tChar]--
        }
    }

    return true;


}