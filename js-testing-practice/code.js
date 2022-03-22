function capitalize(str) {
    let firstLetter = str.charAt(0).toUpperCase();
    let output = firstLetter.concat(str.slice(1));
    return output
}

function reverseString(str){
    let output = '';
    for(let i = str.length-1; i >= 0; i--){
        output = output.concat(str.charAt(i));
    }
    return output;
}

const calculator = {
    add (a,b){
        return a + b;
    },
    subtract (a,b){
        return a - b;
    },
    multiply (a,b){
        return a * b;
    },
    divide (a,b){
        return a / b;
    }
}

module.exports = { capitalize, reverseString, calculator };
