## Backend Dependency
* php ^7.3|^8.0
* composer 

## Frontend Dependency
* nodejs 14.0+
* npm 6.14+
 
## Initial Installation
**Step 1:** Clone the repository
```
https://github.com/mashiurfpi/url_shortener.git
```
**Step:** If Want to use Docker 
```
docker-compose up 
```
### Access the application at http://127.0.0.1:8000/

**Step:** For Manually  Install

**Step 2:** Install dependencies inside the repository
```
composer install
```
**Step 3:** Install dependencies inside the repository
```
npm install
```

**Step 4:**  Copy .env.example file to .env and edit database credentials there, or Create `.env` file with the following content
```
APP_URL=http://127.0.0.1:8000/
APP_API=http://127.0.0.1:8000/api/
MIX_GOOGLE_API_KEY=XXXXXXXXXXXXXXXxxxx

DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

**Step 5:** Run migration for creating table.

```
php artisan migrate
```

**Step 6:** Run the application
### Start Laravel app
```
php artisan serve
```

**Step 7:** Build the application

```
npm run watch
```
### Access the application at http://127.0.0.1:8000/
#### Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

### Link to Github repo.

### [Github repository](https://github.com/ashadbubt/url_shortener_docker)


