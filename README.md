                                                                                          MERN To-Do Application
This project is a simple To-Do application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to add, view, and delete to-do items, with a responsive user interface for a better user experience across different devices.

Features:
Add To-Do: Users can enter a to-do item using an input field and submit it using an "Add" button.
View To-Do: The application displays all the to-do items stored in the database.
Delete To-Do: Users can delete individual to-do items using a "Delete" button.

Responsive Design: The application adjusts its layout to fit different screen sizes for both desktop and mobile devices.

Technologies Used:-
Frontend:
React.js: For building the user interface.
Axios: For making HTTP requests to the backend.
CSS: For styling the application and implementing responsive design.

Backend:
Node.js & Express.js: For building the server and handling API requests.
MongoDB: For storing the to-do items.
Mongoose: For interacting with MongoDB.

Prerequisites
To run this application locally, make sure you have the following installed:

Node.js: To run the backend server and install dependencies.
MongoDB: For storing to-do items (you can use either a local MongoDB instance or MongoDB Atlas for a cloud database).
NPM or Yarn: For managing dependencies.

Getting Started
Backend Setup:
Navigate to the backend folder.
Install the required dependencies.
Create a .env file to store your MongoDB connection string and port configuration.
Start the backend server.

Frontend Setup:
Navigate to the frontend folder.
Install the required dependencies.
Start the frontend development server.
Project Structure
Backend: Contains the Node.js and Express.js server, API routes, and MongoDB/Mongoose models.
Frontend: Contains the React.js code, including components, styles, and HTTP request handling.
API Endpoints
The backend provides the following REST API endpoints:

GET /todos: Fetch all to-do items.
POST /todos: Add a new to-do item.
DELETE /todos/
: Delete a specific to-do item by ID.

Running the Project
Clone the repository and navigate into the project directory.
Start the backend server by following the backend setup instructions.
Start the frontend development server by following the frontend setup instructions.
The application should now be running locally, with the backend server on port 5000 and the frontend on port 3000.

Deployment
To deploy this application:

Deploy the backend to a service like Heroku, DigitalOcean, or AWS, and configure MongoDB (e.g., MongoDB Comapss).

Running the Full Application:-
For Frontend Running:- npm start
For Backend Running:- node server.js
Once both the backend and frontend servers are running:

Visit http://localhost:3000 in your browser to use the application.
The frontend will communicate with the backend to add, view, and delete to-do items.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Vetukuri Rohith Varma - https://github.com/rohi-varma30/MERN_STACK_PROJECT
Acknowledgments
MERN Stack documentation and community for guidance and resources.
