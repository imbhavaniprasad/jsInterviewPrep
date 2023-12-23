const filterArray = (arr, filter) => {
  if (typeof filter == "string") {
    for (const entry of arr) {
      //Object.entries returns array of key value pairs
      //[['name', 'John'],['id','1']]
      for (const [key, value] of Object.entries(entry)) {
        if (value == filter) {
          return entry;
        }
      }
    }
  }
  //for in checks if the index exists in arr
  else if (filter in arr) {
    return arr[filter];
  }
  else return undefined
}