var findJudge = function(n, trust) {
    const count = new Array(n + 1).fill(0)

    for([a,b] of trust){
        count[a] -= 1
        count[b] += 1
    }
    console.log({count})
    for(let i = 1; i <= n; i++){
        if(count[i] === n-1) return i
    }

    return -1
}