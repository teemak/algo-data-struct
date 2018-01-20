function anagrams(str1, str2) {
  const charMapA = buildCharMap(str1);
  const charMapB = buildCharMap(str2);
  
  if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for(let char in charMapA) {
    if(charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;

}

/* Easier to read */

function anagrams2(strA, strB) {
  return cleanString(strA) === cleanString(strB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


let data1 = 'rail safety';
let data2 = 'fairy tales';

let result = anagrams2(data1, data2);

console.log(result);
