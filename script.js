const fetchWithTimeout = (url, duration) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerid = null;
    
    fetch(url, { signal })
      .then((resp) => {
      resp.json().then((e) => {
        clearTimeout(timerid);
        console.log("res",e)
      }).catch((error) => {
        console.log("error",error)
      })
     })
    
    timerid = setTimeout(() => {
      console.log("Aborted");
      controller.abort();
    }, duration);
}
// fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100).then((resp) => {
//   console.log(resp);
// }).catch((error) => {
//   console.error(error);
// });

// Aborted
// error