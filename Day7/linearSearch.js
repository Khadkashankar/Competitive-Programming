function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([-5, 2, 4, 1, 6], 2));
console.log(linearSearch([-5, 2, 4, 1, 6], 1));
console.log(linearSearch([-5, 2, 4, 1, 6], 6));
console.log(linearSearch([-5, 2, 4, 1, 6], 20));//20 is not in the array so return -1