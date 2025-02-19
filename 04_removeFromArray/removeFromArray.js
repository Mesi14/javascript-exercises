const removeFromArray = function(arr, ...args) {
    args.forEach(arg => {
        let currArr = arr.filter(item => item !== arg)
        arr = currArr;
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
