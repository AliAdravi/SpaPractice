pipeline {
    agent any
    
    stages {
        stage('Install:') {
            steps { bat "npm install" }
        }
        
        stage('Build:') {
            steps { bat "npm run build --production" }
        }
        
        stage('Test') {
            steps {
                bat "npm run test:ci"
            }
        }

        stage('Deploy') {
            steps {
                bat "rmdir /S /Q "D:\\Code\\Practice\\Deployment\\"
                bat "xcopy dist\\inventory D:\\Code\\Practice\\Deployment"
            }
        }
    }
}