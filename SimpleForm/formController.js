var app = angular.module("simpleForm", []);
app.controller("formController", function($scope){
      $scope.customer = {
                      id: 0,
                      name: "",
                      lastname: "",
                      age: "",
                      email: ""
                    };
      $scope.customers = [];
      $scope.id = 0;
      $scope.currentId = 0;

      $scope.save = function() {
        if($scope.currentId == 0){
          $scope.customer.id = $scope.id + 1;
          $scope.customer.name = $scope.name;
          $scope.customer.lastname = $scope.lastname;
          $scope.customer.age = $scope.age;
          $scope.customer.email = $scope.email;

          $scope.id = $scope.customer.id;

          var list  = $scope.customers.concat( $scope.customer );
          $scope.customers = list;

        }else{
          var index = $scope.findIndexById($scope.currentId);
          $scope.remove(index);
          $scope.currentId = 0;
          $scope.save();
        }
        $scope.cleanForm();

      };

      $scope.edit = function(id){
        var index = $scope.findIndexById(id);
        $scope.name = $scope.customers[index].name;
        $scope.lastname = $scope.customers[index].lastname;
        $scope.age = $scope.customers[index].age;
        $scope.email = $scope.customers[index].email;
        $scope.currentId = id;

      };

      $scope.confirmRemove = function(id){
        if (confirm('Are you sure you want to delete this customer?')) {
          var index = $scope.findIndexById(id);
          $scope.remove(index);
        }
      };

      $scope.remove = function(index){
        $scope.customers.splice(index, 1);
      };

      $scope.findIndexById = function(id){
        for (var index = 0; index < $scope.customers.length; index++){
          if($scope.customers[index].id == id){
            return index;
          }
        }
      };

      $scope.cleanForm = function(){
        $scope.name = "";
        $scope.lastname = "";
        $scope.age = "";
        $scope.email = "";
        $scope.customer = {
                        id: 0,
                        name: "",
                        lastname: "",
                        age: "",
                        email: ""
                      };
        $scope.currentId = 0;
      };

});
