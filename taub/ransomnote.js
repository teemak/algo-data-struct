function harmlessRansomNote(note, mag) {
  let noteArr = note.split(' '); 
  let magArr = mag.split(' '); 

  let magObj = {};
  
  //Counts available words
  magArr.forEach(word => {
    if (!magObj[word]) {
      magObj[word] = 0;
    } 
    magObj[word]++;
  });

  //Check if enough words
  let ransom = true;

  noteArr.forEach(word => {
    if(magObj[word]) {
      magObj[word]--;
      if(magObj[word] < 0) {
        ransom = false;
      }
    } else {
      ransom = false;
    }
  });

  return ransom;
}

function print(data) {
  console.log(data);
}

let note = 'This is is is awesome';
let magazine = 'This is awesome also is';

let result = harmlessRansomNote(note, magazine);
print(result);
