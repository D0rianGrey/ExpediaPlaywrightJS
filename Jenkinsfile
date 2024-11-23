pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Клонируем проект из Git
                git branch: 'main', url: 'https://github.com/D0rianGrey/ExpediaPlaywrightJS.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Устанавливаем зависимости
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Запускаем тесты
                sh 'npx playwright test'
            }
        }

        stage('Generate Report') {
            steps {
                // Генерация и просмотр отчета
                sh 'npx playwright show-report'
            }
        }
    }

    post {
        always {
            // Архивация отчетов
            archiveArtifacts artifacts: '**/playwright-report/**', allowEmptyArchive: true
        }
    }
}
