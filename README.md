# Blog API

## Description

This is a simple API for managing blog-related functionalities. It utilizes technologies like Express, MongoDB via Mongoose, and includes user authentication using JWT (JSON Web Tokens).

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samsepiol-fs/blog-api.git
   cd blog-api
2. **Install dependencies:**
   ```bash
   npm install
3. **Set up environment variables:**
    - Create a .env file in the root directory.
    - Add the following variables:
   ```env
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret

## Usage

To run the API in development mode:
```bash
npm run dev
```
The API will be available at http://localhost:3000.

## Scripts
- `npm run dev`: Run the API in development mode with nodemon.
- `npm start`: Start the API in production mode.

## Dependencies

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Password hashing library.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Parse HTTP request cookies.
- [dotenv](https://www.npmjs.com/package/dotenv): Load environment variables from a .env file.
- [express](https://www.npmjs.com/package/express): Web application framework for Node.js.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Generate and verify JSON Web Tokens.
- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool.
- [nodemon](https://www.npmjs.com/package/nodemon): Monitor for changes and automatically restart the server.


## Contributing

Feel free to contribute by reporting issues, suggesting features, or submitting pull requests.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
