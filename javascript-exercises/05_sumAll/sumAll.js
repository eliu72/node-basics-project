const sumAll = function(int1,int2) {
    if (typeof(int2) != "number" || typeof(int1) != "number"){
        return "ERROR";
    }
    if (int1 < 0 || int2 < 0){
        return "ERROR";
    }
    let lower = Math.min(int1, int2), higher = Math.max(int1, int2);
    let sum = 0;
    for (let i = lower; i < higher+1; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
