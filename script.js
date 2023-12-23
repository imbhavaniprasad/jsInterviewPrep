const aggregateSimple = (arr, on, who) => {
  let data = new Map();
  let ans = arr.map((elem) => {
    if (!data.has(elem[on])) {
      data.set(elem[on], "");
      let x = {};
      x[on] = elem[on];
      x[who] = [];
      arr.forEach(el => {
        if (el[on] == elem[on]) {
          x[who].push(el[who]);
        }
      })
      return x;
    }
  })
  return ans.filter(e => e);
}
const aggregate = (arr, on, who) => {
  // using reduce() method to aggregate 
  const agg = arr.reduce((a, b) => {
    //a is accumulator (initial value as {})
    //b is current value

    const onValue = b[on];
    const whoValue = b[who];

    if (a[onValue]) {
      a[onValue] = {
        [on]: onValue,
        [who]: [...a[onValue][who], whoValue]
      }
    }
    else {
      a[onValue] = {
        [on]: onValue,
        [who]: [whoValue]
      }
    }
    return a;
  }, {});
  // since initial value was {} , answer would be a kinda Map
  return Object.values(agg);
}