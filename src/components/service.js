export default {
  calculateCnB: (num, guess) => {
    let count = { bulls: 0, cows: 0 };
    let g = guess.join("");
    for (let i = 0; i < num.length; i++) {
      let digPresent = g.search(num[i]) !== -1;
      if (num[i] === guess[i]) {
        count.bulls++;
      } else if (digPresent) {
        count.cows++;
      }
    }
    return count;
  },
  randomNumberGenerator: () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = numbers.length - 1; i >= 0; i--) {
      numbers.splice(Math.floor(Math.random() * numbers.length), 1);
      if (numbers.length === 4) {
        return numbers;
      }
    }
  }
};
