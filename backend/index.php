<?php
require_once 'config/headers.php';

require 'vendor/autoload.php';
require 'config/db.php';

$app = new \Slim\App;

//user route
require './routes/users.php';

//stories route
require './routes/stories.php';

unset($app->getContainer()['errorHandler']);
unset($app->getContainer()['phpErrorHandler']);

$app->run();