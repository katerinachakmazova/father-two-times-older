'use strict';

/**
 * 
 * @param {Number} ageSon 
 * @param {Number} ageFather 
 * @returns {String} message about when father will be, is or was two times older than son
 */
function whenFatherTwoTimesOlder (ageSon, ageFather) {
  if (ageFather <0 || ageSon < 0) {
    return 'Age can not be negative';
  }
  else if (ageFather - ageSon < 15){
    return 'Age difference is too small';
  }
  else{
    let fatherHitTheAge = (ageFather - ageSon)*2;
    if(fatherHitTheAge > ageFather) {
      return `Father will be two times older than son in ${fatherHitTheAge-ageFather} years`;
    }
    else if (fatherHitTheAge < ageFather) {
      return `Father was two times older than son ${ageFather-fatherHitTheAge} years ago`;
    }
    else {
      return 'Father is two times older than son right now';
    }
  }
}

console.log(whenFatherTwoTimesOlder(5, 10));
console.log(whenFatherTwoTimesOlder(-5, 10));
console.log(whenFatherTwoTimesOlder(20, 40));
console.log(whenFatherTwoTimesOlder(15, 35));
console.log(whenFatherTwoTimesOlder(36, 71));