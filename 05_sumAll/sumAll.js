const sumAll = function(start,finish) {
    let answer = 0
    if(start > finish){
        let newFinish = start
        start = finish
        finish = newFinish
    }
    if(start < 0 || finish < 0 || typeof start !== "number" || typeof finish  !== "number"){
        return "ERROR"
    }
    for(let i = start; i <= finish; i++){
        answer += i
    }
    return answer
};

// Do not edit below this line
module.exports = sumAll;
