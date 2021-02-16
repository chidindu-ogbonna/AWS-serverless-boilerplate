/*global exports require */

const AWS = require("aws-sdk");
const { StatusCodes } = require("http-status-codes");
const { makeResponse } = require("../utils/lambda");
const documentClient = new AWS.DynamoDB.DocumentClient();

/**
 * Get a case - GET - /v1/cases/{id}
 * @param {import("aws-lambda").APIGatewayProxyEvent} event
 * @param {import("aws-lambda").Context} context
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
exports.getCase = async (event, context) => {
  const response = {
    data: "",
    path: event.path,
    body: event.body,
    httpMethod: event.httpMethod,
  };

  const { id } = event.pathParameters;

  return makeResponse(response, StatusCodes.OK);
};

/**
 * Get all cases - GET - /v1/cases
 * @param {import("aws-lambda").APIGatewayProxyEvent} event
 * @param {import("aws-lambda").Context} context
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
exports.getAllCases = async (event, context) => {
  const response = {
    data: "",
    path: event.path,
    body: event.body,
    httpMethod: event.httpMethod,
    pathParameters: event.pathParameters,
    query: event.queryStringParameters,
  };

  const { limit } = event.queryStringParameters;

  return makeResponse(response, StatusCodes.OK);
};

/**
 * Update a case - PUT - /v1/cases/{id}
 * @param {import("aws-lambda").APIGatewayProxyEvent} event
 * @param {import("aws-lambda").Context} context
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
exports.updateCase = async (event, context) => {
  const response = {
    data: "",
    path: event.path,
    body: event.body,
    httpMethod: event.httpMethod,
    pathParameters: event.pathParameters,
    query: event.queryStringParameters,
  };
  const { id } = event.pathParameters;
  return makeResponse(response, StatusCodes.OK);
};

/**
 * Create a new case - POST - /v1/cases
 * @param {import("aws-lambda").APIGatewayProxyEvent} event
 * @param {import("aws-lambda").Context} context
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
exports.createCase = async (event, context) => {
  const response = {
    data: "",
    path: event.path,
    body: event.body,
    httpMethod: event.httpMethod,
  };

  return makeResponse(response, StatusCodes.OK);
};

/**
 * Delete a case - DELETE - /v1/cases/{id}
 * @param {import("aws-lambda").APIGatewayProxyEvent} event
 * @param {import("aws-lambda").Context} context
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
exports.deleteCase = async (event, context) => {
  const response = {
    data: "",
    path: event.path,
    body: event.body,
    httpMethod: event.httpMethod,
    pathParameters: event.pathParameters,
    query: event.queryStringParameters,
  };

  const { id } = event.pathParameters;
  return makeResponse(response, StatusCodes.OK);
};
