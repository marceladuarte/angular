var app = angular.module("simpleForm", []);
app.controller("formController", function($scope){
      $scope.user = {
                      name: "",
                      lastname: "",
                      age: "",
                      email: ""
                    };
      $scope.users = [];

      $scope.save = function() {
        $scope.user.name = $scope.name;
        $scope.user.lastname = $scope.lastname;
        $scope.user.age = $scope.age;
        $scope.user.email = $scope.email;
        var list  = $scope.users.concat( $scope.user );
        $scope.users = list;
        $scope.cleanForm();
      };

      $scope.cleanForm = function(){
        $scope.name = "";
        $scope.lastname = "";
        $scope.age = "";
        $scope.email = "";
        $scope.user = {
                        name: "",
                        lastname: "",
                        age: "",
                        email: ""
                      };
      };

});
