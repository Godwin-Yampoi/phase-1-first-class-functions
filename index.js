// receivesAFunction function implementation
function receivesAFunction(callback) {
    callback();
  }
  
  // returnsANamedFunction function implementation
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  // returnsAnAnonymousFunction function implementation
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("This is an anonymous function");
    };
  }
  