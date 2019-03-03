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

## Setup and Testing
0. Install docker and npm
1. `git clone https://github.com/CSC307Winter2019/TheGiraffes.git` in whatever directory you want.
2. `cd` into that directory.
3. Create a file called `config.json` in `/api` with this content:

 `{
  "dev": {
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "password",
    "database": "dev",
    "logging": true
  },
  "test": {
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "password",
    "database": "test"
  }
}`

<<<<<<< HEAD
4. Run `npm install` in the `/client` and `/api` directory.
5. In the repo's root directory, run `docker-compose up`.
6. In the `/api` directory, run `npm run dev`.
7. In the `/client` directory, run `npm run serve`.
8. In your browser, navigate to `localhost:8080`
=======
4. Run a SQL query to create a database `dev` and `test`
 * `create database dev`, `create database test`
5. Run `npm install` in the `/client` and `/api` directory.
6. In the repo's root directory, run `docker-compose up`.
7. In the `/api` directory, run `npm run dev`.
8. In the `/client` directory, run `npm run serve`.
9. In your browser, navigate to `localhost:8080`
>>>>>>> 27d4ae105a7f1313b02a839df93a1a4971b0b199
