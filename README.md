# Demo
Demo  Using Node JS, Express JS, MySQL and Sequelize 

Clone the repo and install the dependencies via NPM:

	npm install

Install Sequelize-cli globally, so you can run Sequelize command line operations from the root of the project.

This will also allow us to have our models, migrations and seeders stored in the root folder
 instead of inside node_modules

	npm install -g sequelize-cli

By default, the application looks for a MySQL database on localhost called 'demo'.
This can be changed in the Config/config.json file, by editing the credentials.
The default values ​​'root' and 'null' are provided as placeholders for logins, you will need to update them to your localhost database credentials.

### Environments
When connecting to the database, Sequelize will use the 'development' environment by default,
unless it detects an environment variable that indicates otherwise.
This is defined in Models/index.js, where the connection to the database is made:

	var env = process.env.NODE_ENV || 'development';

to allows us to easily switch between connecting to a test database running on localhost and a production database.

### Migrating the database

Migrations are included to configure/build the necessary database tables for the models.

Run migrations with sequelize-cli. From the root of the project, run:

	sequelize db:migrate

Sequelize will then create the tables in the database.



### Feeding sample data

There are seeder files in db/seeders to insert sample data into the database.
To run the initialization process and populate the database tables, run the following from the root of the project:

	sequelize db:seed:all

*** You can then run index.js on node or use nodemon to run the app locally ***


## The .sequelizerc file
This is a file in the root of the project that allows us to define where our ORM models, migration files,
 seeders and configuration file in the application. By default, Sequelize-cli will output them to node_modules/.bin/.

*Note: If you are starting a new project from scratch, you can create this file in the root of the project before running sequelize init.
This way Sequelize-cli will generate these folders for you when you start the project *

## Run the Demo

	node index.js nodemon

## Configure port 3000
	
Editing the index.js file and changing the port 3000 to something else

	app.listen(process.env.PORT || 3000, function () {
      console.log('Express app listening on port 3000');
    })


## Migrations

Migration files are generated using the sequelize-cli, to allow us to edit the database, add tables, columns, etc. whenever we create a new model or edit an existing one. This is a form of version control for our database.

When we generate a new model file, Sequelize-cli will automatically create the migration file for us. We can also manually generate a migration file, for example those to add columns for our foreign keys.

More info here: [Migrations] ( http://docs.sequelizejs.com/manual/tutorial/migrations.html )

## Seeders
The seed files in db/seeders provide a number of javascript objects, with predefined information to insert into each database table as sample data rows.

Running the seeders via the command line will insert the data into the tables. This must be done after the database has been successfully migrated.

Learn more here: [Creating and Running Seeders] ( http://docs.sequelizejs.com/manual/tutorial/migrations.html#creating-first-seed )

