$(document).ready(function() {
  $("#change").click(function() {
    $("#if").toggle();
    $("#submit1").toggle();
    $("#iu").toggle();
    $("#submit2").toggle();
  });
  $("#submit1").click(function() {
    $.ajaxFileUpload({
      url: 'layout.php',
      secureuri: false,
      fileElementId: 'pdImg',
      dataType: 'json',
      data: {
        upload: 'pdImg'
      },
      success: function(data, status) {
        $.post("layout.php", {
          title1: $("#title1").val(),
          title2: $("#title2").val(),
          title3: $("#title3").val(),
          title4: $("#title4").val(),
          title5: $("#title5").val(),
          title6: $("#title6").val(),
          title7: $("#title7").val(),
          title8: $("#title8").val(),
          title9: $("#title9").val(),
          title10: $("#title10").val(),
          title11: $("#title11").val(),
          title12: $("#title12").val(),
          title13: $("#title13").val(),
          title14: $("#title14").val(),
          price1: $("#price1").val(),
          price2: $("#price2").val(),
          pdImg: data.msg
        },
        function(result) {
          if (result) {
            window.open(result, 'new', config = 'height=910,width=1000,scroll=no');
          } else {
            alert("上傳失敗!");
          }
        });
      },
      error: function(data, status, e) {
        console.log(e);
        alert("圖片上傳失敗!");
        return false;
      }
    })

  });
  $("#submit2").click(function() {
    var postData = {
      title1: $("#title1").val(),
      title2: $("#title2").val(),
      title3: $("#title3").val(),
      title4: $("#title4").val(),
      title5: $("#title5").val(),
      title6: $("#title6").val(),
      title7: $("#title7").val(),
      title8: $("#title8").val(),
      title9: $("#title9").val(),
      title10: $("#title10").val(),
      title11: $("#title11").val(),
      title12: $("#title12").val(),
      title13: $("#title13").val(),
      title14: $("#title14").val(),
      price1: $("#price1").val(),
      price2: $("#price2").val(),
      pdImg: $("#imgUrl").val()
    };
    console.log(postData);
    $.post("layout.php", postData,
    function(result) {
      if (result) {
        window.open(result, 'new', config = 'height=910,width=1000,scroll=no');
        //location.reload();
      } else {
        alert("上傳失敗!");
      }
    });
  });
  $("#same_title").click(function() {
    var title = $("#title1").val();
    $("input[type='text']:not(#imgUrl)").val(title);
  });
});
