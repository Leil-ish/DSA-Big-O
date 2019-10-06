function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//O(1)
//This always only runs one operation, regardless of the size of the array input.