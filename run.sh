#!/usr/bin/env zsh

# bundle install && \
# yarn && \

rails server -p 3002 && \
./bin/shakapacker-dev-server && \
npx tailwindcss -i ./app/assets/stylesheets/application.css -o ./app/assets/stylesheets/styles.css --watch