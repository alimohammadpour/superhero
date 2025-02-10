# Superhero

Builing a Humble Superhero API.

## Dependencies

Ensure the following are installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## Getting Started

To set up the project locally, follow these steps:

### 1. Clone the Repository

```
git clone https://github.com/alimohammadpour/superhero.git
cd superhero
```

### 2. Environment Variables
Copy the example environment files for both the main application and the MongoDB service:

```
cp .env.example .env
```

### 3. Start Nest and React applications
```
docker-compose up -d
```
Navigate to [localhost:3000](localhost:3000) to preview the application, or send a request to the provided endpoints.

### 4. Testing
```
docker-compose exec node yarn test
docker-compose exec node yarn test:e2e
docker-compose exec web yarn test
```

### 5. Collaboration
To collaborate with the team to improve this task, there might be some considerations. First of all, I will review this basic project and discuss the possible features to develop. 

The Nest application would be improved by integrating with a database (either SQL or NoSQL), as it now uses an in-memory database (an array) based on the provided descriptions. Tests also can be improved by adding new cases to cover both of our endpoints. 

For the React application, as it is designed to be simple, having a new design based on the requirements would be beneficial. I used react-redux and saga in my application, and some test cases are written to ensure functionalities, but it may need some improvements. 

Finally, regarding the git repository and project structure, for the purpose of this project and simplicity, I used a single repository and added the resources directory for my React application, which is better to separate the repositories for our applications. This approach makes managing repositories and developing projects more robust. I also used Docker for development purposes, and suitable configurations are required for the production stage.

### 6. If I had more time
I would like to handle some of the improving features mentioned in the Collaboration section, starting to add a database connection, covering the codebase with more comprehensive test cases, and a new UI.