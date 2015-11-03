app.controller("HomeController", function ($scope, $http, $routeParams) {

    //autocomplete
    $(function () {
        var input = document.getElementById('cityname');
        var autocomplete = new google.maps.places.Autocomplete(input);
    });

    //req API for events
    $scope.getEvents = function () {
        
        var x = document.getElementById('cityname').value;
        $scope.name = x.substr(0, x.indexOf(','));
        //alert($scope.name);
        $scope.events = [];

        $http.jsonp("http://api.eventful.com/jsonp/events/search?q=tag:jazz&l=" + $scope.name + "&app_key=ncZMbJNvDKFCTLR3" + "&callback=JSON_CALLBACK")
        .success(function (result) {
            console.log(result.events.event);
            $scope.events = result.events.event;

        })
    }
});
