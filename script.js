//classic debounce which executes after delay
// const debounce = (func, delay) => {
//   let inDebounce;
//   return function() {
//     const context = this;
//     const args = arguments;
//     clearTimeout(inDebounce);
//     inDebounce = setTimeout(() => func.apply(context, args), delay);
//   };
// };

// this can invoke the func immediately & also after the delay
const debounce = (fn, delay, option = { leading: true, trailing: true}) => {
  let timeout;
  let isLeadingInvoked = false;
  //why we pass args & context here? 
  //It passes the input target context from the eventlistener
  //which you can use to log e.target.value
  //this -> <input .../> element
  //args -> keyboardEvent which contains target
  return function (...args) {
    const context = this;
    
    //base condition
    if(timeout){
      clearTimeout(timeout);
    }
    // handle leading
    if(option.leading && !timeout){
      fn.apply(context, args);
      isLeadingInvoked = true;
    }else{
      isLeadingInvoked = false;
    }
    
    // handle trailing
    timeout = setTimeout(() => {
      if(option.trailing && !isLeadingInvoked){
        fn.apply(context, args);
      }
      
      timeout = null;
    }, delay);
  }
}