module.exports = class DepthCalculator {
  constructor() {
    this.hasRun = false;
  }
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;

    let result = 1;
    let depth = 0;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        if (this.hasRun) {
          const newRun = this.calculateDepth(item);
          if (newRun > depth) depth = newRun;
        } else {
          this.hasRun = true;
          depth = this.calculateDepth(item);
        }
      }
    });

    result += depth;

    return result;
  }
};
