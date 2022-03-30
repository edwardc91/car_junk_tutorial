FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env

ARG http_proxy
ARG https_proxy

ENV HTTP_PROXY $http_proxy
ENV HTTPS_PROXY $https_proxy
ENV http_proxy $http_proxy
ENV https_proxy $https_proxy

RUN mkdir /project
WORKDIR /project

RUN apt update && \
    apt install -y apt-transport-https

RUN dotnet dev-certs https

RUN dotnet tool install --global dotnet-ef && \
    dotnet tool install --global dotnet-aspnet-codegenerator --version 5.0.2 && \
    dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design -v 5.0 && \
    dotnet add package Microsoft.EntityFrameworkCore.Design -v 5.0 && \
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer -v 5.0 && \
    dotnet add package Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore -v 5.0 && \
    dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL -v 5.0 && \
    dotnet add package EFCore.NamingConventions -v 5.0

RUN export PATH="$PATH:/root/.dotnet/tools"
