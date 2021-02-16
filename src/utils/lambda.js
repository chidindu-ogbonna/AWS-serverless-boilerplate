/*global exports */

/**
 * Detect the stage this function is executed in
 * @param {import("aws-lambda").APIGatewayProxyEvent} event
 */
exports.detectStage = (event) => {
  return event.requestContext.stage;
};

/**
 * Create response to be sent to client
 * @param {object} responseBody The response to be sent to the client
 * @param {*} responseBody.data - Data to be sent to the client. Can be any value
 * @param {object|null} responseBody.error - error sent to the client
 * @param {Number} statusCode - status code sent to the client
 */
exports.makeResponse = (responseBody, statusCode) => {
  const { error } = responseBody;

  if (error) {
    responseBody.status = "error";
  } else {
    responseBody.status = "success";
  }

  return {
    statusCode,
    body: JSON.stringify(responseBody),
  };
};
