# Creating a Node Express application from scratch with the following modules:

Users
Category
Product
Sales
Product Sale

# Requirements:

Implement data validation using 'joi' and apply it where applicable.
Use password hashing and JWT tokens for authentication.
Ensure that users can only perform operations such as creating categories and products if they are authenticated.
Implement one-to-many (1-m) and many-to-many (m-m) relationships among the models where applicable.
Create and manage Postman API collections for testing and documentation.


# Steps

1. npm init ===> package.json===> configure it
2. /src/app.js ===> import express and make its instance const app = express();
3. app.use(express.json());
4. app.listen (port, ()=>{
try{

}catch{

}
})

5. make folder structure like db, model, controller, router, middleware, validation
6. Dependencies installtion for db like drivers for db (pg, pg_hstore) and sequelize
7. .dotenv dependancy for environment variables
8. .dotenv config for database varibale after creating db
9. create config.js file in db folder for db configuration and connection, study sequelize documentation.
10. export dbConnect and sequelize fron config.js and import dbconnect in app.js
11. install nodemon for auto restarting of node app on any change in files
12. create UserModel and use bcrypt for password hashing and comparing
13. implement jwt for middleware
14. implement joi validation
