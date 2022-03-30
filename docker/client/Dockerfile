# pull official base image
FROM node:alpine as build

ARG http_proxy
ARG https_proxy

ENV HTTP_PROXY $http_proxy
ENV HTTPS_PROXY $https_proxy
ENV http_proxy $http_proxy
ENV https_proxy $https_proxy

# env variable to fix a issue of node 17 with ssl connections
ENV NODE_OPTIONS --openssl-legacy-provider

RUN mkdir /project
WORKDIR /project

RUN apk --no-cache add nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

# RUN yarn config set proxy $http_proxy && \
#     yarn config set https-proxy $https_proxy && \ 