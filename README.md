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


### Implementation details:
Please checkout the following sections for some of the ideation i did before starting the app. Reading this is not necessary - it will just shed some additional light on the approaches i took.

<details>
    <summary>App idea:</summary>
    Items in italic format aren't covered in the app. Rationale being they are additive and can be added to the app once the core features are built.

Main functions:

- The app should track deliveries, track ingredients
- It can make up recipes and menus.
- It should sell recipes.
- It should track sales, costs, inventory movements etc.
- *It can handle location based recipes, inventory and staff*

Jobs:

- On delivery:
    - Staff can track items
    - *Can add delivery date*
    - Can cost items
- Inventory check:
    - Staff can update items.
    - Update items quantity on wastage.
    - Remove items if needed.
    - *App should track changes (who, when and how much)*
- Menu makeup:
    - Staff can setup a menu.
    - Can create  salads.
    - Setup ingredients per salad.
  - *number of ingredients and their quantity along with unit of measurement can be added or removed — i.e dynamic form for handling this*
    - Add cost of salad.
- Selling:
    - Staff can sell salad.
    - It should check if the salad ingredients are available and adjust inventory accordingly after sale.
    - Store sale data.
- Manager:
    - *Manager can check monthly sales.*
    - *costs*
    - *wastage*
    - *etc..*
</details>

<details>
    <summary>App database:</summary>

Tables:

`salads`
```text
- id
- name
- cost —> derived
```

`salad_ingredients`
```
- salad_id
- ingredient_id
- qty
```

`ingredients`
```
- id
- name
- qty
- cost
```
`orders`
```
- id
- salad_id
- cost
```
</details>

<details>
    <summary>Implementation plan:</summary>

- ~~setup boilerplate rails+react app~~

Backend:

- setup migrations
    - models
        - ~~salad~~
        - ~~ingredients~~
        - ~~orders~~
    - ~~add relations~~
- setup controllers
    - ~~salad controller~~
        - ~~create~~
        - ~~list~~
    - ~~ingredient controller~~
        - ~~create~~
        - ~~update~~
        - ~~list~~
    - ~~orders controller~~
        - ~~create~~
        - ~~list~~
- ~~setup routes~~
- setup commands
    - *salad*
        - *create salad*
        - *list salad*
    - *ingredients*
        - *create ingredient*
        - *update ingredient*
        - *list ingredients*
    - orders
        - *list orders*
        - ~~create order~~

Frontend:

- ~~add template / theme or generic components lib~~
- setup pages as in designs
    - homepage → salads
        - ~~table with salads~~
        - ~~create button to create a salad~~
        - ~~form with name, items list with quantity~~
        - ~~create order button~~
        - ~~api call to create salad~~
    - inventory
        - ~~ingredients list table~~
        - ~~add new ingredient button~~
        - ~~form: name, quantity, cost~~
        - ~~api call to create ingredient~~
        - ~~click on row to update~~
        - ~~api call to update ingredient~~
    - orders
        - ~~orders listed, salad name, price, items maybe~~
        - ~~create order — with salad id~~
        - ~~shows error and success~~
- General components
    - ~~table~~
    - ~~form~~
    - ~~nav~~
    - ~~header~~
    - ~~footer~~
    - ~~error success notifications~~
</details>

<details>
    <summary>Project Info:</summary>

The app is based on

- Ruby and rails backend
- React frontend
- Tailwind & [preline](https://preline.co/docs/index.html) lib are used in components
- Mysql

App structure:

- backend code is structured [per standard rails project structure](https://guides.rubyonrails.org/getting_started.html#:~:text=The%20blog%20directory%20will%20have%20a%20number%20of%20generated%20files%20and%20folders%20that%20make%20up%20the%20structure%20of%20a%20Rails%20application.%20Most%20of%20the%20work%20in%20this%20tutorial%20will%20happen%20in%20the%20app%20folder%2C%20but%20here%27s%20a%20basic%20rundown%20on%20the%20function%20of%20each%20of%20the%20files%20and%20folders%20that%20Rails%20creates%20by%20default%3A).
- frontend code is structured according to [react-rails](https://github.com/reactjs/react-rails) repo structure
    - components are inside `app/javascript` folder
</details>

### Left out features:

- Left out features are in **App idea** section highlighted in red.

### Gotchas — left out items:

- Determining price:
    - It should be based on units of ingredients along with their price but i’ve omitted units. This requires time to setup and test. Right now price is determined by whatever price the store decide for a specific quantity of ingredient.
- Creating salad:
    - It should be fine grained by unit of ingredients along with quantity - but hard to setup, thats omitted.
    - Also the number of ingredients in form should be dynamic - right now i am using at max 5 ingredients in a salad.

### Demo Video:



https://github.com/faizzed/weird-salads/assets/14324782/c2ee8f48-d79f-4520-b345-9823f8b21e33




