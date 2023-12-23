// const aggregateSimple = (arr) => {
//   let data = new Map();
//   let ans = arr.map((elem, index) => {
//     if (!data.has(elem.user)) {
//       data.set(elem.user, "");
//       let x = {};
//       x.user = elem.user;
//       x.skills = [];
//       arr.forEach(el => {
//         if (el.user == elem.user) {
//           x.skills.push(el.skill);
//         }
//       })
//       return x;
//     }
//   })
//   return ans.filter(e => e);
// }
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