# MEAN application over GKE

Deployment of an Angular application with an Express backend  and a MongoDB database over a cluster of GKE.

The application has 3 microservices:
- Front-end microservice, based on an Angular app which exposes the front-end at port 80
- Back-end microservice, based on Express which receives requests on port 3000, and connects to Mongo database
- Mongo microservice with Portworx. TO BE DONE. For the time being, MongoDB is just deployed on a standalone VM without high availability.

The application is temporaly accesible through this URL: http://35.205.46.173/

# Installation

After GKE cluster is created  on a GCP project, the following will deploy the Express container on Google Container Registry:

```bash
docker build -t gcr.io/third-pulsar-248314/ideas-express:latest .
gcloud docker -- push gcr.io/third-pulsar-248314/ideas-express:latest 
kubectl run ideas-express --image gcr.io/third-pulsar-248314/ideas-angular:latest --port 3000
kubectl expose deployment ideas-express --type "LoadBalancer" 
kubectl get services
```

Same for Angular container (note port 80 instead of 4200)
```bash
docker build -t gcr.io/third-pulsar-248314/ideas-angular:latest .
gcloud docker -- push gcr.io/third-pulsar-248314/ideas-angular:latest 
kubectl run ideas-angular --image gcr.io/third-pulsar-248314/ideas-angular:latest --port 80
kubectl expose deployment ideas-angular --type "LoadBalancer" 
kubectl get services
```

Future: MongoDB as microservice+
```bash
TBD
```

# Roadmap
- Implement user authentication and authorization, in order to allow users to create ideas and managers to approve them
- Implement RPC between microservices
- Implement Portworx with MongoDB
- Add Istio and tracing with OpenCensus libraries
