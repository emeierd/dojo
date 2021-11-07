function largestElement(arr) {
    var largest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestElement([1, 30, 5, 7]))