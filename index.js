//Google Question
// given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//it should return 2



// given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//It shoud return 1



// given an array = [2, 3, 4, 5]
// it should return undefined

// first naive appproach: nested loops

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i+1; j < input.length; j++){
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
} //time O(n^2) space O(1)

// hash table solution
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if(map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
  }
  return undefined;
} //improved time to O(n) but increased space complexity to O(n)

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])