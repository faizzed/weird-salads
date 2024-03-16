# Weird Salads

Live site: https://salads.onrender.com/

### How to setup locally?
- Clone the repo
  ```bash
  git clone git@github.com:faizzed/weird-salads.git
  ```
  
- Go to project directory & run the app
  ```bash
    cd weird-salads && ./run.sh
    ```

<details>
    <summary>OR follow the following steps individually</summary>

  - Install rails dependencies

      ```bash
        bundle install
      ```  
  
  - Install yarn dependencies
    ```bash
      yarn
    ```
  
  - Create database, migrations and seeds
    ```bash
      rails db:create
      rails db:migrate
      rails db:seed
    ```
  - create the react js bundle
      ```bash
      ./bin/shakapacker
      ```
  
  - run the rails server from project directory
      ```bash
      rails s -p 3002
      ```
</details>




Tech:

- Ruby and rails backend
- React frontend
- Tailwind & [preline](https://preline.co/docs/index.html) lib are used in components
- Mysql


https://github.com/faizzed/weird-salads/assets/14324782/c2ee8f48-d79f-4520-b345-9823f8b21e33




