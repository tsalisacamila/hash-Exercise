const fs = require("fs");
const crypto = require("crypto");

// Target MD5 hash
const targetHash = "578ed5a4eecf5a15803abdc49f6152d6";

function md5Hash(input) {
  return crypto.createHash("md5").update(input).digest("hex");
}

function dictionaryAttack(wordlistPath) {
  
  const wordlist = fs.readFileSync(wordlistPath, "utf8").split("\n");

  for (let word of wordlist) {
    word = word.trim();

    
    if (md5Hash(word) === targetHash) {
      console.log(`Bob's password is: ${word}`);
      return;
    }
  }

  console.log("Password not found in the wordlist.");
}

// Path to the wordlist file
const wordlistPath = "./500-worst-passwords.txt";

dictionaryAttack(wordlistPath);