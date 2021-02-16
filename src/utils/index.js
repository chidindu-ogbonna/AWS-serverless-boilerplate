/*global exports require */

const crypto = require("crypto");


/**
 * Generate an ID - which is a series of random characters
 * @param {Number} length - Number of characters in the id
 */
exports.generateID = (length = 16) => {
  return crypto.randomBytes(length).toString("hex");
};
