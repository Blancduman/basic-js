class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  doSomethingAlready(message, key, hacker) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let currentIndex = 0;
    let resultLetter = "";
    for (let i in message) {
      if (this.alphabet.indexOf(message[i]) < 0) {
        resultLetter += message[i];
        continue;
      }
      let currentLetterIndexInAlfabet = this.alphabet.indexOf(message[i]);
      let keyLetterIndexInAlfabet = this.alphabet.indexOf(
        key[currentIndex % key.length]
      );
      resultLetter += this.alphabet[
        hacker
          ? (currentLetterIndexInAlfabet - keyLetterIndexInAlfabet + 26) % 26
          : (currentLetterIndexInAlfabet + keyLetterIndexInAlfabet) % 26
      ];
      currentIndex += 1;
    }
    if (!this.direct) {
      return resultLetter
        .split("")
        .reverse()
        .join("");
    }
    return resultLetter;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    let encryptedLetter = this.doSomethingAlready(message, key);

    return encryptedLetter;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    let yesStartHacking = true;

    let decryptedLetter = this.doSomethingAlready(
      message,
      key,
      yesStartHacking
    );

    return decryptedLetter;
  }
}

module.exports = VigenereCipheringMachine;
