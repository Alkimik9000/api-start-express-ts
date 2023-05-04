## ------- RESTful API Sample Project ------- ##

The RESTful API I have developed utilizes Node.js, Express, and TypeScript to create a local server with data available through an endpoint. The project showcases the testing process for the sample API.

### 🚀 Features ###

- TypeScript for better typing and improved maintainability
- Express for handling HTTP requests and routing
- Jest for testing API endpoints

### 🛠 Installation ###

To install the project on your local machine, follow these steps:

1. Open a terminal or command prompt.

2. Navigate to the directory where the project will be installed using the `cd` command in your terminal.

3. To clone the repository, enter the following command in your terminal or command prompt.
     
     ```
     git clone https://github.com/Alkimik9000/api-start-express-ts
     ```
     
4. Use the `cd` command to navigate to the root directory of the cloned repository. Make sure the directory path ends with `/api-start-express-ts`.

5. Once you've navigated to the root directory of the repository in your terminal or command prompt, install the necessary dependencies by running the command below:

    ```
    npm install --save-dev typescript ts-node
    ```
    
### 📦 Dependencies ###

By entering the command `npm install --save-dev typescript ts-node`, you will install two dev dependencies: typescript and ts-node, along with their respective dependencies.

Here are the necessary dependencies for the environment to function correctly:

     + express: ^4.18.2
     + axios: ^1.4.0
     + @types/express: ^4.17.17
     + @types/node: ^18.16.3
     + @babel/core: ^7.16.5
     + @babel/preset-env: ^7.21.5
     + @babel/preset-typescript: ^7.16.5
     + @types/jest: ^29.5.1
     + babel-jest: ^29.5.0
     + jest: ^29.5.0
     + ts-jest: ^29.1.0
     + typescript: ^5.0.4

### 📚 Prerequisites ###

- Node.js (v14 or higher)
- npm (v6 or higher)

### 🖥 Usage ###

1. To compile the TypeScript files, use the terminal and enter the following command:

     
     ```
     npx tsc
     ```


2. To start the server, execute the following command:

     ```
     npm start
     ```

The API will operate on `http://localhost:3000`. You can then access the entity and its properties by adding `/entity` to the end of the URL, like this: `http://localhost:3000/entity`.

### 🧪 Testing ###

In this example, the test will assess and confirm the qualities of an object and then deliver a conclusion based on the assessment.

To perform a test using Jest, enter the following command in your terminal:

     npm test

### 🔗 API Endpoints ###

The following API endpoints are currently available:

- `GET /api/data`: Retrieve all data items


### 📄 License ###

This project is governed by the ISC License.



