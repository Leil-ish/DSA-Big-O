function solveHanoi(height, from, to, via) {
    if (height >= 1) {
  
      solveHanoi(height - 1, from, via, to);
  
      console.log('Move disk from Tower ', from, ' to Tower ', to);
  
      solveHanoi(height - 1, via, to, from);
    }
    
    return;
  }
  
console.log(solveHanoi(20, "A", "C", "B"));

//After 7 recursive calls, two disks are on the first rod and three are on the third rod.
//7 moves with 3, 15 moves with 4, 31 moves with 5
//O(1^n) - exponential