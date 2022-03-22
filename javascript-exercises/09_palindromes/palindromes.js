const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '').toLowerCase();
    console.log(str);
    let left = 0, right = str.length-1;
    while(right > left){
        if (str[left] === str[right]){
            right--;
            left++;
        }
        else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
