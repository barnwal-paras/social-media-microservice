# Social Media Microservice

## Objective
Objective: Design and implement a microservice for a hypothetical social media analytics platform. This service should expose APIs for creating, retrieving, and analyzing social media posts. You will be using Typescript and Node.js. The service should be designed with scalability and infrastructure considerations as the primary focus.

## Endpoints
1. Post Creation (POST /api/v1/posts/): Accept a JSON payload with text content and a unique identifier.

2. GET Analysis (GET /api/v1/posts/{id}/analysis/): Provide an analysis endpoint that returns the number of words and average word length in a post.

## SETUP
1. Run Cassandra in your machine on 9042 port.
2. Create Keyspace named "talkshop".
3. cd  "/path/to/project/directory"
4. Run npm install
4. Run "npx tsc" command.
5. Run "node build/index.js"
6. Use shared postman collection : https://github.com/barnwal-paras/social-media-microservice/blob/main/SocialMediaMicroservice.postman_collection.json

