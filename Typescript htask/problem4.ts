var arr = ["GUVI", "I", "am", "a geek"];
var newobjt = { "1": "2" };
function transformFirstAndlast(arr) {
    for (var keys in newobjt) {
        keys = arr[0];
        newobjt[keys] = arr[3];
    }
}
transformFirstAndlast(arr);
delete newobjt["1"];
console.log(newobjt);
