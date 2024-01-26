const removeFromArray = function(array, ...value) {
    let inputs = [...value]
    inputs.forEach(value => {

        let index = array.indexOf(value)
        if(index == -1){
            return array
        }
        let newArray = array.splice(index,1)
    })  
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
