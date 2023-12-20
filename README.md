# API of Cycling Products

This is an API that delivers the information extracted from different websites selling cycling products (for now limited to this category). In this case I have implemented the Domain Driven Design (DDD) practice in order to facilitate the scalability and maintainability of the code.

## Endpoints

- `GET /products`
- `GET /products/:id`


## Project Configuration

### Requisitos Previos

- [Node.js](https://nodejs.org/) installed locally for development and testing.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/polaarts/cycling-api.git
    ```

2. Install the project dependencies:

   ```bash
   npm i
    ```

3. he following command will create a folder called `prisma` in the root of the project with a `schema.prisma` file containing the database configuration.

   ```bash
   npx prisma migrate dev --name init  
    ```

## Using the service

### Deploying the project

Once the dependencies are installed, to run locally you must execute the following command:

```bash
npm run dev
```

This will deploy the project to `localhost:3000`. As long as there is a `.env` file with the following environment variables: `DB_USER`, `DB_NAME`, `DB_PORT`, `DB_PASSWORD`, `DB_HOST`, `PORT`.


> Any considerations, opinions, comments or bugs in the documentation or code, please report them to Samuel Angulo via mail `hey@samuelangulo.com` or through an issue in this repository.