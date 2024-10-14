# Customer Project CRUD API

This is a simple CRUD API built using Node.js, Express, and Sequelize to manage customers and their associated projects. The API allows you to perform basic Create, Read, Update, and Delete operations on two entities: `Customer` and `Project`.

## Tech Stack

- Node.js
- Express.js
- Sequelize (ORM for MySQL)
- MySQL

## Project Structure

CustomerProjectApp/ ├── config/ │ └── config.js # Database configuration ├── controllers/ │ └── customerController.js # Customer CRUD logic │ └── projectController.js # Project CRUD logic ├── models/ │ └── customer.js # Customer model definition │ └── project.js # Project model definition ├── routes/ │ └── customerRoutes.js # Customer routes │ └── projectRoutes.js # Project routes ├── db.js # Database connection logic ├── index.js # Main entry point for the API server ├── package.json └── README.md

markdown
Copy code

## Prerequisites

- Node.js installed (version 12.x or higher)
- MySQL server running locally
- Postman or any API client to test the API

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/customer-project-api.git
   cd customer-project-api
Install dependencies:

bash
Copy code
npm install
Configure the database: In the config/config.js file, update the database credentials as per your local MySQL setup:

javascript
Copy code
module.exports = {
    development: {
        username: 'your_db_username',
        password: 'your_db_password',
        database: 'customerProject',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};
Create the MySQL database: Open your MySQL client and run:

sql
Copy code
CREATE DATABASE customerProject;
Run migrations to sync the database: Run the following script to create tables:

bash
Copy code
node db.js
Start the API server:

bash
Copy code
npm start
The server will start running on http://localhost:3000.

API Endpoints
The API provides CRUD operations for both Customer and Project entities.

Customers
Create a Customer:
POST /api/customers
Request Body:

json
Copy code
{
    "name": "John Doe",
    "email": "john@example.com",
    "address": "123 Main St"
}
Response: 201 Created

Get All Customers:
GET /api/customers
Response: 200 OK

Get a Customer by ID:
GET /api/customers/:id
Response: 200 OK

Update a Customer:
PUT /api/customers/:id
Request Body (any field can be updated):

json
Copy code
{
    "name": "Updated Name",
    "email": "newemail@example.com",
    "address": "456 Other St"
}
Response: 200 OK

Delete a Customer:
DELETE /api/customers/:id
Response: 204 No Content

Projects
Create a Project for a Customer:
POST /api/projects/:customerId
Request Body:

json
Copy code
{
    "name": "Project Alpha",
    "description": "Description of the project"
}
Response: 201 Created

Get All Projects:
GET /api/projects
Response: 200 OK

Get a Project by ID:
GET /api/projects/:id
Response: 200 OK

Update a Project:
PUT /api/projects/:id
Request Body (any field can be updated):

json
Copy code
{
    "name": "Updated Project Name",
    "description": "Updated description"
}
Response: 200 OK

Delete a Project:
DELETE /api/projects/:id
Response: 204 No Content

Testing the API
You can use Postman or any other API testing tool to interact with the API endpoints.

Create a Customer: Send a POST request to /api/customers.
Create a Project for a Customer: After creating a customer, send a POST request to /api/projects/:customerId.
Retrieve and update: Send GET, PUT, or DELETE requests to the respective endpoints to manage customers and projects.
Future Enhancements
Add validation for input fields.
Implement authentication for secured access.
Add unit tests for API controllers.
License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

### Key Points:
- Replace the placeholders (e.g., `your-username`, `your_db_username`) with actual values.
- You can add more sections such as testing and deployment instructions if required.
