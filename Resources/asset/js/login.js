$(function(){
  // 验证码
  $("#loginkeyVal").blur(function () {
    let v = $(this).val();
    $(".varify-input-code").val(v);
  })
  $('#loginKeydom').codeVerify({
    type: 1,
    width: '',
    height: '40px',
    fontSize: '28px',
    codeLength: 4,
    btnId: 'loginBtn',
    ready: function () {
    },
    success: function () {
      ckeckLogin();
    },
    error: function () {
      alert('验证码不匹配！');
      $("#loginkeyVal").val('');
      $("#loginkeyVal").focus();
    }
  });
})
function ckeckLogin(){
  let username = $("#username").val();
  let password = $("#password").val();
  if(username == '' || password==''){
    alert("用户名或密码不能为空！");
    return;
  }
  $.ajax({
    type: "POST",
    url: "./php/login.php",
    data: {
      act: "login",
      username: username,
      password: password
    },
    success: function (data) {
      if(data=='yes'){
        window.location = 'navigationPage.html'
      }
    },
    error: function (data) {

    }
  });
}
