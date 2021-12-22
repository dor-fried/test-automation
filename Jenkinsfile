pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    parameters{
       string(name: "SPEC", defaultValue: "cypress/integration/**/**", description:"Ej: cypress/integration/end-to-end-tests/*.spec.js")
       choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Select a browser to run your scripts.")
   }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('e2e Tests') {
            steps {
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                //sh './node_modules/.bin/cypress run --browser chrome'
            }
        }
stage('Deploy'){
           steps{
               echo "Deploying the application"
           }
       }
   }

   post{
       always{
           publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: '/Users/dorfried/Desktop/Projects/cypress/cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
       }
   }
}