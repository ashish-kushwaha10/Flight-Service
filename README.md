This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything. 


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

 - `services` -> contains the buiness logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.

### Setup the project

 - Download this template from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
- To run the server execute
 ```
 npm run dev
 ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

- add yor DB name and mySQL password in the config/config.json file

 - then if you want to creat mysql database then run below command
```
npx sequelize db:create
```

- `creating a model & migration` -> run below command to create the database model(schema) and migration(version) of DB.
```
npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer
```
- Remember above command will NOT create the table right now. this will creat only model with named as "airplane" and migration file. it is just like adding a git file but Not commiting.
- Whatever constraints we put in "model" folder, that will be JS level constraints only, not the DB constraints
- the contraints in the "migration" folder will be the actual DB constraints.

-`migration i.e. version of DB` -> this can create , alter and remove the data(tables) from DB.

-`creating table on databases i.e. commiting the migration` -> run below command to create a commit of a migration means this will actually create the table in mySQL DB.
```
npx sequelize db:migrate
```

-`to revert the DB change i.e. undo the last migration` -> run below command to delete the tables from the DB
```
npx sequelize db:migrate:undo
```