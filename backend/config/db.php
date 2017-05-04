<?php

class DBStorage {
	public $mysqli = NULL;
	function getDbData(){
		var_dump($dbConnectData);
	}

	
	function dbConnect($dbToConnect, $scheme) {

		require_once 'config/sensitive.php';

		$this->mysqli = new mysqli(
			$mainServerConnectData[$dbToConnect]["ip"],
	  	$mainServerConnectData[$dbToConnect]["user"],
		  $mainServerConnectData[$dbToConnect]["pass"],
		  $scheme);

		$this->mysqli->set_charset("utf8");
		
	}

	function dbDisconnect() {
				
		$this->mysqli->close();
		
		$this->mysqli = NULL;
		
	}

	function dbQuery($queryStr = NULL) {
		if (!$queryStr) 
			return false;
		
		$queryResult = $this->mysqli->query($queryStr);
		
		return $queryResult;
	}
	
	function getInsertId() {
		$res = $this->mysqli->insert_id;
		return $res;
	}

	function clearProcedureCache() {
		do{ 
	 		$this->mysqli->store_result();
	  } while($this->mysqli->more_results() && $this->mysqli->next_result());
	}

   function __construct($dbData) {
 			$this->dbConnectData = $dbData;
   }
}

?>
