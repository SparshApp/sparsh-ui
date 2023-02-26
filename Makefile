DOCKER_COMPOSE = docker-compose
DOCKER_COMPOSE_UP = $(DOCKER_COMPOSE) up -d
DOCKER_COMPOSE_DOWN = $(DOCKER_COMPOSE) down
DOCKER_COMPOSE_BUILD = $(DOCKER_COMPOSE) build
DOCKER_COMPOSE_RUN = $(DOCKER_COMPOSE) run --rm
DOCKER_COMPOSE_EXEC = $(DOCKER_COMPOSE) exec
DOCKER_COMPOSE_RESTART = $(DOCKER_COMPOSE) restart
DOCKER_COMPOSE_PS = $(DOCKER_COMPOSE) ps

build:
    docker build -t my-react-app:latest .

run:
    $(DOCKER_COMPOSE_UP)

stop:
    $(DOCKER_COMPOSE_DOWN)

rebuild:
    $(DOCKER_COMPOSE_BUILD)

restart:
    $(DOCKER_COMPOSE_RESTART)

ps:
    $(DOCKER_COMPOSE_PS)

lint:
    $(DOCKER_COMPOSE_RUN) web yarn lint

test:
    $(DOCKER_COMPOSE_RUN) web yarn test

bash:
    $(DOCKER_COMPOSE_EXEC) web bash