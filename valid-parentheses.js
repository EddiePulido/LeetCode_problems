const isValid = s => {
    let arr = [];
    let open = ['[','{','('];
    let closed = ['}', ')', ']'];
    let dict = {']':'[', '}':'{', ')':'('};

    for(let i=0;i<s.length;i++){
        if(open.includes(s[i])){
            arr.push(s[i]);
        }else if(closed.includes(s[i])){
            if(arr.length > 0 && arr[arr.length-1] == dict[s[i]]){
                arr.pop();
            }else{
                return false;
            }
        }
    }

    return arr.length == 0;
};