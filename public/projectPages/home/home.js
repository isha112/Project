app.controller("HomeController", function ($scope, $http, $routeParams) {

    //autocomplete
    $(function () {
        var input = document.getElementById('cityname');
        var autocomplete = new google.maps.places.Autocomplete(input);

        $('#demo').pinterest_grid({
            no_colums: 4,
            padding_x: 10,
            padding_y: 10,
            margin_bottom: 50,
            single_column_breakpoint: 700
        });
    });

    //req API for events
    $scope.getEvents = function () {
        
        var x = document.getElementById('cityname').value;
        $scope.name = x.substr(0, x.indexOf(','));
        //alert($scope.name);
        $scope.events = [];

        $http.jsonp("http://api.eventful.com/jsonp/events/search?q=tag:jazz&l=" + $scope.name + "&app_key=ncZMbJNvDKFCTLR3" + "&callback=JSON_CALLBACK")
        .success(function (result) {
            $scope.events = result.events.event;

        })
    }
});
