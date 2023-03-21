dev:
	docker-compose -f compose.dev.yml --env-file global.dev.env up

production:
	echo "TODO: make production command"

build:
	echo "TODO: make build command"
	docker-compose -f compose.dev.yml --env-file global.dev.env build

deploy:
	echo "TODO: make deploy command"
