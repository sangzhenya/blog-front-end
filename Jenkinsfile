pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Start process'
      }
    }

    stage('Remove old file') {
      steps {
        dir(path: '/var/www/html/blog') {
          sh 'tree'
        }

      }
    }

    stage('End') {
      steps {
        echo 'End process'
      }
    }

  }
}