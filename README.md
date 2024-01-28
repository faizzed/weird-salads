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


### Please checkout this notion page for more info:
https://elderly-stove-234.notion.site/Tech-Plan-02dba22bc3ca4552821f87f47a025770

### Demo Video:



https://github.com/faizzed/weird-salads/assets/14324782/c2ee8f48-d79f-4520-b345-9823f8b21e33




