import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { config } from "./aws-config";

const userPool = new CognitoUserPool({
    UserPoolId: config.userPoolId,
    ClientId: config.userPoolWebClientId,
});

const signIn = async (username, password) => {
    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authDetails = new AuthenticationDetails({ Username: username, Password: password });

    return new Promise((resolve, reject) => {
        user.authenticateUser(authDetails, {
            onSuccess: (session) => {
                console.log('Authentication successful', session);
                resolve(session);
            },
            onFailure: (err) => {
                console.error('Authentication failed', err);
                reject(err);
            },
        });
    });
};

export { signIn };
