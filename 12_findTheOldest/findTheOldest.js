const findTheOldest = function(array) {
    
    let date = new Date()
    let year = date.getFullYear()


      let age = 0
      let person = 'bigman'
      array.forEach((input) =>{
        if('yearOfDeath' in input == false){
            input.yearOfDeath = year
        }
        if((input.yearOfDeath-input.yearOfBirth)>age){
            age = (input.yearOfDeath - input.yearOfBirth)
            person = input
        }
      })
      return person
};

// Do not edit below this line
module.exports = findTheOldest;
