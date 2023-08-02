pipeline {
    agent any

    environment {
        SONAR_LOGIN = credentials('sonarcloud-token')
    }

    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio desde GitHub
                checkout scm
            }
        }

        stage('Build') {
            steps {

                sh 'mvn clean package'
            }
        }

        stage('SonarCloud Analysis') {
            steps {
                // analisis SonarCloud
                withSonarQubeEnv('SonarCloud') {
                    sh 'mvn sonar:sonar -Dsonar.login=$SONAR_LOGIN'
                }
            }
        }

        stage('Test') {
            steps {

            }
        }

        stage('Deploy') {
            steps {

            }
        }
    }

    post {
        success {

            // script {
            //     def github = githubNotifier(
            //         color: 'GREEN',
            //         message: "Construcción exitosa en Jenkins",
            //         result: 'SUCCESS'
            //     )
            //     github.perform()
            // }
        }
        failure {

        }
    }
}
