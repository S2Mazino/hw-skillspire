//function with three argument, utilizing all three
function calculate(funcName,a,b){
  if(funcName === "pythagoreanTheorem"){
    c=Math.sqrt((a**2)+(b**2))
    return c
  }else if(funcName === "multiply"){
    return a*b
  }else if(funcName === "add"){
    return a+b
  }
  }
  
  calculate("pythagoreanTheorem",7,4)