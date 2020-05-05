run-in-docker:
	docker start registry || docker run -d -p 5000:5000 --name registry registry
	docker-compose build
	docker-compose push
	docker run --rm -it -v $PWD:/app -u 1000:1000 -w /app --network host localhost:5000/node-js