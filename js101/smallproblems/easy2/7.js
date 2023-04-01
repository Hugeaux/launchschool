function xor(arg1, arg2) {
  if ((arg1 && !arg2) || (arg2 && !arg1)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

/*
if arg1 is true && arg2 is false
return true
if arg1 is false && arg2 is true
return true 
if arg2 is true && arg2 is true
return false
if arg1 is false && arg2 is false
return false
*/