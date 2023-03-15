// import AWS from 'aws-sdk';
import axios from 'axios';
// import User from './types';

// const API_GATEWAY_URL = process.env.API_GATEWAY_URL;
// const API_VERSION = process.env.API_VERSION;

// const API_GATEWAY_URL = 'https://my-api-gateway-url.com';
// const API_VERSION = '2018-11-29';
const BASE_URL = 'http://localhost:5001';

const api = axios.create({
    baseURL: BASE_URL
});

export const getUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};

export const postUser = async (data: any) => {
    const response = await api.post('/users', data);
    return response.data;
};


// TODO: Configure API Gateway
// async function getApiGatewayCredentials(): Promise<AWS.Credentials> {
//     const response = await axios.get(`/api-gateway-credentials`);
//     const { accessKeyId, secretAccessKey, sessionToken } = response.data;
//     const credentials = new AWS.Credentials({
//         accessKeyId,
//         secretAccessKey,
//         sessionToken
//     });
//     return credentials;
// }

// export async function callApi(): Promise<any> {
//     const credentials = await getApiGatewayCredentials();
//     const apigateway = new AWS.ApiGatewayManagementApi({
//         apiVersion: API_VERSION,
//         endpoint: API_GATEWAY_URL,
//         credentials
//     });
//     const message = 'Hello, API Gateway!';
//     const params = {
//         ConnectionId: 'my-connection-id',
//         Data: message
//     };
//     await apigateway.postToConnection(params).promise();
// }