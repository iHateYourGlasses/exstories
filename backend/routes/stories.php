<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//new story
$app->post('/api/stories/add', function (Request $request, Response $response){

	$storyData = $request->getParam('storyData');
	$authData = $request->getParam('authData');
	$userID = $authData['userID'];
	$db = new DBStorage();
	$db->dbConnect("main","u0329825_exstories_main"); 

	//token check
	$sql =  "CALL `u0329825_exstories_main`.`get_user_token`('".$userID."')";
	$token = $db->dbQuery($sql)->fetch_row()[0];
	$response = [];

	$userToken = $authData['authToken'];
	if($token !== $userToken){
		$response["status"] = false;
		$response["error_msg"] = 'Ошибка добавления.';
		$response["error_action"] = 'logout';
		echo json_encode($response);
		exit;
	}
	$db->clearProcedureCache();

	$storyTitle = $storyData['title'];
	$storyBody = $storyData['desc'];
	$publishType = $storyData['publishType'] === 'Анонимно' ? 1 : 2;

	$now = date('Y-m-d H:i:s');
	$stmt = $db->mysqli->prepare(
		"INSERT INTO `u0329825_exstories_main`.`stories`
		(`user_id`, `story_created`, `story_title`, `story_body`, `story_type`)
		 VALUES (?, ?, ?, ?, ?);");

	$stmt->bind_param("isssi", $userID, $now, $storyTitle, $storyBody, $publishType);
	$result = $stmt->execute();
	$newStoryId = $stmt->insert_id;

	if(!$newStoryId){
		$response["status"] = false;
		$response["error_msg"] = 'Ошибка добавления.';
		$response["error_action"] = 'internal_error';
		echo json_encode($response);
		exit;
	}
	$response["status"] = true;
	$response['story_id'] = $newStoryId;

	echo json_encode($response);
	$stmt->close();
	$db->dbDisconnect();
});

$app->get('/api/stories/get', function (Request $request, Response $response){

	$db = new DBStorage();
	$db->dbConnect("main","u0329825_exstories_main"); 

	$sql = "SELECT * FROM u0329825_exstories_main.stories_prod;";
	$result = $db->dbQuery($sql);
	$stories = $result->fetch_all(MYSQLI_ASSOC);

	$response = [];

	if(!$stories){
		$response['status'] = false;
		$response['error_msg'] = 'Ошибка загрузки историй';
		echo json_encode($response);
		exit;
	}
	$response['status'] = true;
	$response['stories']  = $stories;

	echo json_encode($response);
	$db->dbDisconnect();

});

//single story
$app->get('/api/story/{id}/' , function ($request, $response, $args){
	$storyToSearch = intval($args["id"]);
	$db = new DBStorage();
	$db->dbConnect("main","u0329825_exstories_main"); 

	$sql = "SELECT * FROM u0329825_exstories_main.stories_prod where `id` = ".$storyToSearch;
	$result = $db->dbQuery($sql)->fetch_assoc();

	$response = [];

	if(!$result){
		$response['status'] = false;
		$response['error_msg'] = 'Ошибка загрузки истории';
		echo json_encode($response);
		exit;
	}

	$response['status'] = true;
	$response['story']  = $result;


	echo json_encode($response);

})

?>