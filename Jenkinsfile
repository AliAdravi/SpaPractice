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
                bat "npm run test --browsers=ChromeHeadless --watch=false"
            }
        }

        stage('Deploy') {
            steps {
                bat "xcopy dist\\inventory D:\\Code\\Practice\\TEST\\dep"
            }
        }
    }
}