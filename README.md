# MEAN stack over GKE

Deployment of an Angular application with an express backend server and a MongoDB database over a cluster of GKE

The application has 3 microservices:
- Angular microservice, which exposes the front-end at port 4200
- Express microservice, which receives requests on port 3000, and connects to Mongo database
- TBD: Mongo microservice with Portworx. To be done. Today MongoDB is just deployed on a VM without high availability.
