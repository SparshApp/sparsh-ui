APP_NAME := sparsh-ui

run-local:
    docker build . -t sparsh-ui
    docker run --rm -p 3000:3000 sparsh-ui

run-prod:
    docker-compose down
    docker-compose build
    docker-compose up

down:
    docker-compose down

ps:
    docker-compose ps -a

lint:
    npm run lint

test:
    npm run test