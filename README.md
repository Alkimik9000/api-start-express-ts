## ------------- RESTful API Sample Project ------------- ##

This is a RESTful API built using Node.js, Express, and TypeScript to manage and process data for a sample application. The project demonstrates how to create, organize, and test a simple API that can be used as a starting point for more complex projects.

### 🚀 Features ###

- CRUD operations for managing data
- TypeScript for better typing and improved maintainability
- Express for handling HTTP requests and routing
- Jest for testing API endpoints

### 📚 Prerequisites ###

- Node.js (v14 or higher)
- npm (v6 or higher)

### 🛠 Installation ###

1. Clone this repository:

     git clone https://github.com/yourusername/rest.api.git

2. Navigate to the project folder:

     cd rest.api

3. Install the dependencies:

    npm install


### 🖥 Usage ###

1. Compile the TypeScript files with:

     npx tsc

2. Start the server with:

     npm start

The API will be running on `http://localhost:3000`.
The entity created and it's properties can be views under the URL 'http://localhost:3000/entity'

### 🧪 Testing ###

Run the tests using Jest:

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
