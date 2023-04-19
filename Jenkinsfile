pipeline {
    agent any
    environment{
        BUCKET = "aws-web-guatemala-2"
    }

    stages {
        stage('init') {
            agent {
                docker {
                    image 'node:erbium-alpine'
                    args '-u root:root'
                }
            }
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            agent {
                docker {
                    image 'roxsross12/node-chrome'
                    args '-u root:root'
                }
            }
            steps {
                sh 'npm run test'
            }
        }
        stage('build') {
            agent {
                docker {
                    image 'node:erbium-alpine'
                    args '-u root:root'
                }
            }
            steps {
                sh 'npm run build'
                stash includes: 'dist/**/**', name: 'dist'
            }
        }
        stage('deploy') {
            steps {
                withAWS(credentials: 'aws-roxsross', region: 'us-east-1') {
                    unstash 'dist'
                    sh 'aws s3 sync dist/. s3://$BUCKET --exclude ".git/*"'
                    sh 'aws s3 ls s3://$BUCKET '
                }
            }
        }
    }
}