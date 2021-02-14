/**
 * A Lambda function that returns a static string
 */
exports.helloFromLambdaHandler = async () => {
  // If you change this message, you will need to change hello-from-lambda.test.js
  const message = "Hello from Lambda!";

  // All log statements are written to CloudWatch
  console.info(`${message}`);

  //   return message;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message,
      // location: ret.data.trim()
    }),
  };

  return response;
};
