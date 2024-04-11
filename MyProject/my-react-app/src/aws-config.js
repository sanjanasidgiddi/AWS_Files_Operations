import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { S3, CognitoIdentityCredentials, config as awsConfig } from "aws-sdk";

// AWS Configuration.
const config = {
    region: "us-east-1",
    userPoolId: "us-east-1_4Q87Cvj7h",
    userPoolWebClientId: "143kcgpd7lnnmdh5m9d3ftilo9",
    identityPoolId: "us-east-1:db039849-14f0-48ab-ad4d-562e7917c659"
};

// Configure AWS.
awsConfig.region = config.region;
awsConfig.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: config.identityPoolId,
});

// Exporting AWS services and config.
export { S3, CognitoUserPool, AuthenticationDetails, CognitoUser, config };
