// To-Do task web application. 

This project consists of a frontend built using React, a backend developed with Node.js, and a MySQL database. The frontend serves the user interface, the backend handles business logic and API requests, and MySQL stores the application data.

Frontend Setup (React)

The frontend is built using React.js and serves as the client interface.

Prerequisites

Node.js (latest stable version)

npm 

Installation

Navigate to the frontend directory:

cd Front-End

Install dependencies:

npm install

Start the application:

npm start

The application will be accessible at http://localhost:3001

Backend Setup (Node.js)

The backend is built using Node.js with Express.js and provides APIs for frontend interaction.

Prerequisites

Node.js

npm 

Installation

Navigate to the backend directory:

cd Back-End

Install dependencies:

npm install

Start the backend server:

node server.js

The server will run on http://localhost:3001

Database Setup (MySQL)

This project uses MySQL as the database to store application data.

Prerequisites

MySQL installed locally

Connecting to MySQL

Start MySQL and create a database:

mysql -u root -p
DATABASE todo;
TABLE task;

Port Details

Frontend: http://localhost:3001

Backend: http://localhost:3001

Database: MySQL runs on port 4306 by default