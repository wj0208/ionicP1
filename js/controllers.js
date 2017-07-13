var isLogin = false;
angular.module('starter.controllers', [])
//主页
.controller('HomeCtrl', function($scope,$lunbopic,$HomeGoodlistRow,$HomeNewLists,$YouLikeLists) {
    $scope.lunbodata = $lunbopic.all();
    $scope.haopingdata = $HomeGoodlistRow.all();
    $scope.projectdata = $HomeNewLists.all();
    $scope.youlikedata = $YouLikeLists.all();
})
  //课程列表页
.controller('CourselistCtrl', function($scope,$courseLists) {
  $scope.courseListBtns=[
    {id:0, btnName:"全部"},
    {id:1, btnName:"UI"},
    {id:2, btnName:"JAVA"},
    {id:3, btnName:"Android"},
    {id:4, btnName:"IOS"},
    {id:5, btnName:"其它"}
  ]
  $scope.priceBtns=[
    {id:0, btnName:"全部"},
    {id:1, btnName:"免费"},
    {id:2, btnName:"收费"}
  ]
  $scope.showMore=true;
  $scope.courselistdata = $courseLists.page(1);
  $scope.loadMore = function () {
    var pagedata = $courseLists.page(1);
    if(pagedata.length==0){
      $scope.showMore=false;
    }
    $scope.courselistdata = $scope.courselistdata.concat(pagedata);
    $scope.$broadcast("scroll.infiniteScrollComplete");
  }
  $scope.lilist = false;
  $scope.lcolor = {color:"#333"};
  $scope.courselist = function () {
    $scope.lilist = !$scope.lilist;
    $scope.prlist= false;
    $scope.pcolor = {color:"#333"};
    if($scope.lilist==true){
      $scope.lcolor={color:"#63aafc"};
    }else{
      $scope.lcolor={color:"#333"}
    }
  }
  $scope.price = function () {
    $scope.prlist= !$scope.prlist;
    $scope.lilist = false;
    $scope.lcolor={color:"#333"};
    if($scope.prlist==true){
      $scope.pcolor={color:"#63aafc"};
    }else{
      $scope.pcolor={color:"#333"};
    }
  }
  //课程列表筛选事件
  $scope.courseSerch = function(searchText){
    $scope.courselistdata = $courseLists.courseSerch(searchText);
    $scope.lilist = false;
  }
  //价格筛选事件
  $scope.priceSearch = function(searchText){
    $scope.courselistdata = $courseLists.courseSerch(searchText);
    $scope.prlist = false;
  }
})

  //我的课程页
.controller('MycourseCtrl', function($scope,$courseFirst,$courseSecond) {
  $scope.myCoursedata = $courseFirst.all();
  $scope.onItemDelete = function(item) {
    $scope.myCoursedata.splice($scope.myCoursedata.indexOf(item), 1);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  $scope.cData = {
    showDelete: false
  };
  $scope.lcolor={color:"#63aafc"};
  $scope.pcolor = {color:"#333"};
  $scope.mycourselist = function () {
    $scope.pcolor = {color:"#333"};
    $scope.lcolor={color:"#63aafc"};
    $scope.myCoursedata = $courseFirst.all();
  }
  $scope.collectcourselist = function () {
    $scope.lcolor={color:"#333"};
    $scope.pcolor={color:"#63aafc"};
    $scope.myCoursedata = $courseSecond.all();
  }
})

  //个人中心页
.controller('PersonalCtrl', function($scope,$http) {
  $http.get("JSON/JSON.txt").success(function (response) {
    $scope.name=response.records[1].name;
    $scope.email=response.records[1].email;
    $scope.phone=response.records[1].phone;
  });
  $scope.quit =function () {
    window.location="#/tab/personal"
  }
})

  //注册页
.controller('RegisterCtrl', function($scope,$ionicPopup) {
  $scope.infor={
    name:'',
    email:'',
    phone:'',
    password:'',
    passwordt:''
  };
  $scope.register = function (infor) {
    var email_yz=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9{2,4}])+$/;
    var phone_yz =/^1\d{10}$/;
    if(!!infor.name&& !! infor.email && !! infor.phone && !! infor.password && !! infor.passwordt){
      if(!email_yz.test(infor.email)){
        $ionicPopup.alert({
          title:'提示信息！',
          template:'邮箱格式不正确，请重新输入'
        })
      }else if(phone_yz.test(infor.phone)){
        $ionicPopup.alert({
          title:'提示信息！',
          template:'请输入正确的手机号码'
        })
      }else if(infor.password != infor.passwordt){
        $ionicPopup.alert({
          title:'提示信息！',
          template:'两次密码不相同，请重新输入'
        })
      }else{
        window.location="#/tab/login"
      }
    }else {
      $ionicPopup.alert({
        title:'提示信息！',
        template:'请输入内容'
      })
    }
  }
})

  //登录页
.controller('LoginCtrl', function($scope,$ionicPopup) {
  $scope.loginuser = {
    name:'',
    password:''
  };
  $scope.doLogin= function () {
    console.log($scope.loginuser.name);
    if($scope.loginuser.name=='123' && $scope.loginuser.password=='123456'){
      window.location="#/tab/personal"
      isLogin = true;
    }else {
      $ionicPopup.alert({
        title:'提示信息！',
        template:'账号或密码有误，请重新输入',
        okText:'确定'
      })
    }
  }
})

  //学习主页
.controller('LearnHomeCtrl', function($scope,$studyList,$ionicModal,$pingjiaList) {
  $scope.lcolor={color:"#63aafc"};
  $scope.pcolor = {color:"#333"};
  $scope.buy = "购买";
  $scope.collect = "收藏";
  $scope.isCollect = false;
  $scope.isLogin = isLogin;
  $scope.studymenudata = $studyList.all();
  $scope.menu_detail_switch = true;
  $scope.menu = function () {
    $scope.pcolor = {color:"#333"};
    $scope.lcolor={color:"#63aafc"};
    $scope.studymenudata = $studyList.all();
    $scope.menu_detail_switch = true;
  }
  $scope.detail = function () {
    $scope.lcolor={color:"#333"};
    $scope.pcolor={color:"#63aafc"};
    $scope.pingjiadata = $pingjiaList.all();
    $scope.menu_detail_switch = false;
  }
  $scope.buyThis = function () {
    $scope.buy = "已购买";
    $scope.bcolor={color:"#63aafc"};
  }
  $scope.collectThis = function () {
    if($scope.isCollect==false){
      $scope.collect = "已收藏";
      $scope.ccolor={color:"#63aafc"};
      $scope.isCollect = true;
    }else{
      $scope.collect = "收藏";
      $scope.ccolor={color:"#333"};
      $scope.isCollect = false;
    }
  }
  $scope.showModal =function () {
    $ionicModal.fromTemplateUrl('modal.html',{scope:$scope}).then(function (modal) {
      $scope.modal=modal;
      $scope.modal.show();
    })
  }

})
  //隐藏底部tabs
.directive('hideTabs', function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      scope.$on('$ionicView.beforeEnter', function() {
        $rootScope.hideTabs=attributes.hideTabs;
      });

      scope.$on('$ionicView.beforeLeave', function() {
        $rootScope.hideTabs = false;
      });
    }
  };
})


