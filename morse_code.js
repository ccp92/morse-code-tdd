const key = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".-.-.-": ".",
  "-.-.--": "!",
  "...---...": "SOS"
}

export default function decodeMorse(string) {
  string = string.trim();
  let words = string.split('   ');
  let decodedString = [];
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split(' ');
    let decodedLetters = "";
    for (let j = 0; j < letters.length; j++) {
      decodedLetters += key[letters[j]]
    }
    decodedString.push(decodedLetters);
  }
  return decodedString.join(' ');
}
