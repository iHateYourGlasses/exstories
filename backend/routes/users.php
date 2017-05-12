<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//single user by mail/pass
$app->post('/api/users/get', function (Request $request, Response $response){

	$mail = $request->getParam('mail');
	$dryPass = $request->getParam('pass');

	$options = ['salt' => $mail.$dryPass.$mail.$dryPass];
	$wetPass = password_hash($dryPass, PASSWORD_BCRYPT, $options);


	$db = new DBStorage();
	$db->dbConnect("main","u0329825_exstories_main"); 

	$stmt = $db->mysqli->prepare(
		"SELECT id, user_name, user_confirmed FROM u0329825_exstories_main.users where `user_mail` = ? and `user_pass` = ?;");

	$stmt->bind_param("ss", $mail, $wetPass);
	$result = $stmt->execute();
  $stmt->bind_result($id, $userName, $userConfirmed);


	if($stmt->fetch()) {
		$userIDSaved = $id;
		$userNameSaved = $userName;
		$userConfirmedSaved = $userConfirmed;
  	$stmt->close();

		$sql =  "CALL `u0329825_exstories_main`.`get_user_token`('".$userIDSaved."')";
		$token = $db->dbQuery($sql)->fetch_row()[0];
		$response = ["status"=>true, 'id'=>$userIDSaved, 'user_name'=>$userNameSaved,  'user_confirmed'=>$userConfirmedSaved, 'token'=>$token];
  }else{
  	$stmt->close();
		$response = ["status"=>false, 'error_msg'=> 'Неверная пара логин/пароль!'];
	}

	echo json_encode($response);
	$db->dbDisconnect();
});

//new user
$app->post('/api/users/add', function (Request $request, Response $response){

	$name = $request->getParam('username');
	$mail = $request->getParam('mail');
	$dryPass = $request->getParam('pass');

	$options = ['salt' => $mail.$dryPass.$mail.$dryPass];
	$wetPass = password_hash($dryPass, PASSWORD_BCRYPT, $options);

	$date = date('Y-m-d H:i:s');

	$db = new DBStorage();
	$db->dbConnect("main","u0329825_exstories_main"); 

	$stmt = $db->mysqli->prepare(
		"INSERT INTO `u0329825_exstories_main`.`users`
	 (`user_created`, `user_name`, `user_mail`, `user_pass`, `user_confirmed`,  `user_role`)
	  VALUES (?, ?, ?, ?, '0', '1');");

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
		$response["userID"] = $newId;
		$response["user_confirmed"] = '0';

		$sql =  'CALL `u0329825_exstories_main`.`get_user_token`("'.$newId.'")';
		$token = $db->dbQuery($sql)->fetch_row()[0];
		$response["token"] = $token;
	}

	echo json_encode($response);
	$stmt->close();
	$db->dbDisconnect();
});

//check user token
$app->post('/api/users/check', function (Request $request, Response $response){

	$tokenToCheck = $request->getParam('token');
	$userId = intval($request->getParam('userID'));

	$db = new DBStorage();
	$db->dbConnect("main","u0329825_exstories_main");
	$sql =  'CALL `u0329825_exstories_main`.`get_user_token`("'.$userId.'")';
	$token = $db->dbQuery($sql)->fetch_row()[0];
	$response = [];

	if(!$token){
		$response['status'] = 'error';
		echo json_encode($response);
		exit;
	}
	if($token === $tokenToCheck){
		$response['status'] = true;
	}else{
		$response['status'] = false;
	}
	echo json_encode($response);

	$db->dbDisconnect();
});

//single user info
$app->get('/api/user/{id}/' , function ($request, $response, $args){
	$userToSearch = intval($args["id"]);
	$db = new DBStorage();
	$db->dbConnect("main","u0329825_exstories_main"); 

	$sql = "SELECT date_format(DATE(`user_created`),'%d.%m.%Y') as `user_created`, `user_name` FROM u0329825_exstories_main.users where id = ".$userToSearch;
	$result = $db->dbQuery($sql)->fetch_assoc();

	$response = [];

	if(!$result){
		$response['status'] = false;
		$response['error_msg'] = 'Ошибка загрузки данных пользователя';
		echo json_encode($response);
		exit;
	}

	$response['status'] = true;
	$response['user']  = $result;

	$sql = "SELECT count(*) as `stories_count` FROM u0329825_exstories_main.stories_prod where `user_id` = ".$userToSearch;
	$result = $db->dbQuery($sql)->fetch_row()[0];

	$response['user']['stories_count'] = $result;

	echo json_encode($response);

})

?>