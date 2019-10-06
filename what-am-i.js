function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

//O(n)
//This determines if a number is prime.
//It's linear because the loop has to be carried out for each number between 2 and n.