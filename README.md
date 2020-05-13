# angular-udemy-course

# run in docker 

Build and push image

```docker build --tag angular-local:1.0 .```

Run on linux

```docker run --rm -it -v $PWD:/app -u 1000:1000 -w /app -p 4200:4200 angular-local:1.0```

Run container on windows 

```docker run --rm -it -v "%cd%:/app" -w /app -p 4200:4200 angular-local:1.0```

serve in container

```ng serve --host```