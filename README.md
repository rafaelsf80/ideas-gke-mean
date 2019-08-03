# MEAN application over GKE

Deployment of an Angular application with an Express backend and a MongoDB database over Google Kubernetes Engine (GKE).

The application has 3 microservices:
- **Front-end microservice,** based on an Angular app which exposes the front-end at port 80
- **Back-end microservice**, based on Express which receives requests on port 3000, and connects to Mongo database
- **Database  microservice** with MongoDB and Portworx. TO BE DONE. For the time being, MongoDB is just deployed on a standalone VM.

The full application is temporaly working through this URL: http://34.76.41.170/

# Installation

After GKE cluster is created  on a GCP project, the following will deploy the **Express container** on Google Container Registry, and then on the cluster:

```bash
docker build -t gcr.io/<PROJECT_ID>/ideas-express:latest .
gcloud docker -- push gcr.io/<PROJECT_ID>/ideas-express:latest 
kubectl run ideas-express --image gcr.io/<PROJECT_ID>/ideas-angular:latest --port 3000
kubectl expose deployment ideas-express --type "LoadBalancer" 
kubectl get services
```

Same for **Angular container** (note port 80 instead of 4200)
```bash
docker build -t gcr.io/<PROJECT_ID>/ideas-angular:latest .
gcloud docker -- push gcr.io/<PROJECT_ID>/ideas-angular:latest 
kubectl run ideas-angular --image gcr.io/<PROJECT_ID>/ideas-angular:latest --port 80
kubectl expose deployment ideas-angular --type "LoadBalancer" 
kubectl get services
```

For MongoDB, the deployment as a microservice is as follows:
```bash
TO BE DONE
```

# Roadmap
- Implement user authentication and authorization, in order to allow users to create ideas and managers to approve them
- Implement RPC between microservices
- Implement Portworx with MongoDB
- Add Istio and tracing with OpenCensus libraries
