#!/usr/bin/env zsh

function run_dev() {
  echo "Starting dev server..."
  # bundle install && \
  # yarn && \
  rails server -p 3002 && \
  ./bin/shakapacker-dev-server && \
  npx tailwindcss -i ./app/assets/stylesheets/application.css -o ./app/assets/stylesheets/styles.css --watch
}

function run_prod() {
  echo "Starting app..." && \
  bundle install && \
  yarn && \
  rails db:create && \
  rails db:migrate && \
  rails db:seed && \
  ./bin/shakapacker && \
  rails server -p 3002;
}

run_prod