## ------- RESTful API Sample Project ------- ##

The RESTful API I've created uses Node.js, Express, and TypeScript to create a server on your computer. This server lets you save and access data through an endpoint. I've also included a testing process for the sample API, which tests the attributes of an entity within an endpoint of the created server.

### 🚀 Features ###

- TypeScript for better typing and improved maintainability
- Express for handling HTTP requests and routing
- Jest for testing API endpoints

### 📚 Prerequisites ###

Before running this program, ensure your system has Node.js (version 14 or higher) and npm (version 6 or higher) installed.

### 🛠 Installation ###

To install the project on your local machine, follow these steps:

1. Open either the Terminal or Command Prompt, depending on your OS.

2. Use the `cd` command to navigate to the directory where to download the repository.

3. Clone the repository by entering the following command:
     
     ```
     git clone https://github.com/Alkimik9000/api-start-express-ts
     ```
     
4. Use the `cd` command to navigate to the root directory of the cloned repository. Make sure the directory path ends with `/api-start-express-ts`.

5. Once you've navigated to the root directory of the repository in your Terminal or Command Prompt, install the necessary dependencies by running the command below:

    ```
    npm install --save-dev typescript ts-node
    ``` 
### 📦 Dependencies ###

By entering the command `npm install --save-dev typescript ts-node`, you will install two dev dependencies: typescript and ts-node, along with their respective dependencies.

Here are the necessary dependencies for the environment to function correctly:

     * express: ^4.18.2
     * axios: ^1.4.0
     * @types/express: ^4.17.17
     * @types/node: ^18.16.3
     * @babel/core: ^7.16.5
     * @babel/preset-env: ^7.21.5
     * @babel/preset-typescript: ^7.16.5
     * @types/jest: ^29.5.1
     * babel-jest: ^29.5.0
     * jest: ^29.5.0
     * ts-jest: ^29.1.0
     * typescript: ^5.0.4

### 🖥 Usage ###

1. To compile the TypeScript files, use the Terminal or Command Prompt and enter the following command:

     
     ```
     npx tsc
     ```


2. To start the server, execute the following command:

     ```
     npm start
     ```

The server will operate on `http://localhost:3000`. You can then access the entity and its properties by adding `/entity` to the end of the URL, like this: `http://localhost:3000/entity`.

### 🧪 Testing ###

In this example, the test will assess and confirm the entity's attributes accessed through the endpoint URL `http://localhost:3000/entity`, then deliver a conclusion based on the assessment.

**Note:** Since the server is already running in the current Terminal or Command Prompt instance, please open a new instance to execute the npm test command. Keeping the Terminal or Command Prompt with the running server open while running the tests is essential to ensure proper execution and avoid any server interruption.

To perform a test using Jest, enter the following command in your Terminal or Command Prompt:

     npm test
     
### 🔗 API Endpoints ###

There is an API endpoint available for interacting with the project data, which is:

`GET /api/data`: Retrieve all data items from the project's database.

### 📄 License ###

This project is governed by the ISC License.
