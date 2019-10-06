function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
//O(n)
//It's linear because a single operation is being performed for each element in the array