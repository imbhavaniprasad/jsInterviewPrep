const generateSelector = (root, target) => {
  // trace the selector from target to root
  const selectors = [];

  // iterate till root parent is found
  while (target !== root) {
    // get the position of the current element as its parent child
    // add one to it ass CSS nth-child is not like array, it starts from 1.
    //Array.from() method is used to create a new array instance from an array-like or iterable object. 
    //It allows you to convert objects that are not inherently arrays, such as NodeList, arguments object, or strings, into arrays.
    const nthChild = Array.from(target.parentNode.children).indexOf(target) + 1;
    const selector = `${target.tagName.toLowerCase()}:nth-child(${nthChild})`;

    // add the selector at the front
    selectors.unshift(selector);

    // move to the parent
    target = target.parentNode;
  }

  // add the root's tag name at the beginning
  // with your preferred selector
  // id is used here
  selectors.unshift(`${target.tagName.toLowerCase()}[id="${target.id}"]`);

  // join the path of the selector and return them
  return selectors.join(' > ');
}