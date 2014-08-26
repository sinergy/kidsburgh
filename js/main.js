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