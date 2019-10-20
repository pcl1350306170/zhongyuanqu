var left_h1 = '',
  left_h2 = '',
  left_h3 = '';
$(function(){
  left_h1 = $(".map-left .left-1 .left-content").height();
  left_h2 = $(".map-left .left-2 .left-content").height();
  left_h3 = $(".map-left .left-3 .left-content").height();

  dealNiceScroll()
  createRightlaypage() // 创建右侧分页

  createRightTable() // 创建右侧表格
})

function dealNiceScroll() {
  $('.map-left').niceScroll({
    cursorcolor: "#ccc",//#CC0071 光标颜色
    cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
    cursorwidth: "1px", //像素光标的宽度
    cursorborder: "0", //     游标边框css定义
    cursorborderradius: "5px",//以像素为光标边界半径
    autohidemode: false, //是否隐藏滚动条
    overflowx: false
  });
}
// // 创建右侧表格
function createRightTable(){
  layui.use('laytpl', function () {
    laytpl = layui.laytpl;
    var data = tableList;
    var getTpl = document.getElementById('rightTable_demo').innerHTML
      , view = document.getElementById('rightTable_View');
    laytpl(getTpl).render(data, function (html) {
      view.innerHTML = html;
    });
  });
}
function createRightlaypage(){
  layui.use('laypage', function () {
    var laypage = layui.laypage;

    //执行一个laypage实例
    laypage.render({
      elem: 'rightTablelaypage'
      , count: 100
      , groups: 4
      , prev: '<i class="iconfont icon-zuo"></i>'
      , next: '<i class="iconfont icon-you"></i>'
    });

  });
}

//显示、隐藏左侧菜单
function showOrhideMenu() {
  let w = $(".map-left").width();

  if (w > 0) {
    $(".map-left").css({
      "width": "0"
    })

    $(".map-left .menu-show-hide").css({
      "left": "0"
    })
    $(".main-main .layui-body").css({
      "width": "100%",
      "left": "0"
    })
    $(".map-left .menu-show-hide img").attr("src", "../Resources/img/menu-show.png");
  } else {
    $(".map-left").css({
      "width": "14%"
    })
    $(".map-left .menu-show-hide").css({
      "left": "14%"
    })
    $(".main-main .layui-body").css({
      "width": "88%",
      "left": "14%"
    })
    $(".map-left .menu-show-hide img").attr("src", "../Resources/img/menu-hide.png");
  }
}
function showOrhideRightTable(){
  let w = $(".map-right").width();

  if (w > 0) {
    $(".map-right").css({
      "width": "0"
    })

    $(".map-right .menu-show-hide").css({
      "right": "0"
    })

    $(".map-right .menu-show-hide img").attr("src", "../Resources/img/menu-hide.png");
  } else {
    $(".map-right").css({
      "width": "14%"
    })
    $(".map-right .menu-show-hide").css({
      "right": "14%"
    })

    $(".map-right .menu-show-hide img").attr("src", "../Resources/img/menu-show.png");
  }
}
function showORhide_left1(obj){
  let h = $(".map-left .left-1 .left-content").height()
  if(h === 0){
    $(".map-left .left-1 .left-content").css({
      "height": left_h1
    })
    $(".map-left .left-1 .left-content .left-input").show(1000)
    $(obj).attr('src','./Resources/image/up.png');
  }else{
    $(".map-left .left-1 .left-content").css({
      "height": 0
    })
    $(".map-left .left-1 .left-content .left-input").hide(1000)
    $(obj).attr('src', './Resources/image/down.png');
  }
}
function showORhide_left2(obj){
  let h = $(".map-left .left-2 .left-content").height()
  if (h === 0) {
    $(".map-left .left-2 .left-content").css({
      "height": left_h2
    })
    $(".map-left .left-2 .left-content .all-dom").show(1000)
    $(obj).attr('src', './Resources/image/up.png');
  } else {
    $(".map-left .left-2 .left-content").css({
      "height": 0
    })
    $(".map-left .left-2 .left-content .all-dom").hide(1000)
    $(obj).attr('src', './Resources/image/down.png');
  }
}

function showORhide_left3(obj) {
  let h = $(".map-left .left-3 .left-content").height()
  if (h === 0) {
    $(".map-left .left-3 .left-content").css({
      "height": left_h3
    })
    $(".map-left .left-3 .left-content ul").show(1000)
    $(obj).attr('src', './Resources/image/up.png');
  } else {
    $(".map-left .left-3 .left-content").css({
      "height": 0
    })
    $(".map-left .left-3 .left-content ul").hide(1000)
    $(obj).attr('src', './Resources/image/down.png');
  }
}
