const vowelStrings = (words, left, right) => {
    let count = 0
    const vowels = 'aeiou'

    for(let i = left; i <= right; i++){
        const word = words[i]

        if(vowels.includes(word[0]) && vowels.includes(word.slice(-1))){
            count++
        }
    }

    return count
}