# Group 6 - The Giraffes
Team Pizza Topping: 
* Pineapple

Team Members + Roles:
* Team Lead: Stephen Perreira
* DB Lead: Juan Salazar
* UI Lead: Gina Filangeri
* Testing Lead: Rohan Vembar
* Architect: Sangmin Jung

---

## Setup
0. Install docker and npm
1. `git clone https://github.com/CSC307Winter2019/TheGiraffes.git` in whatever directory you want.
2. `cd` into that directory.

3. Run a SQL query to create a database `dev` and `test`

  ``` 
  create database dev
  
  create database test 
  ```

4. Run `npm install` in the `/client` and `/api` directory.
5. In the repo's root directory, run `docker-compose up`.
6. In the `/api` directory, run `npm run dev`.
7. In the `/client` directory, run `npm run serve`.
8. Query the `dev` database with the contents of `data.sql` 
9. In your browser, navigate to `localhost:8080`

---

## Testing
### Frontend 

0. `cd` into the client folder

1. run `npm run test:e2e`

2. In Cypress select `Electron` as the default value

3. Click `Run all specs`

## Login Info
#### Admin
* username: owner
* password: owner
#### Employee
* username: empl 
* password: empl
