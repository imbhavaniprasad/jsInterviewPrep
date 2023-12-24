const timer = (init = 0, step = 1) => {
  let intervalId;
  let count = init;
  //these 2 funcs are like forming closures
  const startTimer = () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log(count);
        count += step;
      }, 1000);
    }
  }

  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  }
  //we could just invoke timer()() if we have just one return func()
  // here we have 2 so return them to use invoke them seperately
  return {
    startTimer,
    stopTimer,
  };
}