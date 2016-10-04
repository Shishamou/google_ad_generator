<?
if($_POST["upload"]){
	  if($_FILES["pdImg"]["size"] != 0){
	  	$allowedExts = array("gif", "jpeg", "jpg", "png");
			$temp = explode(".", $_FILES["pdImg"]["name"]);
			$extension = end($temp);
			if(in_array($extension, $allowedExts)){	
				$mvfile = "/home/httpd/ezprice/bm/googleAD4/pdImg/".date("YmdHis").".".$extension;
				move_uploaded_file($_FILES["pdImg"]["tmp_name"],  $mvfile);
				$mfile = "../pdImg/".date("YmdHis").".".$extension;
				echo "{";
				echo "sys: 'ok',";
				echo "msg: '".$mfile."'";
				echo "}";
				exit;	
			}	
			echo "{";
			echo "sys: 'no',";
			echo "msg: 'size'";
			echo "}";
			exit;	
		}
		echo "{";
		echo "sys: 'no',";
		echo "msg: 'file'";
		echo "}";
		exit;	
	}

$title1 = trim($_POST["title1"]);
$title2 = trim($_POST["title2"]);
$title3 = trim($_POST["title3"]);
$title4 = trim($_POST["title4"]);
$title5 = trim($_POST["title5"]);
$title6 = trim($_POST["title6"]);
$title7 = trim($_POST["title7"]);
$title8 = trim($_POST["title8"]);
$title9 = trim($_POST["title9"]);
$title10 = trim($_POST["title10"]);
$title11 = trim($_POST["title11"]);
$title12 = trim($_POST["title12"]);
$title13 = trim($_POST["title13"]);
$title14 = trim($_POST["title14"]);
$price1 = number_format(floor($_POST["price1"]));
$price2 = number_format(floor($_POST["price2"]));
$pdImg = trim($_POST["pdImg"]);

if(preg_match('#http#isu',$pdImg)){
  $pdImg_arr = explode("?",$pdImg);
  $pdImg = $pdImg_arr[0];
  unset($pdImg_arr);
  $filetime = date("YmdHis");
  $extension = pathinfo($pdImg, PATHINFO_EXTENSION);
  $command = 'wget '.$pdImg." -O /home/httpd/ezprice/bm/googleAD4/pdImg/".$filetime.".".$extension;
  exec( $command);
  $pdImg = "http://ezprice.com.tw/bm/googleAD4/pdImg/".$filetime.".".$extension;
}

$layout.="<div class='box _a'>
          <p class='title bg_title'>
            {$title1}
          </p>
          <div class='pic'>
            <img alt='{$title1}' src='{$pdImg}'>
          </div>
          <div class='b_price'>
            <p class='sale_price'>
              特價
              <br>
              <span>
                {$price2}
              </span>
            </p>
            <p class='price'>
              原價
              <br>
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_a.png'>
        </div>";
$layout.="<div class='box _b bg_01'>
          <div class='pic'>
            <img alt='{$title2}' src='{$pdImg}'>
          </div>
          <p class='title'>
            {$title2}
          </p>
          <p class='sale_price'>
            特價
            <span>
              {$price2}
            </span>
          </p>
          <img alt='' class='logo' src='../style/images/logo_b.png'>
        </div>";
$layout.="<div class='box _c bg_01'>
          <div class='pic'>
            <img alt='{$title2}' src='{$pdImg}'>
          </div>
          <img alt='' class='logo' src='../style/images/logo_c.png'>
        </div>";
$layout.="<div class='box _d bg_01'>
          <div class='pic'>
            <img alt='{$title3}' src='{$pdImg}'>
          </div>
          <div class='b_price'>
            <p class='title'>
              {$title3}
            </p>
            <p class='sale_price'>
								特價
              <span>
                {$price2}
              </span>
            </p>
            <p class='price'>
              原價
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_d.png'>
        </div>";
$layout.="<div class='box _e bg_02'>
          <div class='pic'>
            <img alt='{$title4}' src='{$pdImg}'>
          </div>
          <div class='b_price'>
            <p class='title'>
              {$title4}
            </p>
            <p class='sale_price'>
              特價
              <span>
                {$price2}
              </span>
            </p>
            <p class='price'>
              原價
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_e.png'>
        </div>";
$layout.="<div class='box _f bg_03'>
					<div class='pic'>
            <img alt='{$title5}' src='{$pdImg}'>
          </div>
          <p class='title'>
            {$title5}
          </p>          
          <div class='b_price'>
            <p class='sale_price'>
              特價
              <br>
              <span>
                {$price2}
              </span>
            </p>
            <p class='price'>
              原價
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_f.png'>
        </div>";
$layout.="<div class='box _g bg_03'>
					<div class='pic'>
            <img alt='{$title6}' src='{$pdImg}'>
          </div>
          <p class='title'>
            {$title6}
          </p>          
          <div class='b_price'>
            <p class='sale_price'>
              特價
              <br>
              <span>
                {$price2}
              </span>
            </p>
            <p class='price'>
              原價
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_g.png'>
        </div>";
$layout.="<div class='box _h bg_03'>
          <div class='pic'>
            <img alt='{$title7}' src='{$pdImg}'>
          </div>
          <p class='title'>
            {$title7}
          </p>          
          <div class='b_price'>
            <p class='sale_price'>
              特價
              <br>
              <span>
                {$price2}
              </span>
            </p>
            <p class='price'>
              原價
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_h.png'>
        </div>";
$layout.="<div class='box _i bg_01'>
          <div class='pic'>
            <img alt='{$title8}' src='{$pdImg}'>
          </div>
          <p class='title'>
            {$title8}
          </p>
          <p class='sale_price'>
            特價
            <span>
              {$price2}
            </span>
          </p>
          <img alt='' class='logo' src='../style/images/logo_i.png'>
        </div>";
$layout .="<div class='box _j bg_02'>
          <div class='pic'>
            <img alt='{$title9}' src='{$pdImg}'>
          </div>
          <div class='b_price'>
            <p class='title'>
              {$title9}
            </p>
            <p class='sale_price'>
              特價
              <span>
               {$price2}
              </span>
            </p>
            <p class='price'>
              原價
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_j.png'>
        </div>";
$layout .="<div class='box _k'>
            <p class='title bg_title'>
              {$title10}
            </p>
          <div class='pic'>
            <img alt='{$title10}' src='{$pdImg}'>
          </div>
          <div class='b_price'>
            
            <p class='sale_price'>
              特價<br>
              <span>
               {$price2}
              </span>
            </p>
            <p class='price'>
              原價<br>
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_k.png'>
        </div>";
$layout .="<div class='box _l'>
            <p class='title bg_title'>
              {$title11}
            </p>
          <div class='pic'>
            <img alt='{$title11}' src='{$pdImg}'>
          </div>
          <div class='b_price'>
            
            <p class='sale_price'>
              特價<br>
              <span>
               {$price2}
              </span>
            </p>
            <p class='price'>
              原價<br>
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_l.png'>
        </div>";
$layout .="<div class='box _m'>
          <p class='title bg_title'>
              {$title12}
            </p>
          <div class='pic'>
            <img alt='{$title12}' src='{$pdImg}'>
          </div>
          <div class='b_price'>
            <p class='sale_price'>
              特價<br>
              <span>
               {$price2}
              </span>
            </p>
            <p class='price'>
              原價<br>
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='logo' src='../style/images/logo_m.png'>
        </div>";
$layout .="<div class='box _n bg_03'>
            <img alt='' class='logo' src='../style/images/logo_n.png'>
          <div class='pic'>
            <img alt='{$title13}' src='{$pdImg}'>
          </div>
          <p class='title'>
              {$title13}
            </p>
          <div class='b_price'>
            <p class='sale_price'>
              特價<br>
              <span>
               {$price2}
              </span>
            </p>
            <p class='price'>
              原價
              <span>
                {$price1}
              </span>
            </p>
          </div>
          
        </div>";
$layout .="<div class='box _o bg_04'>
            <img alt='' class='logo' src='../style/images/logo_o.png'>
          <div class='pic'>
            <img alt='{$title14}' src='{$pdImg}'>
          </div>
          <p class='title'>
              {$title14}
            </p>
          <div class='b_price'>
            <p class='sale_price'>
              特價<br>
              <span>
               {$price2}
              </span>
            </p>
            <p class='price'>
              原價
              <span>
                {$price1}
              </span>
            </p>
          </div>
          <img alt='' class='img_cart' src='../style/images/img_cart.png'>
        </div>";
$filename =  uniqid();
$html=<<<EOF
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
    <title>GoogleAD4</title>
    <meta content='' name='description'>
    <meta content='' name='keywords'>
    <link href='../style/_css/all.css' rel='stylesheet' type='text/css'>
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.js "></script>
		<script src="http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.0.0.js "></script>
		<script src="html2canvas.js"></script>
	  <script>
	  $(window).load(function(){  	
				$("div.box").each(function(){
			    html2canvas($(this), {
			    	useCORS: true,
			    	//logging: true,
			    	//proxy:"http://ezprice.com.tw/bm/googleAD4/layout/html2canvasproxy.php",
			      onrendered: function(canvas) {   
			      	var img = canvas.toDataURL("image/png");
	            var output = encodeURIComponent(img);
	            var Parameters = "image=" + output + "&fileName={$filename}";
	            $.ajax({
	                type: "POST",
	                url: "http://ezprice.com.tw/bm/googleAD4/save.php",
	                data: Parameters,
	                success : function(result)
	                {
	                	//$("<option></option>").appendTo($(".layoutImage")).text(result);
	                	//$("img").attr("src",result);
		    						//$("a").attr("href",result).attr("download",result.split("/")[6]);
		    						//$("<a></a>").appendTo($(".layoutAll")).attr("href",result).attr("download",result.split("/")[6]).attr("id",result.split("/")[6].split(".")[0].split("_")[1]).append("<img src="+result+">").get(0).click();
		    						$("<a></a>").appendTo($(".layoutBox._png")).attr("href", result).attr("download","{$title1}"+result.split("_")[1].replace(".png","")).append("<img src="+result+">");
            
	                  $("#300x250").addClass("box _a");
	                  $("#320x100").addClass("box _b bg_01");
	                  $("#320x50").addClass("box _c bg_01");
	                  $("#728x90").addClass("box _d bg_01");
	                  $("#970x90").addClass("box _e bg_02");
	                  $("#120x600").addClass("box _f bg_03");
	                  $("#160x600").addClass("box _g bg_03");
                    $("#240x400").addClass("box _h bg_03");
                    $("#468x60").addClass("box _i bg_01");
                    $("#970x250").addClass("box _j bg_02");
                    $("#336x280").addClass("box _k");
                    $("#250x250").addClass("box _l");
                    $("#200x200").addClass("box _m");
                    $("#300x600").addClass("box _n bg_03");
                    $("#300x1050").addClass("box _n bg_04");
	                }
	            }).done(function() {
	            	console.log("upload done");
	            	$(".layoutBox._html").css("display","none");
	            });        
			      }
			    });
		    });
	    $(".layoutImage").change(function(){
	    	
	    	//$("img").attr("src",$("option:selected").text());
	    	//$("a").attr("href",$("option:selected").text()).attr("download",$("option:selected").text().split("/")[6]);
	    	//$("h1").text($("option:selected").text());
	    });
	    $('#download').click(function(e) {
        setTimeout(function(){ 
  		    $(".layoutBox a img").each(function(){
  		        download(this,$(this).parent("a").attr("download"));
  		        
  		    });
        }, 1000);
			});	    
	  });
	  /* Download an img */
		function download(img,filename) {
		    var link = document.createElement("a");
		    link.href = img.src;
		    link.download = filename;
		    link.style.display = "none";
		    var evt = new MouseEvent("click", {
		        "view": window,
		        "bubbles": true,
		        "cancelable": true
		    });
		
		    document.body.appendChild(link);
		    link.dispatchEvent(evt);
		    document.body.removeChild(link);
		    console.log(link.href);
        /*
		    $.post("unlink.php",{url:link.href},function(result){
		        	//unlink file	
		    });
        */
		}
	  </script>
  </head>
<body>
  <div class='BD'>
    <div class='wrap'>
    	<div class='layoutBox _png'>
      </div>
      <div class='layoutBox _html'>
      	{$layout}
      </div>
      <span class='btn_download' id="download"><a href='#'>
          下載檔案
        </a></span>
    </div>
  </div>
</body>
</html>
EOF;


$date = date("YmdHis");
$alltitle = md5($title1);
$fp = fopen("layout/googleAD_".$alltitle."_".$date.".html","w");
fputs($fp,$html);
fclose($fp);

echo "layout/googleAD_".$alltitle."_".$date.".html";
exit;
?>