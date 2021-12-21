pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('e2e Tests') {
            steps {
                sh './node_modules/.bin/cypress run --browser chrome'
            }
        }
        stage('Deploy') {
            steps {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '/Users/dorfried/Desktop/Projects/cypress/cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])        }
    }
}