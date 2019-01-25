//function that takes in 2 parameters
function mathFunction(a, b) {
    return a + 1 * b
}
mathFunction(3, 4)

<<<<<<< HEAD
=======

>>>>>>> 71abae145c7b8fc5f5653cabda2d51b537419f2b
//function that gives the maximum length difference.
//Codewar assignment
function mxdiflg(a1, a2) {

    if(a1.length===0 || a2.length===0){
    return -1
    }
    
    var biggestDifference = 0;
    
    for(var i=0; i<a1.length;i++){
      for(var j=0;j<a2.length;j++){
        if(Math.abs(a1[i].length - a2[j].length) > biggestDifference){
          biggestDifference = Math.abs(a1[i].length - a2[j].length)
    }
    }
    }return biggestDifference
    }

//function used to practice operators
function person(){
    if(userAge < 67){
        console.log("This person is senior")
    } else if(userAge < 18){
        console.log("This person is still a child")
    } else console.log ("This person is an adult")
}
