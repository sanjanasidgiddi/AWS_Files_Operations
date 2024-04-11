# FovusCodingChallengeSanjanaSidgiddi
Enter the following credentials at the terminal.
export AWS_ACCESS_KEY_ID=‘your-access-key’ 
export AWS_SECRET_ACCESS_KEY=‘your-secret-access-key’
export AWS_REGION=‘your-region’    
Then, bootstrap the AWS environment by running:
cdk bootstrap aws://your-iam-ID-number/your-region
Then,
npm run build
Finally,
npm start
to start the application in a web browser on localhost port 3000.
