const mix = require('laravel-mix');

mix.disableSuccessNotifications();

mix.less('./src/app.less', './elements.min.css');
