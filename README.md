# Node Fast Server 🚀

![Node Fast Server](https://img.shields.io/badge/Node%20Fast%20Server-v1.0.0-brightgreen.svg)
![GitHub Release](https://img.shields.io/github/release/Sangolenkosi/node-fast-server.svg)

Welcome to the **Node Fast Server** repository! This project provides a pre-configured Node.js template powered by Express. It includes essential tools like CORS, dotenv, and modular routing, all set up and ready to go with a single command. You can skip the repetitive setup and start building your backend in seconds.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [Routing](#routing)
- [Middleware](#middleware)
- [Database Integration](#database-integration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Release Information](#release-information)

## Features

- **Fast Setup**: Get started with a pre-configured environment.
- **Modular Routing**: Organize your routes efficiently.
- **Environment Variables**: Manage configuration easily with dotenv.
- **CORS Support**: Handle cross-origin requests seamlessly.
- **MVC Architecture**: Follow best practices with the Model-View-Controller pattern.
- **MongoDB Integration**: Use Mongoose for database operations.

## Installation

To install the Node Fast Server, clone the repository and run the setup command. Follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Sangolenkosi/node-fast-server.git
   ```

2. Navigate to the project directory:
   ```bash
   cd node-fast-server
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the setup command:
   ```bash
   npm run setup
   ```

## Usage

Once you have installed the server, you can start it by running:

```bash
npm start
```

Your server will run on `http://localhost:3000`. You can access it through your browser or use tools like Postman to test the API endpoints.

## Folder Structure

Here’s a brief overview of the folder structure:

```
node-fast-server/
│
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── config/
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

- **controllers/**: Contains the logic for handling requests.
- **middlewares/**: Holds middleware functions for request processing.
- **models/**: Defines the data models using Mongoose.
- **routes/**: Contains route definitions.
- **config/**: Manages configuration settings.

## Configuration

You can manage your environment variables using the `.env` file. Here’s an example of what it might look like:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mydatabase
```

Make sure to adjust the `MONGODB_URI` to match your database connection.

## Routing

The server uses Express for routing. You can define your routes in the `src/routes` directory. Here’s an example of a simple route:

```javascript
const express = require('express');
const router = express.Router();
const { getItems } = require('../controllers/itemController');

router.get('/items', getItems);

module.exports = router;
```

## Middleware

Middleware functions are essential for handling requests. You can create custom middleware in the `src/middlewares` directory. Here’s an example of a simple logging middleware:

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logger;
```

## Database Integration

This template integrates with MongoDB using Mongoose. To define a model, create a new file in the `src/models` directory. Here’s an example:

```javascript
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
```

## Testing

You can write tests for your application using a testing framework like Jest or Mocha. Create a `tests` directory to organize your test files. Here’s an example of a simple test:

```javascript
const request = require('supertest');
const app = require('../src/app');

describe('GET /items', () => {
  it('should return a list of items', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('items');
  });
});
```

## Contributing

We welcome contributions to the Node Fast Server. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request.

Please ensure your code follows the existing style and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Release Information

You can find the latest releases for Node Fast Server [here](https://github.com/Sangolenkosi/node-fast-server/releases). Download the necessary files and execute them to get started.

For more information about the latest features and updates, check the [Releases](https://github.com/Sangolenkosi/node-fast-server/releases) section.

Thank you for using Node Fast Server! Happy coding!