/**
 *	縮小並產生DataUrl
 *	@author Shisha
 *	@date 2014-03-26
 */

module.exports = function makeDataURL(src, inside_w, inside_h, quality) {

	// 指定最大尺寸
	inside_w || (inside_w = 800);
	inside_h || (inside_h = 800);

	// 指定壓縮品質
	quality || (quality = 1);

	// 產生圖片
	var img			= document.createElement("img");
		img.src		= src;

	// 初始化繪圖區
	var canvas		= document.createElement("canvas");
	var ctx			= canvas.getContext("2d");

	// 取得原始大小
	var source_w	= img.width;
	var source_h	= img.height;

	// 初始化目標大小
	var dest_w		= 0;
	var dest_h		= 0;

	// 初始化縮放倍率
	var scale_w		= 1;
	var scale_h		= 1;
	var scale		= 1;


	// 若都在範圍內
	if ( source_w < inside_w && source_h < inside_h ) {

		// 不須計算縮放倍率
		dest_w	= source_w;
		dest_h	= source_h;

	} else {

		// 計算縮放倍率
		scale_w	= inside_w / source_w;
		scale_h	= inside_h / source_h;

		// 越小代表圖要縮得越小
		scale = ( scale_w < scale_h )? scale_w : scale_h;

		// 計算縮小後長寬
		dest_w	= Math.round( source_w * scale );
		dest_h	= Math.round( source_h * scale );

	} // end if-else


	console.log("圖片資訊: 寬%d, 高%d", source_w, source_h);
	console.log("縮放資訊: 縮放寬%s, 縮放高%s", scale_w, scale_h);
	console.log("縮放計算結果: 寬%d, 高%d, 縮放%s", dest_w, dest_h, scale);

	// 設定繪圖區尺寸
	canvas.width	= dest_w;
	canvas.height	= dest_h;

	// 背景色
	ctx.beginPath();
	ctx.rect(0, 0, dest_w, dest_h);
	ctx.fillStyle = 'white';
	ctx.fill();

	// 繪圖
	ctx.drawImage(
		img,
		0,
		0,
		dest_w,
		dest_h
	);

	// 轉換DataURL
	return canvas.toDataURL('image/jpeg', quality);
}
