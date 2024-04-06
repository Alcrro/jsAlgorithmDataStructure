// class FancyLogger {
//   constructor() {
//     this.logs = [];
//   }

//   log(message) {
//     this.logs.push(message);
//     console.log(`Fancy: ${message}`);
//   }
//   printLogCount() {
//     console.log(`${this.log.length} logs.`);
//   }
// }

// module.exports = FancyLogger;
class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`Fancy: ${message}`);
  }
  printLogCount() {
    console.log(`${this.logs.length} logs.`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);

module.exports = logger;
