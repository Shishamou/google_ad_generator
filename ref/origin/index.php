<?
$image = trim(urldecode($_GET["i"]));
$pname = trim(urldecode($_GET["n"]));
$lowprice = trim($_GET["lp"]);
$highprice = trim($_GET["hp"]);

$html=<<<EOF
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
    <title>GoogleAD</title>
    <meta content='' name='description'>
    <meta content='' name='keywords'>
    <link href='style/_css/all.css' rel='stylesheet' type='text/css'>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
		<script src="style/js/ajaxfileupload.js"></script>
    <script>
    	$(document).ready(function(){
    		$("#change").click(function(){
    			$("#if").toggle();
    			$("#submit1").toggle();
    			$("#iu").toggle();
    			$("#submit2").toggle();
    		});
    		$("#submit1").click(function(){
    			$.ajaxFileUpload
					(
						{
							url:'layout.php',
							secureuri:false,
							fileElementId:'pdImg',
							dataType: 'json',
							data:{upload:'pdImg'},
							success: function (data, status)
							{
								$.post("layout.php",{	title1:$("#title1").val(),
																title2:$("#title2").val(),
																title3:$("#title3").val(),
																title4:$("#title4").val(),
																title5:$("#title5").val(),
																title6:$("#title6").val(),
                                title7:$("#title7").val(),
                                title8:$("#title8").val(),
                                title9:$("#title9").val(),
                                title10:$("#title10").val(),
                                title11:$("#title11").val(),
                                title12:$("#title12").val(),
                                title13:$("#title13").val(),
                                title14:$("#title14").val(),
																price1:$("#price1").val(),
																price2:$("#price2").val(),
																pdImg: data.msg
															},function(result){
																if(result){
																	window.open(result, 'new',config='height=910,width=1000,scroll=no');
																}else{
																	alert("上傳失敗!");
																}
															});
							},
							error: function (data, status, e)
							{
								console.log(e);
								alert("圖片上傳失敗!");
								return false;
							}
						}
					)	
					
    		});
    		$("#submit2").click(function(){
          var postData = {  title1:$("#title1").val(),
                                title2:$("#title2").val(),
                                title3:$("#title3").val(),
                                title4:$("#title4").val(),
                                title5:$("#title5").val(),
                                title6:$("#title6").val(),
                                title7:$("#title7").val(),
                                title8:$("#title8").val(),
                                title9:$("#title9").val(),
                                title10:$("#title10").val(),
                                title11:$("#title11").val(),
                                title12:$("#title12").val(),
                                title13:$("#title13").val(),
                                title14:$("#title14").val(),
                                price1:$("#price1").val(),
                                price2:$("#price2").val(),
                                pdImg: $("#imgUrl").val()
                              };
          console.log(postData);
    			$.post("layout.php",postData,function(result){
																if(result){
																	window.open(result, 'new',config='height=910,width=1000,scroll=no');
                                  //location.reload();
																}else{
																	alert("上傳失敗!");
																}
															});	
    		});
        $("#same_title").click(function(){
          var title = $("#title1").val();
          $("input[type='text']:not(#imgUrl)").val(title);
        });
    	});    		
    </script>
  </head>
</html>
<body>
  <div class='BD'>
    <div class='intBox'>
      <p class='btnBox'>
      <span class='btn_view'><a href='#' id="same_title">標題同一</a></span>
      <span class='btn_view'><a href='#' id="submit1" style="display:none;">送出預覽</a><a href='#' id="submit2">
          送出預覽
        </a></span>
      </p>
      <table>
      	<input style="float:right;" type="button" id="change" value="上傳圖檔orURL">
        <tr style='text-align:right;display:none;' id="if">
          <th>
            上傳商品圖片
          </th>
          <td>
            <input type='file' id="pdImg" name='pdImg'>
          </td>
        </tr>
        <tr style='text-align:right;' id="iu">
          <th>
            上傳商品圖片url
          </th>
          <td>
            <input type='text' id="imgUrl" name='imgUrl' value="{$image}">
          </td>
        </tr>
        <tr>
          <th>
            a.標題 300x250
          </th>
          <td>
            <input type='text' id="title1" name='title1' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            b.標題 320x100
          </th>
          <td>
            <input type='text' id="title2" name='title2' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            c.標題 320x50
          </th>
          <td style='color:#9e9e9e'>
            版型限制無標題
          </td>
        </tr>
        <tr>
          <th>
            d.標題 728x90
          </th>
          <td>
            <input type='text' id="title3" name='title3' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            e.標題 970x90
          </th>
          <td>
            <input type='text' id="title4" name='title4' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            f.標題 120x600
          </th>
          <td>
            <input type='text' id="title5" name='title5' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            g.標題 160x600
          </th>
          <td>
            <input type='text' id="title6" name='title6' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            h.標題 240x400
          </th>
          <td>
            <input type='text' id="title7" name='title7' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            i.標題 468x60
          </th>
          <td>
            <input type='text' id="title8" name='title8' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            j.標題 970x250
          </th>
          <td>
            <input type='text' id="title9" name='title9' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            k.標題 336x280
          </th>
          <td>
            <input type='text' id="title10" name='title10' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            l.標題 250x250
          </th>
          <td>
            <input type='text' id="title11" name='title11' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            m.標題 200x200
          </th>
          <td>
            <input type='text' id="title12" name='title12' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            n.標題 300x600
          </th>
          <td>
            <input type='text' id="title13" name='title13' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th>
            o.標題 300x1050
          </th>
          <td>
            <input type='text' id="title14" name='title14' value="{$pname}">
          </td>
        </tr>
        <tr>
          <th style='text-align:right'>
            原價
          </th>
          <td>
            NT.
            <input style='width:30%' type='number' id="price1" name='price1' value="{$highprice}">
          </td>
        </tr>
        <tr>
          <th style='text-align:right'>
            特價
          </th>
          <td>
            NT.
            <input style='width:30%' type='number' id="price2" name='price2' value="{$lowprice}">
          </td>
        </tr>
      </table>
    </div>
    
  </div>
</body>
EOF;
echo $html;
?>