const reverseString = function(str) {
    // return str.split("").reverse().join("");
    output = "";
    for (let i = str.length-1; i >= 0; i--){
        output += str[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
