const pipe = (...fns) => {
  return function (val) {
    for (let fn of fns) {
      val = fn(val);
    }
    return val;
  }
}