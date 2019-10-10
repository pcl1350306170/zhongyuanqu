$(()=>{


})
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
