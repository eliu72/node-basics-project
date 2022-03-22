const removeFromArray = function(arr, ...opArgs) {
    for (let arg of opArgs){
        let index = arr.indexOf(arg);
        if (index > -1){
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
