/*global exports */

/**
 * Make response to be sent to client
 * @param {object} obj
 * @param {Number} statusCode
 */
exports.makeResponse = (obj, statusCode) => {
  return {
    statusCode,
    body: JSON.stringify(obj),
  };
};
