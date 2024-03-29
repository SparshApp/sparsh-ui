# sparsh-ui

TODOs:

- Explore if secrets.json and secrets.json.template can be removed for the UI, if AWS credentials are being stored in the environment. Update ui to use AWS Secrets Manager or Docker secrets to get all secrets, and then update secrets.json and .env files to either be removed or ignored using .dockerignore

- Get the AWS Api Gateway credentials from somewhere? .env file? /api-gateway-creds endpoint? Look into where the API Gateway secrets should be retrieved from and stored

- Configure Nginx? Configure SSL with DigitalOcean? Configure AWS Cloudfront CDN?

- Configure AWS infrastructure using terraform infrastructure as code, and deploy using AWS credentials stored and retrieved in Jenkins pipelines

- Create .github folder with Issue templates and PR templates

- Configure .eslintignore and .prettierignore files, and configure .eslintrc.json, .prettierrc.json, and .vscode files to format on save

## TECH STACK

- React
- Node.js
- React Redux: state management
- React Native?
- Bootstrap? Tailwind? NativeBase?
- Material UI? Ant Design? Chakra UI? Lottie?
- Nginx
- Typescript
- AWS: Elastic Beanstalk, ECS, ALB, S3, Cloudfront CDN, API Gateway, IAM, Secrets Manager, DynamoDB
- Docker
- Jenkins
- Terraform
- Jest: unit testing
- Cypress or Detox?: end-to-end testing
- PM2: process manager / monitoring for Node.js
- Storybook: design testing
- React native debugger

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
