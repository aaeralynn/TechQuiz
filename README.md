# Tech Quiz Test Suite
Description
Tech Quiz Test Suite is a full-stack quiz application built using the MERN stack. This application allows users to take a timed 10-question quiz to test their tech knowledge and view their score. The core app functionality was prebuilt, and this project focuses on enhancing it with Cypress for both component and end-to-end (E2E) testing.


## Features
Quiz Functionality
Users can take a tech quiz consisting of 10 random questions, with real-time score tracking and automatic quiz progression.

### Cypress Testing
This app includes robust Cypress tests:

Component Testing for individual components like the quiz UI.

End-to-End Testing for the entire quiz flow from start to score screen.

### User Interface
A clean, interactive UI built with React (TypeScript) provides an engaging experience for quiz-takers.

### MongoDB Integration
Questions and quiz data are stored in MongoDB and served via Express.js API endpoints.

### Deployment
The application connects to a MongoDB Atlas database for full-stack functionality.

## User Story
AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills

### Acceptance Criteria
Quiz Interaction
When users click the start button
The quiz begins and displays the first question.

When users answer a question
The next question is presented immediately.

When the final question is answered
Users are shown their final score.

After the quiz ends
Users have the option to start a new quiz.

### Installation
Clone the repository
bash
Copy
Edit
git clone <your-repository-url>  
cd TechQuiz/Develop
Install dependencies for both client and server
bash
Copy
Edit
cd server  
npm install  

cd ../client  
npm install  
Create a .env file in the server directory and add your environment variables
plaintext
Copy
Edit
MONGODB_URI=<your-mongodb-atlas-connection-string>  
JWT_SECRET=<your-secret-key>
Build and start the application
bash
Copy
Edit
npm run build  
npm run start
Usage
Launch the app and click "Start Quiz".

Answer all 10 questions.

View your final score and take the quiz again if desired.

Technologies Used
Frontend
React (TypeScript)

Cypress (Component + End-to-End Testing)

Backend
Node.js, Express.js

Database
MongoDB (hosted on MongoDB Atlas)

Authentication
JSON Web Tokens (JWT) (if user login is implemented)

Cypress Testing
Running Cypress Tests
To start Cypress:

bash
Copy
Edit
npm run test
Component Tests
Cypress tests for individual UI components (e.g., quiz logic, buttons).

End-to-End Tests
Cypress tests simulating the full quiz flow: start → answer → score → restart.

Link to Deployed Application
The app is connected to MongoDB Atlas, but deployment is not yet live.

Sources Utilized
Xpert Live Assistant

Cypress Documentation

Peer Collaboration

License
This project is licensed under the MIT License - see the LICENSE file for details.

