const pipe = (obj) => {
  return function (...args) {
    for (let key in obj) {
      let val = obj[key];
      if (typeof val == "function") {
        obj[key] = val(...args);
      }
      else obj[key] = pipe(val)(...args)
    }
    //need to return the obj since this obj could be an object of objects/functions or just values
    //which will assigned to else obj[key]
    return obj;
  }
}