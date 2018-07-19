
var reverseString = function (string) {
    //Commenting below lines as it doesn't work as expected in some cases.-
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

    // var splitString,reverseStr;
    // if(string) {
    //      splitString = string.split('');
    //      reverseStr = splitString.reverse().join('');
    //     return reverseStr;
    // } else {
    //     return string
    // }

    var reverseStr = "";
    for(var i=(string.length-1);i>=0;i--) {
        reverseStr += string[i];
    }
    console.log(reverseStr);
    return reverseStr;

};
module.exports = reverseString;