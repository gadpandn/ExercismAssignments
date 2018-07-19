

var RLE = {};

RLE.encode = function(input) {
    var arrayOfStrings = [];
    var output = input.charAt(0);
    for(var i=0;i<input.length;i++) {
        if(input[i] === input[i+1]) {
            output += input[i];
        }
        else {
            if(input[i+1] != undefined) {
                 output += input[i+1];
            }
        }
   }
     arrayOfStrings.push(output);
    console.log(arrayOfStrings);
}

RLE.encode("aabb");

//module.exports = RLE;

// "" empty array
// "a"    [a]
// "aaa"  [aaa]
// "ab"   [a,b]
// "aabb" [aa,bb] 


