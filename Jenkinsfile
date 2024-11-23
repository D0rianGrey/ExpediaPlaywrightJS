pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/D0rianGrey/ExpediaPlaywrightJS.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npx playwright show-report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/playwright-report/**', allowEmptyArchive: true
        }
    }
}
