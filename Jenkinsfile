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

        stage('Deploy') {
            steps {
                xcopy dist\inventory D:\Code\Practice\TEST\dep
            }
        }
    }
}