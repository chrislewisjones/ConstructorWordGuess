function Letter(char) {
  this.char = char.toUpperCase();
  this.guessed = false;
  this.showChar = function() {
    if (this.guessed) {
      console.log(this.char);
    } else {
      console.log(" _ ");
    }
  };
}
