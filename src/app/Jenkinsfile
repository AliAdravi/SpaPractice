pipeline {
    agent any
    
    stages {
        stage('Start') {
            steps {
                echo 'Inventory Application Pipeline'
            }
        }
        
        stage('Install:') {
            steps {
                bat "npm install"
            }
        }
        
        stage('Build:') {
            steps {
                bat "npm run build --production"
            }
        }
        
        stage('Test') {
            steps {
                bat "npm run test"
            }
        }
    }
}