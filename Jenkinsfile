pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'make build'
      }
    }
    stage('Test') {
      steps {
        sh 'make test'
      }
    }
    stage('Deploy') {
      environment {
        DOCKER_USER = credentials('docker-username')
        DOCKER_PASS = credentials('docker-password')
      }
      steps {
        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
        sh 'docker-compose up -d'
      }
    }
    stage('Deploy Dev') {
      environment {
        DOCKER_USER = credentials('docker-username')
        DOCKER_PASS = credentials('docker-password')
        APP_ENV = 'dev'
      }
      steps {
        sh 'make deploy-dev'
      }
    }
    stage('Deploy QA') {
      environment {
        APP_ENV = 'qa'
      }
      steps {
        sh 'make deploy-qa'
      }
    }
    stage('Deploy Prod') {
      environment {
        APP_ENV = 'prod'
      }
      steps {
        sh 'make deploy-prod'
      }
    }
    stage('Push Docker Images to ECR') {
      steps {
        withCredentials([[
          $class: 'AmazonWebServicesCredentialsBinding',
          accessKeyVariable: 'AWS_ACCESS_KEY_ID',
          credentialsId: 'aws-creds',
          secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
        ]]) {
          sh 'eval $(aws ecr get-login --no-include-email --region us-west-2)'
          sh 'docker tag sparsh-ui:latest <your-ecr-repository>/sparsh-ui:latest'
          sh 'docker push <your-ecr-repository>/sparsh-ui:latest'
        }
      }
    }
  }
}