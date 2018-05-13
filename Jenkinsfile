pipeline {
  agent any
  stages {
    stage('NPM Install') {
      steps {
        sh 'sh \'npm install\''
      }
    }
    stage('Build') {
      steps {
        sh 'sh \'node build/build.js\''
      }
    }
    stage('Test') {
      steps {
        sh 'sh \'echo Test\''
      }
    }
  }
}