run-in-docker:
    docker build --tag angular-local:1.0 .
    docker run --rm -it -v $PWD:/app -w /app -u 1000:1000 -p 4200:4200 angular-local:1.0