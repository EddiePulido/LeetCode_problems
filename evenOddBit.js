const evenOddBit = n => {
    const bin = n.toString(2)
    console.log({bin, n})
    return [...bin].reverse().reduce((a,c,i) => {
        if(c === '1'){
            i % 2 ? a[1]++ : a[0]++
        }

        return a
    },[0,0])
}
