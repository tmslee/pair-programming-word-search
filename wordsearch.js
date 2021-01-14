const wordSearch = (letters, word) => { 
    if(letters.length === 0 || letters[0].legnth === 0) return false;
    if(word.lengh === 0) return true;

    for(let r = 0; r < letters.length; r ++){
        for(let c = 0; c < letters[0].length; c++){
            if(hSearch(r, c, word, letters) || vSearch(r, c, word, letters)) return true;
        }
    }
    
    return false;
}                                                                                                                       

const hSearch = (r, c, word, letters) => {
    if(letters[0].length - c >= word.length){
        for(let idx = 0; idx<word.length ; idx++){
            if(letters[r][c+idx] !== word[idx]) return false;
        }
        return true;
    }
    return false;
}

const vSearch = (r, c, word, letters) => {
    if(letters.length - r >= word.length){
        for(let idx = 0; idx<word.length ; idx++){
            if(letters[r+idx][c] !== word[idx]) return false;
        }
        return true;
    }
    return false;
}

module.exports = wordSearch

