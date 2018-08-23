# sample_knex

## How to setup ##
  - Clone the repo
  - Setup a PostgresSQL in your local machine - [HowTo](https://www.postgresql.org/download/)
  - Create a DB name text_knex
## knex related task documentation ##
  - https://knexjs.org/#Migrations
  
## How to test ## 
  - To create table (migrations)
    ```
    knex migrate:latest
    ```
  - To seed data
    ```
    knex seed:run
    ```
  - To view data
    ```
    node pgtest list
    ```
  - To insert data
    ```
    node pgtest insert
    ```    
  - To clean data (drop table)
    ```
    node pgtest clean
    ```
    
    
