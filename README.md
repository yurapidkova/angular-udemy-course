# angular-udemy-course

# run in docker 

Build and push image

```docker run -d -p 5000:5000 --name registry registry```

```docker-compose build && docker-compose push```

Run local image

```docker run --rm -it -v $PWD:/app -u 1000:1000 -w /app -p 4200:4200 localhost:5000/node-js```

Run container on windows 

```docker run --rm -it -v "%cd%:/app" -w /app -p 4200:4200 localhost:5000/node-js```

serve in container

```ng serve --host```