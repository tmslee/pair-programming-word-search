const wordSearch = (letters, word) => { 
    if(letters.length === 0 || letters[0].legnth === 0) return false;
    let rows = letters.length;
    let cols = letters[0].length;

    for (let i = 0; i < letters.length; i++) {
        if(letters[i].join('').includes(word)) return true 
    }
    
    for(let col = 0 ; col < cols ; col ++){
        let colStr = '';
        for(let row = 0 ; row < rows ;row ++){
            colStr += letters[row][col];
        }
        if(colStr.includes(word)) return true;
    }

    return false;
}                                                                                                                       

module.exports = wordSearch

