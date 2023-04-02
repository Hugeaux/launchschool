function cleanUp(text) {
  let spaceText = (text.replace(/[^a-z]/gi, ' '));
  let cleanText = spaceText.replace(/\s+/g, ' ');
  console.log(cleanText);
}

cleanUp("---what's my +*& line?");    // " what s my line "

/*
iterate over string
if character is non-alphabetic, replace with ' '
string.replace(/[^A-Za-z0-9], ' ')
*/