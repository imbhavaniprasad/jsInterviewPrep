//obs : classes or methods or functions as class (instances can be created for) can't have let const...
//refers using this
//here we pass this to next funcs
//with methods we cant create instances
// const calculator = {
//   total: 0,
//   add: function (val) {
//     this.total += val;
//     return this;
//   },
//   subtract: function (val) {
//     this.total -= val;
//     return this;
//   },
//   divide: function (val) {
//     this.total /= val;
//     return this;
//   },
//   multiply: function (val) {
//     this.total *= val;
//     return this;
//   }
// };

// so use functions
const CALC = function () {
  this.total = 0;

  this.add = (val) => {
    this.total += val;
    return this;
  }

  this.subtract = (val) => {
    this.total -= val;
    return this;
  }

  this.multiply = (val) => {
    this.total *= val;
    return this;
  }

  this.divide = (val) => {
    this.total /= val;
    return this;
  }

  this.value = () => this.total;
}