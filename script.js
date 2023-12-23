function BrowserHistory() {
  // track history
  this.history = [];
  this.index = -1;

  // add new url at next index
  this.visit = function (url) {
    this.history[++this.index] = url;
    //consider history starts with 1 index
    this.history.length = this.index + 1;
  }

  // return the url of the current index
  this.current = function () {
    return this.history[this.index];
  }

  // go to previous entry
  this.backward = function () {
    this.index = Math.max(0, --this.index);
  }

  // go to next entry
  this.forward = function () {
    this.index = Math.min(this.history.length - 1, ++this.index);
  }
}