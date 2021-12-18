import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good',
    'FAILURE': 'danger'
]

def getBuildUser(){
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}


pipeline{
   agent any

   environment{
       BUILD_USER = ''
   }

   parameters{
       string(name: "SPEC", defaultValue: "cypress/integration/**/**", description:"Ej: cypress/integration/end-to-end-tests/*.spec.js")
       choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Select a browser to run your scripts.")
   }

   options{
       ansiColor('xterm')
   }

   stages{
       stage('Build'){
           steps{
               echo "Buiding application"
           }
       }
       stage('Testing'){
           steps{
               sh "npm install"
               sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
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

           script{
               BUILD_USER = getBuildUser()
           }

           slackSend channel: 'jenkins-example',
                     color: COLOR_MAP[currentBuild.currentResult],
                     message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER} \n Tests executed ${SPEC} at ${BROWSER} \n More info at ${env.BUILD_URL}HTML_20Report/"

           publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
       }
   }
}