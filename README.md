## ------- RESTful API Sample Project ------- ##

This is a RESTful API built using Node.js, Express, and TypeScript to manage and process data for a sample application. The project demonstrates how to test a simple API that can be used as a starting point for more complex projects.

### 🚀 Features ###

- TypeScript for better typing and improved maintainability
- Express for handling HTTP requests and routing
- Jest for testing API endpoints


### 🛠 Installation ###

1. Clone this repository:
     
     ```
     git clone https://github.com/Alkimik9000/api-start-express-ts
     ```
     
2. Navigate to the root directory of the cloned repository using the `cd` command

3. Using the terminal, install the dependencies:

    ```
    npm install --save-dev typescript ts-node
    ```
    
### 📦 Dependencies ###

The `npm install --save-dev typescript ts-node` is used to install two development dependencies: typescript and ts-node. installing these packages will also install their own dependencies as part of the installation process. These are the dependencies that are required for the enviroment to function properly:

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

In this example, the test will examine and validate the properties of an entity and provide a result based on the evaluation.

To run the test using Jest run in the terminal the command :

     
     npm test
     

### 🔗 API Endpoints ###

The following API endpoints are available:

- `GET /api/data`: Retrieve all data items


### 📄 License ###

This project is licensed under the ISC License. 



