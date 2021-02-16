/*global require exports console */

const { StatusCodes } = require("http-status-codes");
const { makeResponse } = require("../../utils/lambda");

/**
 * Create a new hospital - POST - /v1/hospitals
 * @param {import("aws-lambda").APIGatewayProxyEvent} event
 * @param {import("aws-lambda").Context} context
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
exports.handler = async (event, context) => {
  const response = {
    message: "hospital deleted",
    data: null,
    ...event,
    // path: event.path,
    // body: event.body,
    // httpMethod: event.httpMethod,
    // pathParameters: event.pathParameters,
    // query: event.queryStringParameters,
    // stageVariables: event.stageVariables,
  };

  return makeResponse(response, StatusCodes.OK);
};
