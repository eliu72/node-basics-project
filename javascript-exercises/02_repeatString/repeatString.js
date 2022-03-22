const repeatString = function(str, repeats) {
    if (repeats < 0)
        return "ERROR";
    output = "";
    for (let i = 0; i < repeats; i++){
        output += str;
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
