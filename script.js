// helper function to create a key from the input
const generateKey = (path, config) => {
//The localeCompare method is a string method in JavaScript that is used for comparing strings in a locale-sensitive way. It takes another string as an argument and returns a value indicating whether the string comes before, after, or is equal to the given string based on the locale-specific order.
//If you don't use localeCompare in the sorting function, the sort method will perform a lexicographic (dictionary-style) sorting of the keys. This means that the keys will be sorted based on their Unicode code points, which may not be appropriate for all languages and locales.

const key = Object.keys(config)
    .sort((a, b) => a.localeCompare(b))
    .map((k) => k + ":" + config[k].toString())
    .join("&");
  return path + key;
};

// helper function to make api call
const makeApiCall = async (path, config) => {
  try{
    let response = await fetch(path, config);
    response = await response.json();
    return response;
  }catch(e){
    console.log("error " + e);
  }
  
  return null;
};

const cachedApiCall = (time) => {
  // to cache data
  const cache = {};
  
  // return a new function
  return async function(path, config = {}) {
    // get the key
    const key = generateKey(path, config);
    
    // get the value of the key
    let entry = cache[key];
  
    // if there is no cached data
    // or the value is expired
    // make a new API call
    if(!entry || Date.now() > entry.expiryTime){
      console.count("making new api call");
      
      // store the new value in the cache
      try {
        const value = await makeApiCall(path, config)
        cache[key] = { value, expiryTime: Date.now() + time };
      }catch(e){
       console.log(error); 
      }
    }
    //return the cache
    return cache[key].value;
  }
};

const call = cachedApiCall(1500);

// first call
// an API call will be made and its response will be cached
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
//"making new api call"
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

// cached response will be returned
// it will be quick
setTimeout(() => {
  call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 700);
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

// a fresh API call is made
// as time for cached entry is expired
setTimeout(() => {
  call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 2000);
//"making new api call"
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/