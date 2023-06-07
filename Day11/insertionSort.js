function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }   
}
const arr = [8, 20, -2, 4, -6];//array to be sorted
insertionSort(arr);
console.log(arr);