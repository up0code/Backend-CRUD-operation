# Backend CRUD Application

A Node.js + Express backend with MongoDB for CRUD operations on users.

## Features

- **Create**: Add new users with name and email
- **Read**: Get all users or a specific user by ID
- **Update**: Modify existing user details
- **Delete**: Remove users from the database

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- HTML/CSS/JavaScript for frontend interface

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up MongoDB (local or cloud)
4. Configure environment variables in `.env`
5. Start the server: `npm run dev`

## API Endpoints

- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Get a user by ID
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

## Usage

1. Start the server
2. Open `http://localhost:5000/` in your browser for the web interface
3. Or use tools like Postman to test the API endpoints

## Testing with Postman

Import the collection or manually test the endpoints with JSON payloads.

Example POST request:
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```