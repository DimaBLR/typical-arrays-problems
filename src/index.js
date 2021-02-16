
exports.min = function min(arr) {
    if (arguments.length == 0 || arr.length == 0) {
        return 0
    }
    arr.sort((a, b) => a - b)
    return arr[0];
}

exports.max = function max(arr) {
    if (arguments.length == 0 || arr.length == 0) {
        return 0
    }
    arr.sort((a, b) => b - a)
    return arr[0];
}

exports.avg = function avg(arr) {
    if (arguments.length == 0 || arr.length == 0) {
        return 0
    }
    let result = arr.reduce((a, b) => a + b)
    return result / arr.length
}
