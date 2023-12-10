const throttle = (task, count = task.length, callback, delay = 1000) => {
    // track the throttle
    let lastFunc;
    let lastRan;
    // track the task
    let queue = [];
    //below we return a function aka this forms a closure
    return function() {
      // if the throttle is executed the first time
      // run it immediately
      if (!lastRan) {
        // copy all the tasks to the queue
        queue = [...queue, ...task];
        
        // get the amount of task to run
        //splice modifies the original array  if you assign to a var, it gives a removed array
        const execute = queue.splice(0, count);
        
        // pass those tasks to the callback
        callback(execute); 
        
        // update the last ran time
        // to run it after the delay
        lastRan = Date.now();
      } else {
        // clear the timer 
        clearTimeout(lastFunc);
        
        // start a new timer
        // run the function after the delay
        lastFunc = setTimeout(function() {
          // calc the difference between 
          // the last ran and current time
          // if it is greater than the delay 
          // invoke it
          console.log("in set timeout")
          if ((Date.now() - lastRan) >= delay) {
            // copy all the tasks to the queue
            console.log("queue",queue);
            queue = [...queue, ...task];
            
             // get the amount of task to run
            const execute = queue.splice(0, count);
            
            // pass those tasks to the callback
            callback(execute);
            
            // update the last ran time
            // to run it after the delay
            lastRan = Date.now();
          }
        }, delay - (Date.now() - lastRan));
      }
    }
  };