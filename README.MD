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
3. Create a file called `config.json` with this content:
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
4. Run `npm install` in the `/client` and `/api` directory.
5. In the repo's root directory, run `docker-compose up`.
6. In the `/api` directory, run `npm run dev`.
7. In the `/client` directory, run `npm run serve`.
8. In your browser, navigate to `localhost:8080`
