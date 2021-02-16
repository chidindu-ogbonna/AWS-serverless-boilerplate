/*global require exports console */

const { StatusCodes } = require("http-status-codes");
const { makeResponse } = require("../../utils/response");

/**
 * Get list of hospitals - GET - /v1/hospitals
 * @param {import("aws-lambda").APIGatewayProxyEvent} event
 * @param {import("aws-lambda").Context} context
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
exports.handler = async (event, context) => {
  const response = {
    data: "",
    path: event.path,
    body: event.body,
    httpMethod: event.httpMethod,
    pathParameters: event.pathParameters,
    query: event.queryStringParameters,
  };

  if (event.queryStringParameters) {
    const { limit } = event.queryStringParameters;
    if (limit) {
      console.info("This rocks!");
    }
  }

  return makeResponse(response, StatusCodes.OK);
};
