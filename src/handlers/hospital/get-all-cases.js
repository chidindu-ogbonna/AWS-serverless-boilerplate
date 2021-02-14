/*global require */

const { makeResponse } = require("../../utils/response");

/**
 * Get all cases
 * @param {import("aws-lambda").APIGatewayProxyEvent} event
 * @param {import("aws-lambda").Context} context
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
exports.default = async (event, context) => {
  const environment = process.env.STAGE;
  try {
    const body = {
      functionName: context.functionName,
      timeLeft: context.getRemainingTimeInMillis(),
      environment,
      ...event.body,
    };

    return makeResponse(body, 200);
  } catch (error) {
    console.log(error);
    return error;
  }
};
