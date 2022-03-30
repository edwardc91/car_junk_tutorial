# Tutorial and project template example
Just a tutorial to setup a restful api with a reactjs client for a managment of a car junker business

## Run project for development
Install docker and docker compose and then run docker compose to pull images and build containers using command:

`docker-compose up --build -d`

or

`docker compose up --build -d`

dependig of your installation of docker compose.

To run api execute command line: `docker container exec -it car_junker_api /bin/bash` then on the container terminal execute `dotnet run --urls="http://0.0.0.0/"` to run the api for develpment mode. Access to the swagger doc of the api using http://localhost:8000 on a browser of your local computer.

## Adding new migrations scripts and run migrations on the database
Use command on api container `dotnet ef migrations add <MigrationScriptDescription>` and then run `dotnet ef database update` to update changes on database
