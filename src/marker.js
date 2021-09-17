class Marker {
  constructor(size,color, remainingInk){
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk
  }
  write(word){

    let outWord = '';

    for (let char of word){
      if(char === ' ')     outWord += char;
      else {
        if (this.remainingInk<1) continue;
        outWord += char;
        this.remainingInk--;
      }

    }
    return outWord
  }
}

module.exports = Marker
