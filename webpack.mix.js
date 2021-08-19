const mix = require('laravel-mix');

mix.disableSuccessNotifications();

if (mix.inProduction()) {
    mix.less('./src/app.less', './elements.min.css');
} else {
    mix.less('./src/app.less', './elements.css');
}
