# Nest FInder API Service

- start the project sudo docker-compose up --build
- Access the server: http://127.0.0.1:8800/
- Access the phpmyadmin GUI: http://localhost:8080
- Access the redis commander GUI: http://127.0.0.1:5992/
- Access to swagger documentation GUI: http://127.0.0.1:8800/api-docs/
- Test all unit and end to end: docker exec -it nest_finder_api_service yarn test:all

## What's next?

- logging alongsides error handling
- file structure and implementation pattern (I am thinking along sides of modular pattern)
- github action to run nodejs lints and tests
- Then start thinking devops straight away
- set up of unit, integration and end to end testing
- websockets integration
