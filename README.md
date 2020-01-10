# Microservices app with Istio GKE add-on

Deployment of an Angular application with an Express backend over Google Kubernetes Engine (GKE).
An external MongoDB database is also used.

The application has 2 microservices and an external MongoDB database:
- **Front-end microservice,** based on an Angular app which exposes the front-end at port 80
- **Back-end microservice**, based on Express which receives requests on port 3000, and connects to Mongo database
- **Database** with MongoDB, deployed in a container.

The full application is temporaly working through this URL: http://donevalcorp.com

# GKE cluster installation

1) Run the following command to create a GKE cluster with both Istio add-on and Stackdriver Monitoring enabled. The cluster is created in a single zone, with 4 nodes, that can scale up to 8 nodes. The nodes are in the default vpc network.

```
gcloud beta container clusters create ideas-microservices-demo \
    --zone europe-west1-b --num-nodes 3 \
    --machine-type "n1-standard-2" --image-type "COS" \
    --cluster-version=1.13 \
    --enable-stackdriver-kubernetes \
    --scopes "gke-default","compute-rw" \
    --enable-autoscaling --min-nodes 4 --max-nodes 8
```

After the cluster creation (it takes some minutes), let's configure kubectl properly
and grant permissions to the current user (this last step is required to access telemetry data and other Istio features):

```
export GCLOUD_PROJECT=$(gcloud config get-value project)
gcloud container clusters get-credentials ideas-microservices-demo \
            --zone europe-west1-b --project $GCLOUD_PROJECT
kubectl create clusterrolebinding cluster-admin-binding \
    --clusterrole=cluster-admin \
    --user=$(gcloud config get-value core/account)
```

To verify the installation, let's check corresponding Kubernetes pods and services are deployed using the following command:
istio-pilot-, istio-galley-, istio-policy-, istio-telemetry-, istio-ingressgateway-, istio-sidecar-injector-, and istio-citadel-.
```
kubectl get service -n istio-system
kubectl get pods -n istio-system
```

# Installation of istioctl tool

Similar to kubectl for Kubernetes, this is the tool used to manage Istio, including network routing and security policies.
To avoid errors, make sure you download the same Istioversion used in tour GKE cluster:
```
$ curl -L https://git.io/getLatestIstio | ISTIO_VERSION=1.11 sh -
$ istioctl version
```

<!--
# Cloning this directory and deploying the app into GKE

If you have not done it, let's build and push both dockers into Container Registry:

```bash
docker build -t gcr.io/third-pulsar-248314/ideas-angular:v8 -t gcr.io/third-pulsar-248314/ideas-angular:v8 .
gcloud docker -- push gcr.io/third-pulsar-248314/ideas-angular:v8

docker build -t gcr.io/third-pulsar-248314/ideas-express:v6 -t gcr.io/third-pulsar-248314/ideas-express:latest .
gcloud docker -- push gcr.io/third-pulsar-248314/ideas-express:v6 

docker build  -t gcr.io/third-pulsar-248314/ideas-mongodb:v3 -t gcr.io/third-pulsar-248314/ideas-mongodb:latest .
gcloud docker -- push gcr.io/third-pulsar-248314/ideas-mongodb:v3
```

To execute the application, let's take a look at the main yaml file `ideas.yaml`.
The file to be deployed is not that one, but the one generated by `istioctl kube-inject`, which adds the sidecar proxies. `istioctl kube-inject` takes a Kubernetes YAML file as input, and outputs a version of that YAML which includes the Istio proxy:
```
kubectl apply -f <(istioctl kube-inject -f ideas.yaml)
```

Now we need an Istio gateway to make our application to be accesible from outside our GKE cluster.
(second command verifies the external IP address of the gateway): 
```
kubectl apply -f ideas-gateway.yaml
kubectl get svc istio-ingressgateway -n istio-system
```
-->



# Debugging
1) No healthy upstream with egress gateway: destination port is not listening, destination miroservie is not properly installed.

After GKE cluster is created  on a GCP project, the following will deploy the **Express container** on Google Container Registry, and then on the cluster:

2) Useful commands for debugging pods: 
```
kubectl logs -f details-v5-68dbd64dbb-mq94g -c details # pod logs
kubectl exec -it angularpage-v5-5c6669c47b-mr9dg sh  # shell into a container
```

3) Useful commands for debugging Istio:
```
istioctl proxy-status
istioctl get gateways
istioctl get virtualservices
# Check istio ingress port listeners
kubectl exec -t -n istio-system $(kubectl get pod -l app=istio-ingressgateway -n istio-system | grep "istio-ingressgateway" | awk '{print $1}') -- netstat -lptnu 


```






```bash
docker build -t gcr.io/<PROJECT_ID>/ideas-express:latest .
gcloud docker -- push gcr.io/<PROJECT_ID>/ideas-express:latest 
kubectl run ideas-express --image gcr.io/<PROJECT_ID>/ideas-express:latest --port 3000
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