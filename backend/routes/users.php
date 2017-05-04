<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

//all users
$app->get('/api/users', function (Request $request, Response $response){
	$db = new DBStorage($mainServerConnectData);

	$db->dbConnect("main","u0329825_exstories_main"); 
	$sql =  'SELECT id, user_name FROM users;';
	$result = $db->dbQuery($sql);
	$users = $result->fetch_all(MYSQLI_ASSOC);

	echo json_encode($users);
	$db->dbDisconnect();
});

/*
//single user by id
$app->get('/api/users/{id}', function (Request $request, Response $response){
	$id = intval($request->getAttribute('id'));
	$db = new DBStorage($mainServerConnectData);

	$db->dbConnect("main","u0329825_exstories_main"); 
	$sql =  'SELECT id, user_name FROM users where `id` = '.$id;
	$result = $db->dbQuery($sql);
	$users = $result->fetch_object();

	echo json_encode($users);
	$db->dbDisconnect();
});*/


//single user by mail/pass
$app->post('/api/users/get', function (Request $request, Response $response){

	$mail = $request->getParam('mail');
	$dryPass = $request->getParam('pass');

	$wetPass = $dryPass;
	for ($i=0; $i < 35 ; $i++) { 
		$wetPass = md5($wetPass);
	}

	$db = new DBStorage($mainServerConnectData);
	$db->dbConnect("main","u0329825_exstories_main"); 

	$stmt = $db->mysqli->prepare(
		"SELECT * FROM u0329825_exstories_main.users where `user_mail` = ? and `user_pass` = ?;");

	$stmt->bind_param("ss", $mail, $wetPass);
	$result = $stmt->execute();

	$db->dbDisconnect();
});

//new user
$app->post('/api/users/add', function (Request $request, Response $response){

	$name = $request->getParam('username');
	$mail = $request->getParam('mail');
	$dryPass = $request->getParam('pass');

	$wetPass = $dryPass;

	for ($i=0; $i < 35 ; $i++) { 
		$wetPass = md5($wetPass);
	}

	$date = date('Y-m-d H:i:s');

	$db = new DBStorage($mainServerConnectData);
	$db->dbConnect("main","u0329825_exstories_main"); 

	$stmt = $db->mysqli->prepare(
		"INSERT INTO `u0329825_exstories_main`.`users`
	 (`user_created`, `user_name`, `user_mail`, `user_pass`, `user_confirmed`, `user_confirm_hash`, `user_role`)
	  VALUES 
	  (?, ?, ?, ?, '0', '', '1');");
	$stmt->bind_param("ssss", $date, $name, $mail, $wetPass);
	$result = $stmt->execute();

	$response = ["status"=>true];
	$newId = $stmt->insert_id;
	if(!$newId){
		$response["status"] = false;
		$errorCode = $stmt->errno;

		switch ($errorCode) {
			case 1062:
				$response["error_msg"] = 'Такая почта уже есть в базе.';
				break;
			
			default:
				$response["error_msg"] = 'Ошибка регистрации. Обратитесь к администратору.';
				break;
		}

	}else{
		$token  = md5($mail.$wetPass);
		$response["token"] = $token;
	}

	echo json_encode($response);
	$db->dbDisconnect();
});

?>