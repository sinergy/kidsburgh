(function() {
  $.ajax({
    //取得序號主機位置
      url: "http://54.92.26.200/kidsburgh/generalsn.php",
      type: "GET",
        complete: function () {
          //called when complete
        },
        success: function (data) {
          var test = $.parseJSON(data);
          $("#sn").html(test.sn);
        },
        error: function () {
          alert("error");
        },
  })
}());

(function() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1497642350474749',
      xfbml      : true,
      version    : 'v2.0'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
}());