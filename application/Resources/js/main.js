var isfirstOpenmenu = true; // 是否是第一次点击一级菜单
$(()=>{

  loadFirstMenu();
  baseElement.init();

  refreshAction();
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
function firstMenuClick(index,obj){
  $(".firstment-active").removeClass("firstment-active");
  $(obj).addClass('firstment-active');

  let menu = menulist[index]['children']
  layui.use('laytpl', function () {
    laytpl = layui.laytpl;
    var data = menu;
    var getTpl = document.getElementById('leftMenu_demo').innerHTML
      , view = document.getElementById('leftMenu_View');
    laytpl(getTpl).render(data, function (html) {
      view.innerHTML = html;
      baseElement.init('upnew');
      if(isfirstOpenmenu){
        setTimeout(function () {
          $("#leftMenu_View").find(".layui-nav-item").eq(0).click();
        }, 500)
        isfirstOpenmenu = false;
      }
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

function showOrhideAction() {
  $(".layui-nav-item-iframeAction-actiion").toggle(120);
}
function refreshAction(){
  $(".layui-nav-item-iframeAction-actiion").find("li").click(function(){
    let a = $(this).attr("data-target");
    switch (a) {
      case "refresh":
        $(".layui-tab-title").find(".layui-this").each(function(){
          let t = $(this).attr('lay-id');
          let src = $(".layui-tab-content").find(".layui-tab-item").eq(t).find(".s-iframe").attr("src");
          $(".layui-tab-content").find(".layui-tab-item").eq(t).find(".s-iframe").attr("src",src);
        })
        let src = $(".layui-tab-content").find(".layui-tab-item").eq(0).find(".s-iframe").attr("src");
        $(".layui-tab-content").find(".layui-tab-item").eq(0).find(".s-iframe").attr("src", src);
        break;
      case "closeCurrent":

        break;
      case "closeOther":
        $(".layui-tab-title").find("li").each(function () {
          let t = $(this).hasClass('layui-this');
          if(!t){
            $(this).find(".layui-tab-close").click();
          }
          console.log(t);
        })
        break;
      case "closeAll":
        $(".layui-tab-title").find("li").each(function () {
          $(this).find(".layui-tab-close").click();
        })
        break;
    }
    $(".layui-nav-item-iframeAction-actiion").hide(120);
  })
}
