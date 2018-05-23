pipeline {
  agent any
  stages {
    stage('NPM Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'node build/build.js'
      }
    }
    stage('Done') {
      steps {
        echo 'Done...'
      }
    }
  }
}