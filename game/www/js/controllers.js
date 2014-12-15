angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http, $location, dataSvc) {

        // Exit page - Start
        $scope.yes = function (){
            //Play again?
            $location.path('app/game_onebutton');
            $scope.questionId = 1;
        }
        //Exit page - End

    $scope.init = function(){
        dataSvc.getData(function(data){
            if($scope.questionId == null){
                //Set questionId
                $scope.questionId = 1;
            }
            for(var i=0; i<data.length; i++){
                if(data[i].id == $scope.questionId){
                    $scope.data = data[i];
                }
            }
        });

    }

        //ClickPicture function
        $scope.clickPicture = function (id) {
            dataSvc.getData(function(data){
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        $scope.questionId = id;
                        switch (data[i].template) {
                            case "1":
                                $location.path('app/game_onebutton');
                                break;
                            case "2":
                                $location.path('app/game_twobutton');
                                break;
                            case "3":
                                $location.path('app/game_threebutton');
                                break;
                            case "4":
                                $location.path('app/game_fourbutton');
                                break;
                            case "5":
                                $location.path('app/game_youlose');
                                break;
                            case "6":
                                $location.path('app/game_youwin');
                                break;
                        }
                        $scope.init();
                        break;
                    }
                }
            });

        }

    //Secret Button of Doom
        $scope.doom = function (){
          if($scope.questionId == 36) {
            $scope.clickPicture(42);
          }
        }
})


.service('dataSvc', function($http){

    this.getData = function(successFunc){
        var url = 'game_structure/game.json';
        $http.get(url, null)
            .success(function(data){
                successFunc(data);
            });
    };
});
