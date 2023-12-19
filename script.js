//source : Learners Bucket
const circuitBreaker = (fn, failureCount, timeThreshold) => {
  let failures = 0;
  let timeSinceLastFailure = 0;
  let isClosed = false;
  
  return function(){
    // if service is closed, check if the threshold time exceeded to reset isClosed to false;
    if(isClosed){
      const diff = Date.now() - timeSinceLastFailure;
      if(diff > timeThreshold){
        isClosed = false;
      }
      // else throw error
      else{
        console.error("Service unavailable");
        return;
      }
    }
    
    // try running the function
    // if it passes reset the failure count
    //use try to catch the manually sent errors
    try{
      const result = fn();
      failures = 0;
      return result;
    }
    // if function throws error / fails
    // increase the failure count and 
    // timewhen it fails
    catch(error){
      failures++;
      timeSinceLastFailure = Date.now();
      if(failures >= failureCount){
        isClosed = true;  
      }
      
      console.log("Error");
    }
  }
}