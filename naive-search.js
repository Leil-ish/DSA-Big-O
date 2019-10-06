function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//Constant O(1) in best case, linear O(n) in worst case
//Best case assumes that the array has only one item. Worst case is linear linear because potentially each element in the array is being compared to 'item.'