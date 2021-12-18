pipeline {
	agent any
	tools { nodejs "nodejs" }

	stages {
		stage('Clone Git Repo'){
				steps{
					git 'https://github.com/dor-fried/test-automation'
		    }
		}
		stage('Install Dependencies'){
				steps{
					sh 'npm i'
					sh 'npm install cypress'
				}
		}
		stage('Run Tests'){
				steps{
					sh 'npm test'
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/mochareports', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}