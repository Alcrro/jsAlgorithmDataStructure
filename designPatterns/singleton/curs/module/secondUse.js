const logger = require("./FancyLogger");

function logSecondImplementation() {
  logger.printLogCount();
  logger.log("Second File");
  logger.printLogCount();
}

module.exports = logSecondImplementation;
