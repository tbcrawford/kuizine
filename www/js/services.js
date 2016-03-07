angular.module('app.services', [])

//
.factory('AuthenticationService', ['$http', '$q', '$state', function($http, $q, $state) {
    //
    var authenticationService = {};
    var username;
    var userId;
    var loggedIn;

    //
    authenticationService.login = function(user, pass) {
        //
        var deferred = $q.defer();

        //
        $http.post('http://csit.kutztown.edu/kuizine/application_files/login.php', {username: user, password: pass})
        .then(function (response) {
            if (response.data.message == "AUTHORIZATION-SUCCESS") {
                loggedIn = true;
                username = user;
                userId = response.data.userId;
                $state.go('kuizine.home');
            }
            else {
                loggedIn = false;
            }
        });

        //
        deferred.resolve();
        return deferred.promise;
    };

    //
    authenticationService.getLoginStatus = function() {
        return loggedIn;
    };

    //
    authenticationService.getUsername = function() {
        return username;
    };

    //
    authenticationService.getUserId = function() {
        return userId;
    };

    //
    authenticationService.logout = function() {
        loggedIn = undefined;
        username = undefined;
        userId = undefined;
        $state.go('kuizine.home');
    };

    //
    return authenticationService;
}])



//
.factory('RestaurantDisplayService', ['$http', '$q', '$stateParams', function($http, $q, $stateParams) {
    //
    var restaurantDisplayService = {};

    //
    restaurantDisplayService.getRestaurantsList = function() {
        //
        var deferred = $q.defer();
        var restaurantsList = [];

        //
        $http.post('http://csit.kutztown.edu/kuizine/application_files/get_restaurants_list.php', {dayOfWeek: restaurantDisplayService.getDay()})
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var card = {
                    restaurantName: response.data[i].restaurantName,
                    restaurantId: response.data[i].restaurantId,
                    restaurantHours: response.data[i].restaurantHours
                };
                restaurantsList.push(card);
            }

            //
            deferred.resolve(restaurantsList);
            return restaurantsList;
        });

        //
        return deferred.promise;
    };

    //
    restaurantDisplayService.getFavoritesList = function(userId) {
        //
        var deferred = $q.defer();
        var favoritesList = [];

        //
        $http.post('http://csit.kutztown.edu/kuizine/application_files/get_favorites_list.php', {userId: userId, dayOfWeek: restaurantDisplayService.getDay()})
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var card = {
                    restaurantName: response.data[i].restaurantName,
                    restaurantId: response.data[i].restaurantId,
                    restaurantHours: response.data[i].restaurantHours
                };
                favoritesList.push(card);
            }

            //
            deferred.resolve(favoritesList);
            return favoritesList;
        });

        //
        return deferred.promise;
    };

    //
    restaurantDisplayService.getRestaurantProfile = function() {
        //
        var deferred = $q.defer();
        var profile = {};

        //
        $http.post('http://csit.kutztown.edu/kuizine/application_files/get_restaurant_profile.php', {restaurantId: $stateParams.restaurantId})
        .then(function (response) {
            //
            profile.restaurantId = response.data.restaurantId;
            profile.restaurantName = response.data.restaurantName;
        	profile.restaurantAddress = response.data.restaurantAddress;
        	profile.restaurantPhone = response.data.restaurantPhone;
        	profile.restaurantEmail = response.data.restaurantEmail;
        	profile.restaurantWebsite = response.data.restaurantWebsite;
        	profile.restaurantDescription = response.data.restaurantDescription;
        	profile.restaurantMenuLink = response.data.restaurantMenuLink;
            profile.restaurantHours = response.data.restaurantHours;

            //
            deferred.resolve(profile);
            return profile;
        });

        //
        return deferred.promise;
    };

    //
    restaurantDisplayService.getDay = function() {
        var date = new Date();
        return date.getDay();
    };

    //
    return restaurantDisplayService;
}]);
