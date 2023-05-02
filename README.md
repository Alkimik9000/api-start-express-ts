## ------------- RESTful API Sample Project ------------- ##

This is a RESTful API built using Node.js, Express, and TypeScript to manage and process data for a sample application. The project demonstrates how to create, organize, and test a simple API that can be used as a starting point for more complex projects.

### 🚀 Features ###

- CRUD operations for managing data
- TypeScript for better typing and improved maintainability
- Express for handling HTTP requests and routing
- Jest for testing API endpoints


### 🛠 Installation ###

1. Clone this repository:

     git clone https://github.com/Alkimik9000/api-start-express-ts

2. Navigate to the root directory of the cloned repository using the `cd` command

3. Using the terminal, install the dependencies:

    ```
    npm install
    ```
    
### 📦 Dependencies ###

     The command mentioned will install the following dependencies
     express: ^4.18.2
     axios: ^1.4.0
     @types/express: ^4.17.17
     @types/node: ^18.16.3
     @babel/core: ^7.16.5
     @babel/preset-env: ^7.21.5
     @babel/preset-typescript: ^7.16.5
     @types/jest: ^29.5.1
     babel-jest: ^29.5.0
     jest: ^29.5.0
     ts-jest: ^29.1.0
     typescript: ^5.0.4

### 📚 Prerequisites ###

- Node.js (v14 or higher)
- npm (v6 or higher)

### 🖥 Usage ###

1. Using the terminal, compile the TypeScript files with:

     
     ```
     npx tsc
     ```


2. Using the terminal, start the server with:

     ```
     npm start
     ```

The API will be running on `http://localhost:3000`.
The entity created and it's properties can be views under the URL `http://localhost:3000/entity`.

### 🧪 Testing ###

Run in the terminal the test using Jest:

     
     npm test
     

### 🔗 API Endpoints ###

The following API endpoints are available:

- `GET /api/data`: Retrieve all data items
- `GET /api/data/:id`: Retrieve a single data item by ID
- `POST /api/data`: Create a new data item
- `PUT /api/data/:id`: Update an existing data item by ID
- `DELETE /api/data/:id`: Delete a data item by ID

### 📄 License ###

This project is licensed under the ISC License. 
