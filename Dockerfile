
FROM php:8.0-apache
COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf

RUN apt-get update && apt install -y \
        libpng-dev \
        zlib1g-dev \
        libxml2-dev \
        libzip-dev \
        libonig-dev \
        zip \
        curl \
        unzip 
RUN docker-php-ext-install pdo_mysql 
RUN apt-get install nodejs -y
RUN apt-get install npm -y


RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN a2enmod rewrite



ADD . /var/www/html
COPY .env.example  /var/www/html/.env

WORKDIR /var/www/html

RUN mv .env.example .env

RUN composer install
RUN npm install
RUN npm run dev
CMD php artisan migrate && php artisan serve --host=0.0.0.0 --port=8181

EXPOSE 8181
# RUN composer update

# docker run -it --mount "type=bind,source=$(pwd),target=/var/www/html" -p 8181:8181 erp-dashboard bash
# composer install  
# php artisan serve --host=0.0.0.0 --port=8181