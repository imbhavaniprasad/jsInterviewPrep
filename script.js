//analysis :
//first time it sum is invoked & storage will have 1
// now it returns temp function
//so sum(1)(2)=> temp(2) which returns one more func
// sum(1)(2)(3)=> temp(3)
//sum(1)(2)(3)(4)=>temp(4)
// sum(1)(2)(3)(4)()=> returns the reduce data & assigns to res which is what log
const sum = (...args) => {
  //spread the arguments in storage array
  const storage = [...args];

  //base case
  //if invoked without any argument
  if (storage.length === 0) {
    return 0;
  }
  //closure
  else {
    //create an inner function
    const temp = function (...args2) {
      //get the arguments of inner function
      //merge them in existing storage

      storage.push(...args2);

      //if no arguments are passed 
      //return the value
      if (args2.length === 0) {
        return storage.reduce((a, b) => a + b, 0);
      }
      //else return the same function again
      else {
        console.log("args2", args2)
        return temp;
      }
    }
    console.log("temp", temp)
    //return the function
    return temp;
  }
}