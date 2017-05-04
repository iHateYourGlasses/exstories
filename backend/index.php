<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require 'config/db.php';


//user route
require './routes/users.php';

unset($app->getContainer()['errorHandler']);
unset($app->getContainer()['phpErrorHandler']);

$app->run();