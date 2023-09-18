# Notice Board App

A simple web application for managing and displaying notices. This project is built with React for the frontend and Express.js with MongoDB for the backend.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Add notices with a name and author.
- View the list of notices.
- Clear all notices.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB installed and running locally.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Naeemi7/Full-stack-virtual-noticeboard
   ```

2. Install frontend dependencies

   ```bash
   cd notice-board-app/client
   npm install
   ```

3. Install backend dependencies:

```bash
cd ../server
npm install
```

4. Create a .env file in the server directory and configure your MongoDB connection

```bash
DB_USER=your-db-username
DB_PASS=your-db-password
DB_HOST=your-db-host
DB_NAME=your-db-name
```

5. Start the frontend and backend servers

```bash
# In the client directory
npm start

# In the server directory
npm start
```

## Usage

- Access the web application at http://localhost:3000 in your browser.
- Use the "Add Notice" button to add new notices. Provide a notice name and author.
- Use the "Clear All Notices" button to remove all notices.

## API Endpoints

- GET /notices/all: Get all notices.
- POST /notices/new: Create a new notice.
- DELETE /notices/clear: Clear all notices.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

You can customize this `README.md` file with more details about your project and any additional instructions or information you want to include. Make sure to replace placeholders like `your-username` and provide accurate setup instructions based on your project's structure.
