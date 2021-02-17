API_ID=evsc9drhbc # Replace with your REST API ID
STAGE_NAME=prod

aws apigateway create-deployment --rest-api-id $API_ID --stage-name $STAGE_NAME
