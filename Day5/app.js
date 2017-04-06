(function(){
	"use strict"

	angular.module("myApp", [])
		.controller('myCtrl', ['$scope', function($scope){
			$scope.dealers=[
							  {
							    "DealerID": 1,
							    "Dealer Name": "Dealer 1",
							    "Address": "123 Main St",
							    "City": "Irvine",
							    "State": "CA",
							    "ZIP Code": 92603,
							    "Brands": [{"Brand": "Brand A","Product I": "","Product II": "X","Product III": "X","Product IV": "X","Product V": "X"},
							      {"Brand": "Brand B","Product I": "","Product II": "","Product III": "X","Product IV": "",
							        "Product V": "X"
							      }
							    ]
							  },
							  {
							    "DealerID": 2,
							    "Dealer Name": "Dealer 2",
							    "Address": "456 2nd Av",
							    "City": "Portland",
							    "State": "OR",
							    "ZIP Code": 97225,
							    "Brands": [{"Brand": "Brand A","Product I": "X","Product II": "X","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand C","Product I": "","Product II": "","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand D","Product I": "","Product II": "","Product III": "X","Product IV": "X","Product V": "X"}]
							  },
							  {
							    "DealerID": 3,
							    "Dealer Name": "Dealer 3",
							    "Address": "123 Third St",
							    "City": "Irvine",
							    "State": "CA",
							    "ZIP Code": 92603,
							    "Brands": [{"Brand": "Brand A","Product I": "","Product II": "X","Product III": "X","Product IV": "X","Product V": "X"},
							      {"Brand": "Brand B","Product I": "","Product II": "","Product III": "X","Product IV": "","Product V": "X"}]
							  },
							  {
							    "DealerID": 4,
							    "Dealer Name": "Dealer 4",
							    "Address": "456 4th Av",
							    "City": "Portland",
							    "State": "OR",
							    "ZIP Code": 97225,
							    "Brands": [{"Brand": "Brand A","Product I": "X","Product II": "X","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand C","Product I": "","Product II": "","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand D","Product I": "","Product II": "","Product III": "X","Product IV": "X","Product V": "X"}]
							  },
							  {
							    "DealerID": 5,
							    "Dealer Name": "Dealer 5",
							    "Address": "123 Fifth St",
							    "City": "Irvine",
							    "State": "CA",
							    "ZIP Code": 92603,
							    "Brands": [{"Brand": "Brand A","Product I": "","Product II": "X","Product III": "X","Product IV": "X","Product V": "X"},
							      {"Brand": "Brand B","Product I": "","Product II": "","Product III": "X","Product IV": "","Product V": "X"}]
							  },
							  {
							    "DealerID": 6,
							    "Dealer Name": "Dealer 6",
							    "Address": "456 6th Av",
							    "City": "Portland",
							    "State": "OR",
							    "ZIP Code": 97225,
							    "Brands": [{"Brand": "Brand A","Product I": "X","Product II": "X","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand C","Product I": "","Product II": "","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand D","Product I": "","Product II": "","Product III": "X","Product IV": "X","Product V": "X"}]
							  },
							  {
							    "DealerID": 7,
							    "Dealer Name": "Dealer 7",
							    "Address": "123 Seventh St",
							    "City": "Irvine",
							    "State": "CA",
							    "ZIP Code": 92603,
							    "Brands": [{"Brand": "Brand A","Product I": "","Product II": "X","Product III": "X","Product IV": "X","Product V": "X"},
							      {"Brand": "Brand B","Product I": "","Product II": "","Product III": "X","Product IV": "","Product V": "X"}]
							  },
							  {
							    "DealerID": 8,
							    "Dealer Name": "Dealer 8",
							    "Address": "456 8th Av",
							    "City": "Portland",
							    "State": "OR",
							    "ZIP Code": 97225,
							    "Brands": [{"Brand": "Brand A","Product I": "X","Product II": "X","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand C","Product I": "","Product II": "","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand D","Product I": "","Product II": "","Product III": "X","Product IV": "X","Product V": "X"}]
							  },
							  {
							    "DealerID": 9,
							    "Dealer Name": "Dealer 9",
							    "Address": "123 Ninth St",
							    "City": "Irvine",
							    "State": "CA",
							    "ZIP Code": 92603,
							    "Brands": [{"Brand": "Brand A","Product I": "","Product II": "X","Product III": "X","Product IV": "X","Product V": "X"},
							      {"Brand": "Brand B","Product I": "","Product II": "","Product III": "X","Product IV": "","Product V": "X"}]
							  },
							  {
							    "DealerID": 10,
							    "Dealer Name": "Dealer 10",
							    "Address": "456 10th Av",
							    "City": "Portland",
							    "State": "OR",
							    "ZIP Code": 97225,
							    "Brands": [{"Brand": "Brand A","Product I": "X","Product II": "X","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand C","Product I": "","Product II": "","Product III": "X","Product IV": "","Product V": "X"},
							      {"Brand": "Brand D","Product I": "","Product II": "","Product III": "X","Product IV": "X","Product V": "X"}]
							  }
							];
			$scope.expandAll = function(expanded){
				$scope.$broadcast('onExpandAll', {expanded: expanded});
			}

		}])
    .directive('expand', function () {
            return {
                restrict: 'A',
                controller: ['$scope', function ($scope) {
                    $scope.$on('onExpandAll', function (event, args) {
                        $scope.expanded = args.expanded;
                    });
                }]
            };
        });
})();