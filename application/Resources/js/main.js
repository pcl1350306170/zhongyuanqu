$(()=>{

  loadFirstMenu();
  baseElement.init();
})
// 加载一级菜单
function loadFirstMenu() {
  layui.use('laytpl', function () {
    laytpl = layui.laytpl;
    var data = menulist;
    var getTpl = document.getElementById('firstMenu_demo').innerHTML
      , view = document.getElementById('firstMenu_View');
    laytpl(getTpl).render(data, function (html) {
      view.innerHTML = html;
      $("#firstMenu_View").find(".layui-nav-item").eq(0).click();
    });
  });
}
// 点击一级菜单，加载二级菜单
function firstMenuClick(index){
  let menu = menulist[index]['children']
  layui.use('laytpl', function () {
    laytpl = layui.laytpl;
    var data = menu;
    var getTpl = document.getElementById('leftMenu_demo').innerHTML
      , view = document.getElementById('leftMenu_View');
    laytpl(getTpl).render(data, function (html) {
      view.innerHTML = html;
      baseElement.init('upnew');
    });
  });
}
//显示、隐藏左侧菜单
function showOrhideMenu() {
  let w = $(".left-menu").width();

  if(w > 0){
    $(".left-menu").css({
      "width":"0"
    })

    $(".menu-show-hide").css({
      "left":"0"
    })
    $(".main-main .layui-body").css({
      "width":"100%",
      "left":"0"
    })
    $(".menu-show-hide img").attr("src","./Resources/img/menu-show.png");
  }else{
    $(".left-menu").css({
      "width": "12%"
    })
    $(".menu-show-hide").css({
      "left": "12%"
    })
    $(".main-main .layui-body").css({
      "width": "88%",
      "left": "12%"
    })
    $(".menu-show-hide img").attr("src", "./Resources/img/menu-hide.png");
  }
}
