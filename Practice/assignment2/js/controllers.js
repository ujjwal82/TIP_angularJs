
	angular.module('myControllers', [])
	.controller('myCtrl',['$scope', function($scope){
		$scope.welcomeMsg = "Welcome to my first assignment!!!"

        $scope.message="Add new record here";
		$scope.editable = false;

		$scope.records = [	{recID: 101, name : "Ujjwal Kumar", age : 35, gender:"male", company : "FIS"}, 
						    {recID: 102, name : "Swapnil Joshi", age : 34, gender:"male", company : "FIS"}, 
						    {recID: 103, name : "Shivraj Pachling", age : 36, gender:"male", company : "FIS"},
						    {recID: 104, name : "Sandeep Vaid", age : 33, gender:"male", company : "WMH"},
						    {recID: 105, name : "Sandeep Pandit", age : 34, gender:"male", company : "CTS"},
						    {recID: 106, name : "Shekahr Dhupkar", age : 33, gender:"male", company : "TCS"},
						    {recID: 107, name : "Vijay Kulkarni", age : 35, gender:"male", company : "HSBC"}
						  ];
		$scope.loadRec =  function(recID){
            $scope.message="Modify selected record";
			$scope.addnew = false;
			$scope.newRecord =  {};

			$scope.records.forEach( function(rec, key){
				if(rec.recID == recID){
					console.log("recID : " + recID + "  rec.recID: "+  rec.recID);
					$scope.newRecord = rec;
				}
			})
		};

		$scope.addNewRecord = function(addNewRecord){
			$scope.records.push(addNewRecord);

		}

		$scope.saveRecord = function(newRecord){
			$scope.records.forEach( function(rec, key){
				if(rec.recID == newRecord.recID){
					console.log("newRecord.recID : " + newRecord.recID + "  rec.recID: "+  rec.recID);
					rec = newRecord;
				}
			})
			$scope.newRecord =  {};
		}

	}]);

