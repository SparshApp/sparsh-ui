pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'docker build -t my-app .'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
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
  }
}