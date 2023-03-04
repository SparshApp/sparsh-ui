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
  }
}