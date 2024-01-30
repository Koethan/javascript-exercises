// const palindromes = function (string) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz"
//     let cleanString = string.toLowerCase()
//     let reversed = cleanString.split('').reverse()
//     let empty = []
//     let missingCharacters = []
//     reversed.forEach((character)=>{
//         if(alphabet.includes(character)){
//             empty.push(character)
//         } else{
//             missingCharacters.push(character)
//         }
//     })
//     if(missingCharacters.length >= 1){
//         missingCharacters.forEach((character)=>{
//             let index = cleanString.indexOf(character)
//             reversed.splice(index,0,character)
//         })
//     }
    
    
//     return reversed;
// };

const palindromes = function(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let lowerString = string.toLowerCase().split('')
    let cleanString = []
    lowerString.forEach((character)=>{
        if(alphabet.includes(character)){
            cleanString.push(character)
        }
    })
    let forward = cleanString.join('')
    let backwards = cleanString.reverse().join('')
    
    return forward == backwards

}


// Do not edit below this line
module.exports = palindromes;
