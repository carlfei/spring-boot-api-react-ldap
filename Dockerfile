
FROM node:latest as angular-build
WORKDIR /app

COPY api-react/front-server/package*.json ./
RUN npm install
COPY api-react/front-server ./
RUN npm run build


FROM openjdk:latest
WORKDIR /app


COPY --from=angular-build /app/dist/ ./src/main/resources/static/


COPY api-react/target/api-react-1.0.0.jar .


EXPOSE 8080


CMD ["java", "-jar", "api-react-1.0.0.jar"]
