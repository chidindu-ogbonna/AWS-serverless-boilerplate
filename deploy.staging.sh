API_ID=evsc9drhbc
STAGE_NAME=staging

aws apigateway create-deployment --rest-api-id $API_ID --stage-name $STAGE_NAME