angular.module('starter.services', [])
//轮播图
  .factory('$lunbopic', function() {
    var lunbopics = [{
      "id" : 0,
      "imgsrc" : "slideimage01.png"
    },
      {
        "id" : 1,
        "imgsrc" : "slideimage02.png"
      },
      {
        "id" : 2,
        "imgsrc" : "slideimage03.png"
      }
    ]

    return {
      all: function() {
        return lunbopics;
      }
    }
  })


  //好评榜
  .factory("$HomeGoodlistRow", function () {
    var homeGoodlistRows =
      [
        [
          {
            "id": 0, "title": "javaScript 课程", "main": "good,good,非常棒！","imgsrc":"shouye_02.png"
          },
          {
            "id": 1, "title": "UI/UE", "main": "UI,非常棒！","imgsrc":"shouye_02.png"
          }
        ],
        [
          {
            "id":2,"title":"HTML5+CSS3", "main":"bangbangda,非常棒！","imgsrc":"shouye_02.png"
          },
          {
            "id": 3, "title":"jQuery", "main":"wuli jQuery,非常棒！","imgsrc":"shouye_02.png"
          }
        ]
      ]
    return {
      all: function () {
        return homeGoodlistRows;
      }
    };

  })

  //最新课程
  .factory("$HomeNewLists", function () {
    var homeNewListRow = [
      [{"id": 0, "title": "javaScript 课程", "main": "good,good,非常棒！", "imgsrc": "shouye_03.png"},
        {"id": 1, "title": "UI/UE", "main": "UI,非常棒！", "imgsrc": "shouye_03.png"}],
      [{"id": 2, "title": "HTML5+CSS3", "main": "bangbangda,非常棒！", "imgsrc": "shouye_03.png"},
        {"id": 3, "title": "jQuery", "main": "wuli jQuery,非常棒！", "imgsrc": "shouye_03.png"}]
    ];
    return {
      all: function () {
        return homeNewListRow;
      }
    };
  })
  //猜你喜欢
  .factory("$YouLikeLists", function () {
    var homeYouLikeRow = [
      {"id": 0, "title": "前端教程", "main": "这是一套前端教程，非常好，非常好！", "imgsrc": "shouye_03.png"},
      {"id": 1, "title": "android课程", "main": "android课程的课程描述", "imgsrc": "shouye_03.png"},
      {"id": 2, "title": "css测试", "main": "这是一个css课程", "imgsrc": "shouye_03.png"},
      {"id": 3, "title": "jQuery", "main": "wuli jQuery,非常棒！", "imgsrc": "shouye_03.png"}
    ];
    return {
      all: function () {
        return homeYouLikeRow;
      }
    };
  })
  //课程列表
  .factory('$courseLists',function() {
    var chats = [{
      id: 0,
      titleEn: '0Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 1,
      titleEn: '1Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 2,
      titleEn: '2Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 3,
      titleEn: '3Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 4,
      titleEn: '4Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 5,
      titleEn: '5Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 6,
      titleEn: '6Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 7,
      titleEn: '7Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 8,
      titleEn: '8Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 9,
      titleEn: '9Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 10,
      titleEn: '10Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 11,
      titleEn: '11Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 12,
      titleEn: '12Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 13,
      titleEn: '13Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 14,
      titleEn: '14Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '16Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    }
    ];
    return {
      all:function(){
        return chats;
      },
      page:function (num) {
        return chats.splice(num*5-5,num*5);
      },
      courseSerch:function (searchText) {
        return chats.splice(4,5);
      }
    }
  })
  // 我的课程
  .factory("$courseFirst",function() {
    var itemFir = [
      {
        id: 1,
        imgsrc:"img/ben.png",
        title: "我的课程标题 1",
        num: "3 节",
        nums: "15 节"
      },
      {
        id: 2,
        imgsrc:"img/ben.png",
        title: "我的课程标题 2",
        num: "3 节",
        nums: "15 节"
      },
      {
        id: 3,
        imgsrc:"img/ben.png",
        title: "我的课程标题 3",
        num: "3 节",
        nums: "15 节"
      },
      {
        id: 4,
        imgsrc:"img/ben.png",
        title: "我的课程标题 4",
        num: "3 节",
        nums: "15 节"
      },
      {
        id: 5,
        imgsrc:"img/ben.png",
        title: "我的课程标题 5",
        num: "3 节",
        nums: "15 节"
      }
    ];
    return {
      all:function(){
        return itemFir;
      }
    };
  })
  // 收藏课程
  .factory("$courseSecond",function() {
    var itemFir = [
      {
        id: 0,
        imgsrc:"img/ben.png",
        title: "收藏课程标题 1",
        num: "3 节",
        nums: "15 节"
      },
      {
        id: 1,
        imgsrc:"img/ben.png",
        title: "收藏课程标题 2",
        num: "3 节",
        nums: "15 节"
      },
      {
        id: 2,
        imgsrc:"img/ben.png",
        title: "收藏课程标题 3",
        num: "3 节",
        nums: "15 节"
      },
      {
        id: 3,
        imgsrc:"img/ben.png",
        title: "收藏课程标题 4",
        num: "3 节",
        nums: "15 节"
      },
      {
        id: 4,
        imgsrc:"img/ben.png",
        title: "收藏课程标题 5",
        num: "3 节",
        nums: "15 节"
      },

      {
        id: 5,
        imgsrc:"img/ben.png",
        title: "收藏课程标题 6",
        num: "3 节",
        nums: "15 节"
      }
    ];
    return {
      all:function(){
        return itemFir;
      }
    };
  })
  //学习页面目录数据
  .factory('$studyList',function() {
    var studymulu = [{
      title:"1-1photoshop 修图效果效果制作",
      time:"15 分钟"
    },
      {
        title:"1-2photoshop 修图效果效果制作",
        time:"15 分钟"
      },
      {
        title:"1-2photoshop 修图效果效果制作",
        time:"15 分钟"
      },
      {
        title:"1-2photoshop 修图效果效果制作",
        time:"15 分钟"
      },
      {
        title:"1-2photoshop 修图效果效果制作",
        time:"15 分钟"
      } ,
      {
        title:"1-2photoshop 修图效果效果制作",
        time:"15 分钟"
      }]
    return{
      all:function(){
        return studymulu;
      }
    }
  })

  //评价详情
  .factory('$pingjiaList', function () {
    var assesslist = [{
      pic: "img/study_tx.jpg",
      name: "李晓丽",
      title: "刚刚",
      cont: "多谢大神指点",
    },
      {
        pic: "img/study_tx.jpg",
        name: "李晓丽",
        title: "5 分钟前",
        cont: "多谢大神指点",
      },
      {
        pic: "img/study_tx.jpg",
        name: "李晓丽",
        title: "8 分钟前",
        cont: "多谢大神指点",
      },
      {
        pic: "img/study_tx.jpg",
        name: "李晓丽",
        title: "10 分钟前",
        cont: "多谢大神指点",
      }]
    return {
      all: function () {
        return assesslist
      }
    }
  })
