# Tutorial and project template example
Just a tutorial to setup a restful api with a reactjs client for a managment of a car junker business

## Run project for development
Install docker and docker compose and then run docker compose to pull images and build containers using command:

`docker-compose up --build -d`

or

`docker compose up --build -d`

dependig of your installation of docker compose.

To run api execute command line: `docker container exec -it car_junker_api /bin/bash` then on the container terminal execute `dotnet run --urls="http://0.0.0.0/"` to run the api for develpment mode. Access to the swagger doc of the api using http://localhost:8000 on a browser of your local computer.

## Adding dependencies to asp.net for scaffold and database connection
Run the next commands to add scaffold tools and databse connection plugins
* `dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design -v 5.0`
* `dotnet add package Microsoft.EntityFrameworkCore.Design -v 5.0`
* `dotnet add package Microsoft.EntityFrameworkCore.SqlServer -v 5.0`
* `dotnet add package Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore -v 5.0`
* `dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL -v 5.0`
* `dotnet add package EFCore.NamingConventions -v 5.0`

## Adding new migrations scripts and run migrations on the database
Use command on api container `dotnet ef migrations add <MigrationScriptDescription>` and then run `dotnet ef database update` to update changes on database

## Adding new controllers using asp.net scaffold

Use aspnet-codegenerator tool to add new controller to the api

```
dotnet aspnet-codegenerator controller \
    -name <ControllerName> \
    -m <ModelName> \
    -dc <ApiAppContextName> \
    -async \
    -api \
    -outDir <ControllersDirName>
```
