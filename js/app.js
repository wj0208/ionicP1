angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

/*.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})*/
// 实现安卓物理返回键处理
.run(['$ionicPlatform', '$rootScope','$location','$ionicHistory',
  function($ionicPlatform, $rootScope, $location,$ionicHistory) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory barabove the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins &&
        window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
// org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
    //安卓物理按键返回，以及双击退出
    $ionicPlatform.registerBackButtonAction(function (e) {
      //判断处于哪个页面时双击退出
      if ($location.path() == '/tab/home') {
        if ($rootScope.backButtonPressedOnceToExit) {
          ionic.Platform.exitApp();
        } else {
          $rootScope.backButtonPressedOnceToExit = true;
          setTimeout(function () {
            $rootScope.backButtonPressedOnceToExit = false;
          }, 2000);
        }
      }
      else if ($ionicHistory.backView()) {
        $ionicHistory.goBack();
      } else {
        $rootScope.backButtonPressedOnceToExit = true;
        setTimeout(function () {
          $rootScope.backButtonPressedOnceToExit = false;
        }, 2000);
      }
      $ionicHistory.backView.go();
      e.preventDefault();
      return false;
    }, 101);
  }])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  /*用于修改安卓 tab居下 （在参数里要加入$ionicConfigProvider）*/
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');
  $ionicConfigProvider.platform.ios.backButton.previousTitleText(''
  ).icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.courselist', {
      url: '/courselist',
      views: {
        'tab-courselist': {
          templateUrl: 'templates/tab-courselist.html',
          controller: 'CourselistCtrl'
        }
      }
    })
    .state('tab.mycourse', {
      url: '/mycourse',
      views: {
        'tab-mycourse': {
          templateUrl: 'templates/tab-mycourse.html',
          controller: 'MycourseCtrl'
        }
      }
    })
    .state('tab.course-learn', {
      url: '/course-learn/:id',
      views: {
        'tab-mycourse': {
          templateUrl: 'templates/tab-learn-home.html',
          controller: 'LearnHomeCtrl'
        }
      }
    })
    .state('tab.home-learn', {
      url: '/home-learn/:id',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-learn-home.html',
          controller: 'LearnHomeCtrl'
        }
      }
    })
    .state('tab.courselist-learn', {
      url: '/courselist-learn/:id',
      views: {
        'tab-courselist': {
          templateUrl: 'templates/tab-learn-home.html',
          controller: 'LearnHomeCtrl'
        }
      }
    })
    .state('tab.personal', {
      url: '/personal',
      views: {
        'tab-personal': {
          templateUrl: 'templates/tab-personal.html',
          controller: 'PersonalCtrl'
        }
      }
    })
    .state('tab.register', {
      url: '/register',
      views: {
        'tab-personal': {
          templateUrl: 'templates/tab-register.html',
          controller: 'RegisterCtrl'
        }
      }
    })
    .state('tab.login', {
      url: '/login',
      views: {
        'tab-personal': {
          templateUrl: 'templates/tab-login.html',
          controller: 'LoginCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/tab/home');

});
