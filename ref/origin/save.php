<?
   	$image = $_POST['image'];   	
   	$image = str_replace('data:image/png;base64,', '', $image);
   	$decoded = base64_decode($image);
   		
		$im = imagecreatefromstring($decoded);
		$width = imagesx($im);
		$height = imagesy($im);
		
   	$firstN = preg_replace("#\W+#isu","_",$_POST['fileName']);
   	//$name = md5($_POST['fileName'])."_".$width."x".$height;
   	$name = $firstN."_".$width."x".$height;
   	
		$fileName = "layoutPNG/".$name.".png";

      if(file_exists($fileName)){
         unlink($fileName);
      }
      
   	file_put_contents($fileName, $decoded, LOCK_EX);
		$fileName = "http://ezprice.com.tw/bm/googleAD4/layoutPNG/".$name.".png";
		
   	echo $fileName;
   	exit;

?>  