// This is the proper way to start a javascript library
(function() {
  
// This makes the arguments variable behave the way we want it to and a few
// other things. For more info: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(anything) {
    return anything;
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of: 
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(anything) {
    if(typeof(anything) === 'undefined') {
        return 'undefined';
    }
    else if(anything === null){
        return "null";
    }else if(anything.length && typeof(anything) !== 'string') {
        return "array";
    }else return typeof(anything);
};

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/

_.first = function(array, number) {
  if(_.typeOf(array) !== 'array') {
      return [];
  }
  if(!number) {
        return array[0];
    } 
    if(array.length < number) {
        return array;
    }
    
    //Return the first 'n' elements in an array
    
    var out = [];
    for(var i = 0; i < number; i++) {
        out.push(array[i]);
    } 
    return out;
    
};
    

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.last = function(array, number) {
    if(_.typeOf(array) !== 'array') {
        return [];
    }
   if(_.typeOf(number) !== 'number') {
       return array[array.length - 1];
   }
   if(array.length < number) {
       return array;
   } 
   if (number < 0) {
       return [];
   }
   
   //return the last 'n' elements in an array 
   var out = [];
    for(var i = number -1; i < array.length; i++) {
        out.push(array[i]);
    } 
    return out;
};

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments: 
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)}); 
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, fn) {
  if(_.typeOf(collection) === 'array') {
      for(var i = 0; i < collection.length; i++) {
          fn(collection[i], i, collection); 
      }
  } if(_.typeOf(collection) === 'object') {
      for(var key in collection) {
          fn(collection[key], key, collection);
      }
  } 
};

/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
  for(var i = 0; i < array.length; i++) {
      if(value === array[i]) {
        return i;          
      } 
  }     return -1;
};

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

    
_.filter = function(array, fn) {
    var anArray = [];
    _.each(array, function(element, i, collection) {
     if(fn(element, i, collection) === true) {
        anArray.push(array[i]); 
        } 
    }
    );
    return anArray;
};
/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, fn) {
  return _.filter(array, function(element, i, collection) {
    return (!fn(element, i, collection));
  }  
  );
};


/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, fn) {
  return [_.filter(array, fn), _.reject(array, fn)];
};

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/*_.unique = function(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(newArray.indexOf(array[i]) === -1) {
        newArray.push(array[i]);    
        }
    }   
        return newArray;
};
*/

//OR you could also go ahead and write it this way 

 _.unique = (array) => {
    let newArray = [];
    _.each(array, (el, i, array) => {
        if (_.indexOf(newArray, el) === -1) newArray.push(el);
    });
    return newArray;
};
 
 
/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, transform) {
    let newArray = [];
    _.each(collection, (element, i, collection) => {
        newArray.push(transform(element, i, collection));    
        
    });
    return newArray;
};

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = (array, property) => {
    let newArray = [];
    _.map(array, function(element, i, array) {
        newArray.push(element[property]);
    });
    return newArray;
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
  return (_.indexOf(array, value) === -1) ? false : true;
};

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, test) {
    if(test === undefined) {
    test = _.identity;
    }
    let truth = true;
    _.each(collection, (value, i, list) => {
        if (test(value, i, list) === false)
        truth = false;
    }); return truth;
};

/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, fn) {
  if(fn === undefined) {
    fn = _.identity;
    }
    let truthems = false;
    _.each(collection, (value, i, list) => {
        if (fn(value, i, list) === true)
        truthems = true;
    }); return truthems;
};

/** _.reduce()
* Arguments:
*   1) A collection
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
*/

/* Reduce boils down a list of values and reduces it to one. Start is the initial state
*    
*/
_.reduce = function (collection, fn, start) {
    let prev;
    if (start !== undefined) {
        prev = start;
        
    _.each(collection, (element, i, col) => prev = fn(prev, element, i));
    }
    else {
        prev = collection[0];
        _.each(collection, (element, i, col) => {
            if (i === 0) return;
            prev = fn(prev, element, i);
        });
    }
    return prev;
};

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = (objectOne, objectTwo, ...rest) => {
    let args = [objectOne, objectTwo].concat(rest);
   _.reduce(args, (memo, element, i) => {                      //use "i" instead of key because we are dealing with an array of objs
  
        return _.reduce = (element, (memo, element, key) => {              //mutating values of objectOne (changing values of Obj1)
            memo[key] = element;
            return memo;
        }, memo);
        
    }, args[0]);
    
    return args[0];
};

window._ = _;       //this piece of code makes underpants global so it can be accessed by lodown.js

// This is the proper way to end a javascript library
}());
