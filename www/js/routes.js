angular.module('app.routes', ['ionic', 'jett.ionic.filter.bar'])

//
.config(function($stateProvider, $urlRouterProvider, $ionicFilterBarConfigProvider) {
    $stateProvider

    .state('kuizine', {
        url: '/menu',
        abstract:true,
        templateUrl: 'templates/nav-menu.html',
        controller: 'navmenuCtrl'
    })

    .state('kuizine.home', {
        url: '/home',
        views: {
            'side-menu': {
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            }
        }
    })

    .state('kuizine.search', {
        url: '/search',
        views: {
            'side-menu': {
                templateUrl: 'templates/search.html',
                controller: 'searchCtrl'
            }
        }
    })

    .state('kuizine.browse', {
        url: '/browse',
        views: {
            'side-menu': {
                templateUrl: 'templates/browse.html',
                controller: 'browseCtrl'
            }
        }
    })

    .state('kuizine.profile', {
        url: '/profile?restaurantId',
        views: {
            'side-menu': {
                templateUrl: 'templates/profile.html',
                controller: 'profileCtrl'
            }
        }
    })

    .state('kuizine.favorites', {
        url: '/favorites',
        views: {
            'side-menu': {
                templateUrl: 'templates/favorites.html',
                controller: 'favoritesCtrl'
            }
        }
    })

    .state('kuizine.login', {
        url: '/login',
        views: {
            'side-menu': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    })

    .state('kuizine.signup', {
        url: '/signup',
        views: {
            'side-menu': {
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            }
        }
    });

    //
    $urlRouterProvider.otherwise('/menu/home');

    //
    $ionicFilterBarConfigProvider.theme('calm');

});
