# angular-udemy-course

# run in docker 

Build and push image

```docker run -d -p 5000:5000 --name registry registry```

```docker-compose build && docker-compose push```

Run local image

```docker run --rm -it -v $PWD:/app -u 1000:1000 -w /app --network host localhost:5000/node-js```

Run on windows in container

```ng serve --host```