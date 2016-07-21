/**
 * Created by simba on 21/07/2016.
 */
var app = angular.module('app', []);
app.controller('Ctrl', function ($scope, $http) {

    $http.get("/data/menu_items.json").success(function (data) {
        console.log(data);
        $scope.menu_array = data;
    });

    $scope.addMenu = function () {
        $scope.menu_array.unshift({
            "Category": $scope.menu.category,
            "Name": $scope.menu.name,
            "Description": "cilantro, walnut, sesame, pepitas\u00a0\u00a0",
            "Price": 5,
            "Undercooked Warning": 0,
            "Vegetarian": 1
        });

        $scope.menu = {};
    };

    $scope.removeMenu = function (index) {
        var array_list = $scope.menu_array;

        for(i in array_list){
            if (i == index){
                array_list.splice(i,1);
            }
        }
    }
});