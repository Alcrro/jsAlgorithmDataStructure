const logger = require("./FancyLogger");

function logFirstImplementation() {
  logger.printLogCount();
  logger.log("First File");
  logger.printLogCount();
}

module.exports = logFirstImplementation;
