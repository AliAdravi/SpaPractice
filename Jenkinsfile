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
                bat "rmdir D:\\Code\\Practice\\Deployment\\ /S /Q"
                bat "mkdir D:\\code\\practice\\deployment\\"
                bat "xcopy dist\\inventory D:\\Code\\Practice\\Deployment"
            }
        }
    }
}