//CodeWar Johnny
//loop will start at 1 and end when the number of loop's squared number is less than the arguement
//it will push those squared number into perfNum array and return the list that was pushed.


function lockerRun(lockers){
    var perfNum = [];
    for (let i = 1; i * i <= lockers; i++){
     perfNum.push(i * i); 
    }return perfNum
  }